//TODO loosen version requirements for react
var React = window.React =  require('react'),
ReactDOM = window.ReactDOM=  require('react-dom'),
Poppy = require('react-poppy'),


View = React.createClass({
    'getInitialState' : function () {
        return {
            'text' : <div style={{width:300}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        };
    },
    'componentDidMount' : function () {
    },
    '_toggleGrow1' : function () {
        this.setState({
            'growContent1' : !this.state.growContent1
        })
    },
    '_toggleGrow2' : function () {
        this.setState({
            'growContent2' : !this.state.growContent2
        })
    },
    'render' : function () {
        return <div style={{position:'absolute',width:'100%',height:'100%',top:0,left:0,zIndex:0}}>
            <Poppy constrainTo="body" showOnMouseEnter hideOnMouseLeave arrowSize={this.state.arrowSize} content={this.state.text}>
                <button style={{margin:20,padding:10,height:50}} >HOVER ME</button>
            </Poppy>
            <Poppy constrainTo="body" showOnMouseEnter={false} hideOnMouseLeave={false} toggleOnClick arrowSize={this.state.arrowSize} content={this.state.text}>
                <button style={{margin:20,padding:10,height:50}} >CLICK TO TOGGLE</button>
            </Poppy>
            <Poppy constrainTo="body"  toggleOnClick arrowSize={this.state.arrowSize} content={this.state.text}>
                <button style={{margin:20,padding:10,height:50}} >HOVER WITH TOGGLE</button>
            </Poppy>
            <Poppy constrainTo="body" persistOverContent  arrowSize={this.state.arrowSize} content={this.state.text}>
                <button style={{margin:20,padding:10,height:50}}>MOUSEOVER POPOVER AND STAY VISIBLE</button>
            </Poppy>
            <Poppy constrainTo="body"  title={<div style={{whiteSpace:'nowrap'}}>CLICK THE BUTTON!!</div>} arrowSize={this.state.arrowSize} content={this.state.growContent1 && this.state.text}>
                <button onClick={this._toggleGrow1} style={{margin:50,padding:10,height:50}}>TOGGLE TO GROW CONTENT</button>
            </Poppy>
            <Poppy constrainTo="body" toggleOnClick title={<div style={{whiteSpace:'nowrap'}}>CLICK THE BUTTON!!</div>} arrowSize={this.state.arrowSize} content={this.state.growContent2 && this.state.text||''}>
                <button onClick={this._toggleGrow2} style={{margin:50,padding:10,height:50}}>TOGGLE TO GROW CONTENT AND STAY OPEN</button>
            </Poppy>
            <Poppy constrainTo="body"  persistOverContent  titleStyle={{background:'rgba(0,0,0,0.5)'}}title={<div style={{whiteSpace:'nowrap'}}>Hover me and Scroll!</div>} arrowSize={this.state.arrowSize} content={[this.state.text , this.state.text,this.state.text,this.state.text,this.state.text,this.state.text,this.state.text,this.state.text,this.state.text,this.state.text]}>
                <button onClick={this._toggleGrow2} style={{margin:50,padding:10,height:50}}>CAN SCROLL CONTENT</button>
            </Poppy>

        </div>
    }
})




window.addEventListener('load',function () {
    ReactDOM.render(
        <View></View>,
        document.body.querySelector('.react-viewport')
    )
});

