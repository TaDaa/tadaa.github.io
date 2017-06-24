//TODO loosen version requirements for react
var React = window.React =  require('react'),
ReactDOM = window.ReactDOM=  require('react-dom'),
Poppy = require('react-poppy'),
//Poppy = require('react-poppy');


View = React.createClass({
    'getInitialState' : function () {
        return {
            'arrowSize' : 20
        };
    },
    'render' : function () {
        var 
        num_tests=1,i,ln,
        max_perc = 300,
        tick_perc = 20,
        tests = [],
        content,
        popovers = [];
        for (i=0,ln=num_tests;i<ln;i++) {
            tests.push(
                <div style={{width:300,padding:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            );
        }
        content = <div>{tests}</div>

        for (i=0,ln=max_perc;i<ln;i+=tick_perc) {
            popovers.push(<Poppy show={true} constrainTo="body" showOnMouseEnter={false} hideOnMouseLeave={false} bindScroll={true} arrowSize={this.state.arrowSize} content={content}>
                <div style={{position:'absolute',left:i+'%',top:i+'%',width:100,height:50}}>FOLLOW ME!!!!</div>
            </Poppy>);
        }


        return <div className="scroll-container" style={{position:'absolute',top:0,bottom:0,left:0,right:0,overflow:'auto'}}>
            <div style={{position:'absolute',top:0,left:0,height:max_perc+'%',width:max_perc+'%'}}>
                {popovers}
            </div>
        </div>
    }
})




window.addEventListener('load',function () {
    ReactDOM.render(
        <View></View>,
        document.body.querySelector('.react-viewport')
    )
});



            //<Popover bindScroll={true} arrowSize={this.state.arrowSize} region={this.state.region}  bindWindowResize={this.state.bindOnWindowResize} toggleOnClick={false}  show={true} showOnMouseEnter={true} hideOnMouseLeave={true} persistOverContent={false} constrainTo={'body'} title={"wtf2"} content={<div>{this.state.content}</div>}>
                //<SelectField ref="select" style={{position:'absolute',width:50,width:5000,height:5000,left:this.state.x,top:this.state.y}}  label={this.state.content} disabled={this.state.disabled} placeholder={this.state.placeholder}></SelectField>
            //</Popover>
            //<Popover bindScroll={true} region='right' arrowSize={40} arrowSize={15}   bindWindowResize={this.state.bindOnWindowResize} toggleOnClick={false}  show={true} showOnMouseEnter={true} hideOnMouseLeave={true} persistOverContent={false} constrainTo={'body'} title={"wtf2"} content={<div>{this.state.content}</div>}>
                //<SelectField ref="select"   style={{position:'absolute',width:50,left:(this.state.x|0)+2000,top:(this.state.y|0)+570}}  label={this.state.content} disabled={this.state.disabled} placeholder={this.state.placeholder}></SelectField>
            //</Popover>
