// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Swipload Docs',
  tagline: 'MOVE YOUR TRANSPORT OPERATION FORWARD',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.swipload.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'swipload', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'Swipload Release Notes',
          blogDescription: 'Updates on the Swipload SaaS',
          blogSidebarTitle: 'Recent updates',
          editUrl: 'https://github.com/swipload/docs/tree/main/release-notes/',
          path: './release-notes',
          postsPerPage: 'ALL',
          routeBasePath: 'release-notes',
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Swipload Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: 132,
        },
        items: [
          {to: '/release-notes', label: 'Release notes', position: 'left'},
          {
            href: 'https://github.com/swipload/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                to: 'https://swipload.com/about-us',
              },
            ],
          },
          {
            title: 'Services',
            items: [
              {
                label: 'Login',
                to: 'https://app.swipload.no',
              },
              {
                label: 'Check Status',
                to: 'https://status.swipload.com',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: ' ',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/swipload',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Swipload Technologies AS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
