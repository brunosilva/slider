const publicRoot = '..',
  root = `${publicRoot}`,
  paths = {
    src: `${root}/src`,
    dist: `${root}/assets`,
    js: 'js',
    css: 'css',
    scss: 'sass',
    img: 'images',
    fonts: []
  },
  vendor = [];

module.exports = {
  root,
  theme: {
    main: {
      scss: {
        src: `${paths.src}/${paths.scss}/main.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'main.css' 
      }
    }
  }
};