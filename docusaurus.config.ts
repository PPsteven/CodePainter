import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CodePainter",
  staticDirectories: ["public", "static", "assets"],
  tagline: "Dinosaurs are cool",
  favicon: "img/gopher.svg",

  // Set the production url of your site here
  url: "https://ppsteven.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PPsteven", // Usually your GitHub org/user name.
  projectName: "PPsteven.github.io", // Usually your repo name.

  onBrokenLinks: "warn", // warn and build pass when it detects any broken link
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  // detect md, mdx file
  markdown: {
    format: "detect",
    mermaid: true,
  },

  // presets: [['classic', {docs: {sidebarPath: require.resolve('./sidebars.js')}]]
  // plugins can have options specified by wrapping the name and an options object in a two-member tuple(string, object)
  // inside your config. This style is usually called "Babel Style".
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PPsteven/CodePainter/tree/master",
        },
        blog: {
          path: "./blog",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "CodePainter",
      logo: {
        alt: "CodePainter",
        src: "img/gopher.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "techwiki",
          position: "left",
          label: "Documents",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          label: "Topics",
          position: "right",
          items: [
            {
              label: "Interview Notes",
              to: "docs/pages/9e81db/",
            },
          ],
        },
        {
          href: "https://github.com/PPsteven",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Interview Notes",
              to: "docs/pages/9e81db/",
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/PPsteven",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PPsteven. Built with Docusaurus. Hosted by Github Pages.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: "golang",
    },
  } satisfies Preset.ThemeConfig,

  plugins: ["docusaurus-plugin-sass"],
};

export default config;
