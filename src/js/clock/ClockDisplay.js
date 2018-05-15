import React from "react";

class ClockDisplay extends React.Component {
    constructor (props) {
        super(props);
        this.state = { isHoover: false };
        this.handleHover = this.handleHover.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }

    handleHover() {

        this.setState({isHoover: true});
        //console.log(e);
        // if (e.target.className === 'ClockDisplay') {
        //     this.setState({isHoover: true})
        // } else {
        //     this.setState({isHoover: false})
        // }
        //
        // this.setState(prevState =>({
        //     isHoover: !prevState.isHoover
        // }));
    }

    handleMouseOut() {
        this.setState({isHoover: false});
    }


    render() {

        let {colorH,colorS,colorL,time} = this.props;
        //let color = 'hsl('+colorH+','+colorS+'%, 30%)';
        //let color = 'hsl('+colorH+','+colorS+'%,'+colorL+'%)';
        let colorLine = 'hsl(220,'+colorS+'%,50%)';
        let color = 'hsl('+colorH+',100%,'+colorL+'%)';

        return (
            <div className="ClockDisplay"  style={{color: color}}  onMouseEnter= {this.handleHover}
                onMouseLeave={this.handleMouseOut}>{time.toLocaleTimeString('pl-PL')}
            <div className="ClockText">{this.state.isHoover ? 'True' : 'False'}</div>
            <hr className="ClockLine" style={{color: colorLine}}/>
            </div>
        );
    }

}

export default ClockDisplay;