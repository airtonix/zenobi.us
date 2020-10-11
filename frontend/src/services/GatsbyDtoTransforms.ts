import { navigate } from 'gatsby'

import { GatsbyGlobalLinkDto } from '~/types/content'

import { GlobalLinkDto } from './GlobalLinksContext'

export function transformGatsbyGlobalLink (links: GatsbyGlobalLinkDto[]): GlobalLinkDto[] {
  return links.map(({
    id,
    path,
    context: {
      title,
      navs
    }
  }) => {
    return {
      id,
      label: title,
      groups: navs,
      onClick: () => navigate(path),
    }
  })
}
