//TODO loosen version requirements for react
var React = window.React =  require('react'),
ReactDOM = window.ReactDOM=  require('react-dom'),
Poppy = require('react-poppy'),


View = React.createClass({
    'getInitialState' : function () {
        return {
            'width':0,
            'height':0,
            'hDirection' : 1,
            'wDirection' : 1,
            'xDirection' : 1,
            'yDirection' : 0,
            'x' : 0,
            'y' : 0
        };
    },
    'componentDidMount' : function () {
        requestAnimationFrame(this._doTick);
    },
    '_doTick' : function () {
        var 
        state = this.state,
        hDirection = state.hDirection|0,
        wDirection = state.wDirection|0,
        width = state.width,
        height = state.height,
        wHeight = window.innerHeight,
        wWidth = window.innerWidth,
        x = state.x,
        y = state.y,
        xDirection = state.xDirection,
        yDirection = state.yDirection;

        if (height < 0 || height > window.innerHeight) {
            hDirection *= -1;
        } 
        if (width > 1000 || width < 0) {
            wDirection *= -1;
        }
        width += wDirection;
        height += hDirection;
        if (xDirection === 1 && x > wWidth-50-width) {
            if (y >= height-1) {
                if (x > wWidth-50) {
                    x = wWidth-50;
                } else {
                    y = height-1;
                }
            } else {
                x = wWidth-50-width;
            }
            xDirection=1;
            yDirection=1;
        }
        if (y > wHeight-50) {
            y = wHeight-50;
            yDirection=0;
            xDirection=-1;
        }
        if (x < 0) {
            x = 0;
            xDirection=0;
            yDirection=-1;
        }
        if (y < 0) {
            y =0;
            yDirection = 0;
            xDirection = 1;
        }
        x+=xDirection*2;
        y+=yDirection;
        this.setState({
            'height' : height,
            'width' :  width,
            'hDirection' : hDirection,
            'wDirection' : wDirection,
            'xDirection' : xDirection,
            'yDirection' : yDirection,
            'x' : x,
            'y' : y
        });
        requestAnimationFrame(this._doTick,16);
    },
    'render' : function () {
        return <div style={{position:'absolute',width:'100%',height:'100%',top:0,left:0,zIndex:0}}>
            <Poppy constrainTo="body" show={true}  arrowSize={this.state.arrowSize} content={"Pos is ("+this.state.x+','+this.state.y+')'}>
                <div ref="pos" style={{position:'absolute',top:this.state.y,left:this.state.x,width:50,height:50,background:'green'}}></div>
            </Poppy>
            <Poppy constrainTo="body" show={true}  arrowSize={this.state.arrowSize} content={"Size is ("+this.state.width+','+this.state.height+')'}>
                <div ref="size" style={{position:'absolute',top:0,right:0,width:this.state.width,height:this.state.height,background:'blue'}}></div>
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



            //<Popover bindScroll={true} arrowSize={this.state.arrowSize} region={this.state.region}  bindWindowResize={this.state.bindOnWindowResize} toggleOnClick={false}  show={true} showOnMouseEnter={true} hideOnMouseLeave={true} persistOverContent={false} constrainTo={'body'} title={"wtf2"} content={<div>{this.state.content}</div>}>
                //<SelectField ref="select" style={{position:'absolute',width:50,width:5000,height:5000,left:this.state.x,top:this.state.y}}  label={this.state.content} disabled={this.state.disabled} placeholder={this.state.placeholder}></SelectField>
            //</Popover>
            //<Popover bindScroll={true} region='right' arrowSize={40} arrowSize={15}   bindWindowResize={this.state.bindOnWindowResize} toggleOnClick={false}  show={true} showOnMouseEnter={true} hideOnMouseLeave={true} persistOverContent={false} constrainTo={'body'} title={"wtf2"} content={<div>{this.state.content}</div>}>
                //<SelectField ref="select"   style={{position:'absolute',width:50,left:(this.state.x|0)+2000,top:(this.state.y|0)+570}}  label={this.state.content} disabled={this.state.disabled} placeholder={this.state.placeholder}></SelectField>
            //</Popover>
