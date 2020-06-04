module.exports = {
    base: '/blog/',
    title: 'LIHR\'s blog',
    description: 'LIHR的博客  ',
    dest: './docs/.vuepress/dist',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    ga: '',
    theme: 'reco',
    evergreen: true,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: './img/i5.png',
        authorAvatar: './img/artist.png',
        author: 'LiHR',
        huawei: true,
        directories: [ // 目录分类器
            {
                id: 'post',
                dirname: '_posts',
                path: '/posts/',
                itemPermalink: '/posts/:year/:month/:day/:slug'
            },
        ],
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },

            {
                text: 'Blog',
                link: '/posts/',
            },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: 'Guide', link: '/guide/', icon: 'reco-date' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/languages/Chinese' },
                    { text: 'English', link: '/languages/English' }
                ], icon: 'reco-date'
            },
            { text: '文章', link: '/posts/NewBeginning', icon: 'reco-date' },
            { text: '百度', link: 'https://www.baidu.com', icon: 'reco-date' },
        ]
    }
}