module.exports = {
    entry: [
      './app/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          // css modules
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: 
                {
                  modules: {
                    localIdentName: "[local]___[hash:base64:5]"
                  }
                }
            }
          ]
        },
        {
          // global
          test: /\.gcss$/,
          use: ['style-loader', 'css-loader'],
        },
        //////////
        {
          // Cargar archivos jpg,
          test: /\.(gif|svg|jpg|png)$/,
          use: [
            {
              loader: 'url-loader?limit=100000'
            },

          ]
        },
 
      ],
    },

    mode:'development',
  }



 // 