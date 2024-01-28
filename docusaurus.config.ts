import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'Swipload Release Notes',
          blogDescription: 'Updates on the Swipload SaaS',
          blogSidebarTitle: 'Recent updates',
          editUrl: 'https://github.com/swipload/docs/tree/main/',
          path: './release-notes',
          postsPerPage: 'ALL',
          routeBasePath: 'release-notes',
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Swipload Technologies AS.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 30),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
