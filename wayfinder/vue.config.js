const path = require('path')

module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
                vue$: path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js'),
            }
        }
    },
}