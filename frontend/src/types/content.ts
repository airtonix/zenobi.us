export type GatsbyGlobalLinkDto = {
  id: string,
  path: string,
  context: {
    title: string,
    navs?: string[]
  }
}

export type GatsbyGlobalLinksCollectionDto = {
  nodes: GatsbyGlobalLinkDto[]
}

export type MdxFrontmatterDto = {
  title: string,
  tags?: string,
  date?: string
}

export type MdxContentPageDto = {
  id: string,
  slug?: string,
  body: string,
  frontmatter: MdxFrontmatterDto
}

export type MdxContextPageCollectionDto = {
  nodes: MdxContentPageDto[]
}

/**
 * General Page
 */
export type PageTemplateProps = {
  data: {
    allSitePage: GatsbyGlobalLinksCollectionDto,
    mdx: MdxContentPageDto
  }
}

/**
 * Blog Page
 */
export type BlogDetailPageProps = {
  data: {
    allSitePage: GatsbyGlobalLinksCollectionDto,
    mdx: MdxContentPageDto,
  }
}

/**
 * Blog List Page
 */

export type BlogListPageProps = {
  data: {
    allSitePage: GatsbyGlobalLinksCollectionDto,
    allMdx: MdxContextPageCollectionDto,
    mdx: MdxContentPageDto,
  }
}
