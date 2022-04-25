import React from 'react';
import Style from '../../App.module.css'
import Ticket from './Tickect';
class Soon extends React.Component{
  render(){      
    return(
    <>
      EM BREVE:
        <Ticket id={1} casa='Juventus' fora='internacional' value={12} local='barro' contact={99999}/>
        <Ticket id={1} casa='Juventus' fora='internacional' value={12} local='barro' contact={99999}/>
        <Ticket id={1} casa='Juventus' fora='internacional' value={12} local='barro' contact={99999}/>
        <button className={Style.btn}>AGENDAR HORÁRIO</button>
    </>
    )}
}
export default Soon;