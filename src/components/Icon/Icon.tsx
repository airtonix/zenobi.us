import React, { useState, useEffect, SyntheticEvent } from 'react'
import classnames from 'classnames'
import LoadJs from 'loadjs'

import { Logger } from '~/services/logger'
import './Icon.scss'

const log = Logger(module.id)

export const IconAssetUrl = [
  'https://fonts.googleapis.com/css?family=',
  'Material+Icons|',
  'Material+Icons+Outlined|',
  'Material+Icons+Two+Tone|',
  'Material+Icons+Round|',
  'Material+Icons+Sharp'
].join('')

export enum IconSizes {
  Enormous = 'enormous',
  Massive = 'massive',
  Huge = 'huge',
  Large = 'large',
  Big = 'big',
  Normal = 'normal',
  Small = 'small',
  Inherited = 'inherited'
}

export enum IconTones {
  Light = 'light',
  Dark = 'dark',
}

export enum IconStyles {
  Round = 'round',
  Sharp = 'sharp',
  Outline = 'outline',
  TwoTone = 'two-tone',
}

export enum IconBadgeStyles {
  Solid = 'solid',
  Outline = 'outline',
}

export type IconProps = {
  name?: string,
  children?: string,
  className?: string,
  size?: IconSizes,
  badge?: IconBadgeStyles,
  tone?: IconTones,
  style?: IconStyles,
  disabled?: boolean,
  onClick?: React.EventHandler<SyntheticEvent>,
  assetUrl?: typeof IconAssetUrl
}

export const Icon:React.FC<IconProps> = ({
  className,
  name,
  children,
  size,
  badge,
  tone,
  style,
  disabled,
  onClick,
  assetUrl,
}) => {
  const [ isReady, setReady ] = useState(false)

  useEffect(() => {
    log('loadAsset', assetUrl)
    if (document.querySelector(`link[href="${assetUrl}"]`)) {
      log('loadAsset.exists', assetUrl)
      setReady(true)
      return
    }

    LoadJs([`css!${assetUrl}`], { returnPromise: true })
      .then(() => setReady(true))
  })

  const sizeName = (size || '').toLowerCase()
  const toneName = (tone || '').toLowerCase()
  const styleName = (style || '').toLowerCase()
  const badgeName = badge && (
    typeof badge === 'boolean'
      ? IconBadgeStyles.Solid
      : badge
  ).toString().toLowerCase()

  return isReady && (
    <span
      className={classnames(
        className,
        'icon material-icons',
        disabled && 'icon--disabled',
        !!onClick && 'icon--clickable',
        !!badgeName && 'icon--is-badge',
        badgeName === IconBadgeStyles.Solid && 'icon--is-solid-badge',
        badgeName === IconBadgeStyles.Outline && 'icon--is-outline-badge',
        sizeName === IconSizes.Inherited && 'icon--size-inherited',
        sizeName === IconSizes.Small && 'icon--size-small',
        (!size || sizeName === IconSizes.Normal) && 'icon--size-normal',
        sizeName === IconSizes.Big && 'icon--size-big',
        sizeName === IconSizes.Large && 'icon--size-large',
        sizeName === IconSizes.Huge && 'icon--size-huge',
        sizeName === IconSizes.Massive && 'icon--size-massive',
        sizeName === IconSizes.Enormous && 'icon--size-enormous',
        styleName === IconStyles.Round && 'icon--style-round material-icons-round',
        styleName === IconStyles.Sharp && 'icon--style-sharp material-icons-sharp',
        styleName === IconStyles.Outline && 'icon--style-outline material-icons-outlined',
        styleName === IconStyles.TwoTone && 'icon--style-twotone material-icons-two-tone',
        toneName === IconTones.Dark && 'icon--tone-dark',
        toneName === IconTones.Light && 'icon--tone-light',
      )}
      onClick={onClick}
      aria-hidden
    >{name || children}</span>
  )
}

Icon.defaultProps = {
  disabled: false,
  assetUrl: IconAssetUrl
}
