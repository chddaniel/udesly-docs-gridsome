// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Docs',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com',
  settings: {
    web: 'https://www.udesly.com',
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        {
          path: '/wordpress/',
          title: 'WordPress',
          logo: 'WordPressLogo',
        }
      ],
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/installation/',
              '/docs/writing-content/',
              '/docs/deploying/',
            ],
          },
          {
            title: 'Configuration',
            items: ['/docs/settings/', '/docs/sidebar/'],
          },
        ],
      },
      {
        name: 'wordpress',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/wordpress/',
              '/wordpress/custom-attributes/',
              '/wordpress/page-types/',
              '/wordpress/elements/',
              '/wordpress/conversion-steps/',
              '/wordpress/glossary/',
              '/wordpress/faqs/',
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkdownPage',
        baseDir: './content',
        template: './src/templates/MarkdownPage.vue',
        plugins: ['@gridsome/remark-prismjs'],
      },
    },

    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     baseDir: './content',
    //     path: '**/*.md',
    //     typeName: 'MarkdownPage',
    //     remark: {
    //       externalLinksTarget: '_blank',
    //       externalLinksRel: ['noopener', 'noreferrer'],
    //       plugins: ['@gridsome/vue-remark'],
    //     },
    //   },
    // },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
};
