

module.exports = {
  home: true,
  title: 'Kvl接口文档',  // 设置网站标题
  description : '',
  base : '/kvl-document/dist/',
  markdown: {
    lineNumbers: true
  },
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
          ['/express', 'express项目引入'],
          ['/no-kvl','一个空得项目'],
          // ['/config', '环境配置']
        ]
      },
      ['/config', '环境配置', 'cccccccc'],
      // { title: 'Guide', collapsable: false, url: '/config' },
      {
        title: '插件',
        collapsable: false,
        children: [
          ['/kvl-plugin', '内置插件'],
          ['/new-plugin', '编写插件']
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
