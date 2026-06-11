// docusaurus.config.js

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HearthCraft Wiki',
  tagline: 'Home is where the hearth is.',
  url: 'https://wiki.hearthcraft.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'simoneedotexe', // Usually your GitHub org/user name.
  projectName: 'HearthDocs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: 'HearthCraft Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/mascot.png',
      },
      items: [
        {to: '/docs/intro', label: 'Articles', position: 'left'},
        ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/simoneedotexe/HearthDocs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
