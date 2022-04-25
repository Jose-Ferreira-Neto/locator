import React from 'react'
import Button from '../Button';
import Style from './UserPainel.module.css'
import Avatar from '../Avatar'
import UserInfo from '../UserInfo';
class UserPainel extends React.Component{
        render(){
        return(
        <>
        <div className={Style.cracha}>
        </div>
          <Avatar src='https://netshoes-image-store.s3.amazonaws.com/marketplace/seller-logo/15264.png' />
          <UserInfo campo1='ID:' campo2='NOME:' campo3='CPF:' campo4='DATA DE NASCIMENTO:' campo5='ID DA ÚLTIMA RESERVA:'/>
          <div className={Style.buttons}>
          <Button txt='ALTERAR DADOS'/>
          <Button txt='REALIZAR RESERVA'/>
          </div>
          </>
        
)}
}
export default UserPainel;