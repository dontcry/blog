module.exports = {
    base: '/blog/',
    title: 'LIHR\'s blog  ',
    description: 'LIHR的博客',
    dest: './docs/.vuepress/dist',
    ga: '',
    theme: 'reco',
    evergreen: true,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/languages/Chinese' },
                    { text: 'English', link: '/languages/English' }
                ]
            },
            { text: '百度', link: 'https://www.baidu.com' },
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: ['/guide/']
            }
        ]
    }
}