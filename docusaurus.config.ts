// Docusaurus configuration for docs.loreum.org
// This file initializes the categories and structure for the documentation site.

module.exports = {
  title: 'Loreum Docs',
  tagline: 'Documentation for the Loreum Network',
  url: 'https://docs.loreum.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.loreum.org/logos/white.svg',
  organizationName: 'Loreum',
  projectName: 'docs',

  themeConfig: {
    navbar: {
      title: 'Loreum',
      logo: {
        alt: 'Loreum Logo',
        src: 'https://cdn.loreum.org/logos/white.png',
      },
      items: [
        {to: '/', label: 'Docs', position: 'left'},
        {href: 'https://github.com/loreum-org', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/'},
            {label: 'Mission', to: '/mission'},
            {label: 'Getting Started', to: '/getting-started'},
            {label: 'Network', to: '/network'},
            {label: 'Architecture', to: '/architecture'},
            {label: 'Governance', to: '/governance'},
            {label: 'Tokenomics', to: '/tokenomics'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/loreumdao'},
            {label: 'Twitter', href: 'https://twitter.com/loreumdao'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/loreum-org'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Loreum DAO LLC`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/loreum-org/docs/edit/main/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/loreum-org/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};