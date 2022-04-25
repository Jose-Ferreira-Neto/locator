import React, {Fragment} from 'react';
import Style from './Schedule.module.css';
class Schedule extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.setState({clicked:!this.state.clicked})   
    }
    render(){
        let horario = new Date().toLocaleDateString()
        return(
            <Fragment>
                <div className={Style.container}>
                    <div onClick={this.handleChange} className={this.state.clicked? Style.matchImg_open : Style.matchImg } name='match'  id='1'>
                    <img  className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>
                    <div className={Style.active}>
                    <div className={Style.openTxt}>
                    <span>ID:{this.props.id}</span>    
                        <span>HORÁRIO: {horario}</span>
                        <span>LOCAL:{this.props.local}</span>
                        <span>TIMES:{this.props.casa +' VS '+ this.props.fora}</span>
                        <span>VALOR DO INGRESSO:{this.props.value}</span>
                        <span>CONTATO DO ORGANIZADOR:{this.props.contact}</span>
                        </div>
                    </div>                     
                    </div>
                    <div className={Style.matchImg} >
                    <img name='match' className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                    
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                    
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                    </div>                    
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                    
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                    
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                    
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                   
                    </div>
                    <div className={Style.matchImg}>
                    <img className={Style.match} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.overlayImg}>
                        <span>MAIS DETALHES...</span>
                    </div>                    
                    </div>
                    <button id='but'>press</button>
                </div>
            </Fragment>
        );
    }
}
export default Schedule;