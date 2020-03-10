module.exports = {
    entry: ["@babel/polyfill", "src/index.js"], //qual arquivo de entrada(ou principal)
    output: {
        path: __dirname + "/public", //diretório onde o bundle será gerado,
        filename: "bundle.js", //nome do arquivo destino
    },
    devServer: {
        contentBase: __dirname + "/public", //diretório onde o server será gerado
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        }]
    }
}