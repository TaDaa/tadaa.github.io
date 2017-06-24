var React = require('react'),
ReactDOM = require('react-dom'),
router = require('../../../react-inline-router/libs'),
Route = router.Route,
MyComponent = React.createClass({
    'render' : function () {
        return <div>
                <Route isDefault>
                    <button onClick={this._onHelloHello}>ClickME</button>
                </Route>
                <Route path="./hello">
                    <button onClick={this._onHelloGoodBye}>HELLO GO AWAY</button>
                    <button onClick={this._onHelloWorld}>HELLO WORLD</button>
                    <Route path="./world">
                    WORLD!!!!
                    </Route>
                </Route>
        </div>
    },
    '_onHelloHello' : function () {
        router('/hello',{});
    },
    '_onHelloGoodBye' : function () {
        router('/hello').clear();
    },
    '_onHelloWorld' : function () {
        router('/hello/world',{});
    }
})

window.addEventListener('load',function () {
    ReactDOM.render(
        <MyComponent></MyComponent>,
        document.body.querySelector('.viewport')
    )
});
