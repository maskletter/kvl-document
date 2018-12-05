module.exports = {
  title: 'Kvl接口文档',  // 设置网站标题
  description : 'Adroi',
  base : '/kvl-document/dist/',
  themeConfig : {
    nav : [
        { text: 'github', link: 'https://github.com/maskletter/Kvl' },
        { text: '演示项目源码', link: 'https://github.com/maskletter/Kvl-demo' },
        // { text: '附录：错误码', link: '/error' }
    ],
    sidebar: [
      {
        title: '快速上手',
        collapsable: false,
        children: [
          ['/install','初始化安装'],
          ['/use', '使用'],
          ['/express', 'express项目引入']
        ]
      },
      
      {
        title: 'Api说明',
        collapsable: false,
        children: [ 
          ['/init', '方法说明'],
          ['/ts', 'ts类说明'],
          ['/cli', 'kvl cli使用']
        ]
      },
      // {
      //   title: '使用',
      //   collapsable: false,
      //   children: [
      //     ['/use', '']
      //   ]
      // }
    ],
    sidebarDepth : 2
  }
}
