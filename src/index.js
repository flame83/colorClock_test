import React from 'react';
import ReactDom from 'react-dom';
//import './css/main.css';
import './css/main.scss';



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


class ColoredClock extends React.Component {
    constructor (props) {
        super (props);
        this.state = {myTime: new Date(), colorH: '0', colorS: '0', colorL: '100' };
        this.incS = +1;
        this.incL = +1;


    }

    // lifecycle hooks ? https://reactjs.org/docs/state-and-lifecycle.html
    componentDidMount() {
        this.timerId = setInterval( () => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    // --------------------------------------------------------

    changeColorH() {
        let H = Number(this.state.colorH);
        if (H < 360) {
            H +=1;
        } else {
            H = 0;
        }
        H = H.toString();

        this.setState({
            colorH: (this.state.colorH = H )
        });
    }

    changeColorS() {
        let S = Number(this.state.colorS);


        if (S === 100) this.incS = -1;
        if (S === 0)   this.incS = +1;

        S += this.incS;

        S= S.toString();

        this.setState({
            colorS: (this.state.colorS = S)

        });
    }

    changeColorL() {
        let L = Number(this.state.colorL);


        if (L === 100) this.incL = -1;
        if (L === 0) this.incL = +1;

        L += this.incL;
        L = L.toString();

        this.setState({
            colorL: (this.state.colorL = L )
        });
    }

    tick () {
        let incS = +1, incL = +1;
        this.setState({
            myTime: new Date()
        });

        this.changeColorH();
        this.changeColorS(incS);
        this.changeColorL(incL);


    }

    render() {
        let bckg = 'hsl('+this.state.colorH + ','+this.state.colorS+'%,50%)' ;
        return(
            <div className="ColoredClock" style={{background: bckg}}>
                <ClockDisplay time={this.state.myTime} colorH={this.state.colorH} colorS={this.state.colorS} colorL={this.state.colorL}/>
            </div>
        );
    }
}




ReactDom.render(
    <ColoredClock />, document.getElementById('root')
);


module.hot.accept();