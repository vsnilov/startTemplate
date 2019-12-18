'use strict';
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.vue$/,
                use: [ 'vue-loader'],
            },
			{
				test: /\.pug$/,
				oneOf: [
					// это применяется к `<template lang="pug">` в компонентах Vue
					{
						resourceQuery: /^\?vue/,
						use: ['pug-plain-loader']
					},
					// это применяется к импортам pug внутри JavaScript
					{
						//use: ['raw-loader', 'pug-plain-loader']
					}
				]
			}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
};
