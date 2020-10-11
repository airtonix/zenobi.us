import { createContext } from 'react'

export type GlobalLinkDto = {
  id: string,
  label: string,
  groups: string[],
  onClick?: () => void,
  url?: string
}

export type GlobalLinksDto = GlobalLinkDto[]

export const GlobalLinksContext = createContext<GlobalLinksDto>([])


export const GlobalLinksProvider = GlobalLinksContext.Provider
export const GlobalLinksConsumer = GlobalLinksContext.Consumer
