const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
// js로 인식 안되는 애들은 loader를 설치해서 불러와줘야한다.
// vue는 vue-loader로 가져오고 있음
module.exports = {
  mode:'development',
  devtool:'eval',
  resolve:{
    extensions:['.js', '.vue'],
  },
  entry:{
    app:path.join(__dirname, 'main.js')
  },
  module:{
    rules:[{
      test:/\.vue$/,
      use:'vue-loader',
    },{
      test:/\.css$/,
      use:['vue-style-loader', 'css-loader']
    }]
  },
  plugins:[
    new VueLoaderPlugin(),
  ],
  output:{
    filename:'[name].js',
    path:path.join(__dirname, 'dist'),
    publicPath:'/dist',
  },
}