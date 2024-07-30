const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada de la aplicación
    output:{
        filename:'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist', //carpeta de salida 
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader' , 'css-loader'] , // libreriasloaders que sirven para procesar archivos CSS
            },
            {
                test:/\.js$/, // Regex sirve para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use:{
                    loader: 'babel-loader', //Loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores 
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde el cual el servidor agarrara los archivos
        compress: true, //Habilitar la compresion gzip 
        port: 9000, //Puerto de servidor de desarrollo
    },
};