import React from "react";

class ClockDisplay extends React.Component {
    constructor (props) {
        super(props);
    }


    render() {

        let {colorH,colorS,colorL,time} = this.props;
        //let color = 'hsl('+colorH+','+colorS+'%, 30%)';
        //let color = 'hsl('+colorH+','+colorS+'%,'+colorL+'%)';
        let colorLine = 'hsl(220,'+colorS+'%,50%)';
        let color = 'hsl('+colorH+',100%,'+colorL+'%)';

        return (
            <div className="ClockDisplay"  style={{color: color}}>{time.toLocaleTimeString('pl-PL')}
            <hr className='ClockLine' style={{color: colorLine}}/>
            </div>
        );
    }

}

export default ClockDisplay;