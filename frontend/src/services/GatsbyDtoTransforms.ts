import { navigate } from 'gatsby'
import { get } from 'lodash'

import { GatsbyGlobalLinkDto } from '~/types/content'

import { GlobalLinkDto } from './GlobalLinksContext'

export function transformGatsbyGlobalLink (links: GatsbyGlobalLinkDto[]): GlobalLinkDto[] {
  return links.map(({
    id,
    path,
    context
  }) => {
    return {
      id,
      label: get(context, 'title'),
      groups: get(context, 'navs', []),
      onClick: () => navigate(path),
    }
  })
}
