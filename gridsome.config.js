// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss');

const postcssPlugins = [
  tailwind('./tailwind.config.js'),
];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Kessir Adjaho',
  siteDescription: "Kessir Adjaho, Full-Stack Software Engineer",
  siteUrl: "https://kessir.com",
  titleTemplate: `%s | Kessir Adjaho`,
  templates: {
    Post: '/blog/:slug',
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-32598219-7'
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/articles/**/*.md",
        typeName: "Post",
        refs:{
          tags:{
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options:{}
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
