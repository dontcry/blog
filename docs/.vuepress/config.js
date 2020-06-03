module.exports = {
    base: '/blog/',
    title: 'lihr\'s blog',
    description: 'lihr的博客',
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
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