const path = require('path');

module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // resources: path.resolve(__dirname, 'src/styles/_variables.scss')
          resources: [
            path.resolve(__dirname, 'src/styles/_variables.scss'),
            path.resolve(__dirname, 'src/styles/_mixins.scss')
          ]
        })
        .end();
    });
  }
};
