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

var babelReactPreset = {
    'loaders' : [{
        'test' : /\.jsx?$/,
        'loader' : 'babel-loader',
        'exclude' : /node_modules/,
        'query' : {
            'presets' : ['es2015','react']
        }
    }]
};

config
    ("poppy","scroll",babelReactPreset)
    ("poppy","track",babelReactPreset)
    ("poppy","statePosition",babelReactPreset)
    ("poppy","interaction",babelReactPreset)
    //("router","simple",babelReactPreset);

function config (package,demo,mod) {
    module.exports.push({
        'entry' : {
            'app': './demos/'+package+'/'+demo+'.js'
        },
        resolve : {
            symlinks : false
        },
        'output' : {
            'path' : dir,
            'publicPath' : '/build/',
            'filename' : package+ '.'+demo+'.js'
        },
        'module' : mod
    });
    return config;
}

