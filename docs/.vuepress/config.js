module.exports = {
  base: '/webpack-analyse/',
  dest: 'dist',
  title: 'webpack 技术揭秘',
  description: 'Analysis webpack deeply',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'zebing/webpack-analyse',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [],
    sidebar: {}
  }
}
