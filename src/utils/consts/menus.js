export default [
  {
    name: 'articles',
    title: '文章管理',
    icon: 'compose',
    children: [
      {
        title: '文章列表',
        route: '/articles/index'
      }, {
        title: '分类列表',
        route: '/articles/categories'
      }
    ]
  },
  {
    name: 'settings',
    title: '系统设置',
    icon: 'compose',
    children: [
      {
        title: '网站设置',
        route: '/settings/index'
      }
    ]
  }
]
