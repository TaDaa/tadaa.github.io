var dir = require('path').resolve(__dirname,'build'),
fs = require('fs');
module.exports = [];


fs.readFile('./node_modules/react-poppy/dist/poppy.css',function (err,data) {
    if (err) {
        console.error(err.toString());
    } else {
        fs.writeFile('./build/poppy.css',data,function (err,done) {
            if (err) {
                console.error(err.toString());
            } else {
                console.error('done writing poppy.css');
            }
        });
    }
});


config
    ("poppy","scroll")
    ("poppy","track")
    ("poppy","statePosition")
    ("poppy","interaction")

function config (package,demo) {
    module.exports.push({
        'entry' : {
            'app': './demos/'+package+'/'+demo+'.js'
        },
        'output' : {
            'path' : dir,
            'publicPath' : '/build/',
            'filename' : package+ '.'+demo+'.js'
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

