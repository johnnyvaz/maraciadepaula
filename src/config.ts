import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Márcia de Paiva',
  description: 'Maximize Seu Capital: Encontre as Melhores Estratégias Financeiras',
  author: {
    name: 'Johnny Vaz',
    twitter: '@johnnyvaz1',
    url: 'https://johnnyvaz.com.br',
    email: 'johnnyvaz@johnnyvaz.com.br',
    summary: ''
  },
  org: {
    name: 'Marcia Xavier de Paiva',
    twitter: '',
    url: 'https://marciadepaiva.com.br',
    email: 'contato@marciadepaiva.com.br',
    summary:
      'Maximize seu potencial financeiro com nossos serviços personalizados. Oferecemos crédito com garantia, antecipação de recebíveis e consultoria especializada para transformar seus sonhos de negócio em realidade sustentável.'
  },
  location: 'Grajaú, Rio de Janeiro - RJ',
  latlng: [-22.9184905, -43.265665] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Contato', href: 'contato' },

]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
