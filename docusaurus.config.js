// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DFIR Wiki',
  tagline: 'Shared knowledge database for Digital Forensics and Incident Response',
  url: 'https://www.it-forensics.wiki', // Your website URL
  baseUrl: '/',
  projectName: 'DFIR-playbooks-and-wiki',
  organizationName: 'Explie',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        lunr: {
          titleBoost: 8,
          contentBoost: 1,
          tagsBoost: 5,
        }
      },
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Explie/DFIR-playbooks-and-wiki/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Explie/DFIR-playbooks-and-wiki/blob/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/bootstrap-grid.min.css'), require.resolve('./src/css/bootstrap-utilities.min.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'DFIR Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wiki',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'docSidebar',
            sidebarId: 'playbooks',
            position: 'left',
            label: 'Playbooks',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tools',
            position: 'left',
            label: 'Tools',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Explie/DFIR-playbooks-and-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/wiki/',
              },
              {
                label: 'Windows',
                to: '/docs/wiki/windows',
              },
              {
                label: 'NIX',
                to: '/docs/wiki/NIX',
              }
            ],
          },
          {
            title: 'Incident Response Playbooks',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/playbooks/',
              },
              {
                label: 'Ransomware',
                to: '/docs/playbooks/ransomware',
              },
              {
                label: 'Business Mail Compromise',
                to: '/docs/playbooks/bec',
              }
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/tools/',
              },
              {
                label: 'Windows',
                to: '/docs/tools/windows',
              },
              {
                label: 'NIX',
                to: '/docs/tools/nix',
              },
            ],
          },
          {
            title: 'Misc',
            items: [
              {
                label: 'Contributors',
                to: '/contributors',
              },
              {
                label: 'Copyright',
                to: '/copyright',
              },
              {
                label: 'Impress',
                to: '/impress',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Explie/DFIR-playbooks-and-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IT-Forensics Wiki built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
