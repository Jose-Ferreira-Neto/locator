import React, {Fragment} from 'react';
import Style from './Ticket.module.css';
class Ticket extends React.Component{
    render(){
        let horario = new Date().toLocaleDateString();
        return(
            <Fragment>
                <div className={Style.ticket}>
                    <img className={Style.imgTicket} src='https://pbs.twimg.com/media/EaSPgkEXkAE3RP2.jpg' alt='times'/>
                    <div className={Style.ticketInfo}>
                        <span>ID:{this.props.id}</span>
                        <span>HORÁRIO: {horario}</span>
                        <span>LOCAL:{this.props.local}</span>
                        <span>TIMES:{this.props.casa +' VS '+ this.props.fora}</span>
                        <span>VALOR DO INGRESSO:{this.props.value}</span>
                        <span>CONTATO DO ORGANIZADOR:{this.props.contact}</span>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default Ticket;