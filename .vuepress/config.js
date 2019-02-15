module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'GFM',
      description: 'GitHub Flavored Markdown Spec'
    },
    '/cn/': {
      lang: 'zh-CN',
      title: 'GFM',
      description: 'GitHub Flavored Markdown Spec'
    }
  },
  themeConfig: {
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        // nav: require('./nav/en'),
        // sidebar: require('./sidebar/en'),
      },
      '/cn/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // nav: require('./nav/zh'),
        // sidebar: require('./sidebar/zh'),
      }
    }
  },
}