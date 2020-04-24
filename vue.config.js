module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
              'components' : '@/components',
              'assets' : '@/assets',
              'common' : '@/common',
              'network' : '@/network',
              'views' : '@/views',
            }
        }
    }
}
