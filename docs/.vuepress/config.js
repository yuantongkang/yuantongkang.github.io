const sidebar = require('vuepress-auto-sidebar')
module.exports = {
    title: '个人主页', 
    description: 'Sonic\'s Blog',
    themeConfig: {
        sidebar:{
            '/algorithm/': ['','link-has-loop'],
            '/': ['algorithm']
        },
        displayAllHeaders: true ,
    }
}