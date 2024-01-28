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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/swipload/docs/tree/main/',
          // docLayoutComponent: "@theme/DocPage",
          docItemComponent: '@theme/ApiItem', // derived from docusaurus-theme-openapi-docs
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

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api', // plugin id
        docsPluginId: 'classic', // id of plugin-content-docs or preset for rendering docs
        config: {
          freights: {
            // the <id> referenced when running CLI commands
            specPath: 'openapis/freights/swagger.yaml', // path to OpenAPI spec, URLs supported
            outputDir: 'docs/api/freights', // output directory for generated files
            sidebarOptions: {
              // optional, instructs plugin to generate sidebar.js
              groupPathsBy: 'tag', // group sidebar items by operation "tag"
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

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
        {to: '/release-notes', label: 'Release notes', position: 'left'},
        {
          type: 'dropdown',
          label: 'API',
          position: 'left',
          items: [
            {
              label: 'Freights',
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
            },
          ],
        },
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
              label: 'API',
              to: '/docs/api/freights',
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
