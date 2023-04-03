// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Heaven Studio',
  favicon: 'img/appLogo.png',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RHeavenStudio', // Usually your GitHub org/user name.
  projectName: 'RHeavenStudio.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  deploymentBranch: 'gh-pages',

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
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-contributing',
        path: 'docs-contributing',
        routeBasePath: 'docs-contributing',
        sidebarPath: require.resolve('./sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-tips',
        path: 'docs-tips',
        routeBasePath: 'docs-tips',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/HSBanner.png',
      metadata: [
        {
          name: "og:description",
          content: "Heaven Studio is a (WIP) Rhythm Heaven level editor made in Unity."
        },
        {
          name: "og:url",
          content: "https://rheavenstudio.github.io/"
        },
        {
          name: "og:image",
          content: "https://raw.githubusercontent.com/RHeavenStudio/rheavenstudio.github.io/main/static/img/HSBanner.png"
        },
        {
          name: "og:image:secure_url",
          content: "https://raw.githubusercontent.com/RHeavenStudio/rheavenstudio.github.io/main/static/img/HSBanner.png"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:url",
          content: "https://rheavenstudio.github.io/"
        },
        {
          name: "twitter:description",
          content: "Heaven Studio is a (WIP) Rhythm Heaven level editor made in Unity."
        },
        {
          name: "twitter:image",
          content: "https://raw.githubusercontent.com/RHeavenStudio/rheavenstudio.github.io/main/static/img/HSBanner.png"
        },
      ],
      navbar: {
        title: 'Heaven Studio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/appLogo.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Editor',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/docs-tips/intro',
            label: 'Tips',
            position: 'left',
            activeBaseRegex: `/docs-tips/`,
          },
          {
            to: '/docs-contributing/intro',
            label: 'Contributing',
            position: 'left',
            activeBaseRegex: `/docs-contributing/`,
          },
          {
          type: 'localeDropdown',
          position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Editor',
                to: '/docs/intro',
              },
              {
                label: 'Tips',
                to: '/docs-tips/intro',
              },
              {
                label: 'Contributing',
                to: '/docs-contributing/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/2kdZ8kFyEN',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCAb3R-5qyXWOEj8B4vibhxQ',
              },
            ],
          },
        ],
        copyright: `NoCopyright Heaven Studio Team 2021-2023`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'jp', 'es', 'pt', 'fr', 'da'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        path: 'en',
      },
      ar: {
        label: 'العربية (مصر)',
        direction: 'rtl',
        path: 'ar',
      },
      jp: {
        label: '日本語',
        path: 'jp',
      },
      es: {
        label: 'Español',
        path: 'es',
      },
      pt: {
        label: 'Português (Brasil)',
        htmlLang: 'pt-BR',
        path: 'pt-BR',
      },
      fr: {
        label: 'Français',
        path: 'fr',
      },
      da: {
        label: 'Dansk',
        path: 'da',
      },
    },
  },
};

module.exports = config;
