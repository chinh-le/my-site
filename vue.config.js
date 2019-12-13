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
          resources: [
            path.resolve(__dirname, 'src/styles/preload/_variables.scss'),
            path.resolve(__dirname, 'src/styles/preload/_mixins.scss')
          ]
        })
        .end();
    });

    /* Remove the default rule - see vue-cli-default-webpack.config.js */
    /* config.module.rule('svg') */
    /* {
      test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
    }, */
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    /* Custom SVG loader */
    // eg: import Ripple from '@/components/svg/my-circle.svg?inline';
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      });
  }
};
