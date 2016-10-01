var dir = require('path').resolve(__dirname,'build');
module.exports = [];

config
    ("poppy");

function config (name) {
    module.exports.push({
        'entry' : {
            'app': './demos/'+name+'/index.js'
        },
        'output' : {
            'path' : dir,
            'publicPath' : '/build/',
            'filename' : name+ '.bundle.js'
        },
        'module' : {
            'loaders' : [{
                'test' : /\.jsx?$/,
                'loader' : 'babel-loader',
                'exclude' : /node_modules/,
                'query' : {
                    'presets' : ['react']
                }
            }]
        }
    });
    return config;
}
