module.exports = {
  title: 'Kvl框架API 接口文档',  // 设置网站标题
  description : 'Adroi',
  base : './',
  themeConfig : {
    nav : [
        { text: 'github', link: 'https://github.com/maskletter/Kvl' },
        { text: '演示项目源码', link: 'https://github.com/maskletter/Kvl-demo' },
        // { text: '附录：错误码', link: '/error' }
    ],
    sidebar: [
      {
        title: '初始化',
        collapsable: false,

        children: [
          ['/install','初始化安装']
        ]
      },
      // ['/install', '初始化安装'],
      
      {
        title: 'Api说明',
        collapsable: false,
        children: [ 
          ['/init', '方法说明'],
          ['/ts', 'ts类说明'],
          ['/cli', 'kvl cli使用']
        ]
      }
    ],
    sidebarDepth : 2
  }
}
