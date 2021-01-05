module.exports = {
  devServer: {
    // proxy: 'http://127.0.0.1:3000'
    proxy: {
        '/api':{
            target:'http://127.0.0.1:3000',
            changeOrigin: true,
            ws:true
        }
    }
  },
};
