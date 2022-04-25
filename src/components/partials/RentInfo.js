import React from 'react';
import Style from '../../App.module.css';
class InfoButton extends React.Component{
    render(){
        return(
        <div className={Style.info}>
            <span>CÓDIGO:{this.props.name}</span>
            <span>QUEM ALUGOU:</span>
            <span>MODALIDADE:</span>
            <span>HORÁRIO:</span>
            <span>DISPUTA: ICASA x FLAMENGO</span>
        </div>
        )
    }
}
export default InfoButton;
