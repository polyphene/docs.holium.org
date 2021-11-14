const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Holium documentation',
  tagline: 'Documentations for the Holium Framework',
  url: 'https://docs.holium.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'polyphene', // Usually your GitHub org/user name.
  projectName: 'holium', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Holium',
      logo: {
        alt: 'Holium logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        {
          href: 'https://discord.gg/A3t5ZFSbCG/',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/polyphene/holium-rs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: 'Holium',
              href: 'https://holium.org',
            },
            ]
        },
        {
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/A3t5ZFSbCG',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/polyphene',
            },
          ],
        },
        {
          items: [
            {
              label: 'About us',
              href: 'https://twitter.com/polyphenehq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Holium`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      appId: 'YOUR_APP_ID',
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/polyphene/holium-docs/blob/main/`,
          remarkPlugins: [simplePlantUML],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
