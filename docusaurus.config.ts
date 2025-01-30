// Docusaurus configuration for docs.loreum.org
// This file initializes the categories and structure for the documentation site.

module.exports = {
  themes: ['@docusaurus/theme-mermaid'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  title: 'Loreum Docs',
  tagline: 'Documentation for the Loreum Network',
  url: 'https://docs.loreum.org',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.loreum.org/logos/white.svg',
  organizationName: 'Loreum',
  projectName: 'docs',
  headTags: [
    {
      tagName: 'script',
      attributes: {
        src: 'https://umami.loreum.org/script.js',
        "data-website-id": "b4198c1b-6151-48bb-a3b9-231c4c54d6a0"
      },
    },
  ],
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
            {label: 'Network', to: '/network'},
            {label: 'Architecture', to: '/architecture'},
            {label: 'Governance', to: '/governance'},
            {label: 'Tokenomics', to: '/tokenomics'},
            {label: 'Whitepaper', to: '/whitepaper'},
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
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/loreum-org/docs/edit/main/blog/',
        // },
      },
    ],
  ],


};