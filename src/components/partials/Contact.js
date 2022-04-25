import React from 'react';
import Avatar from '../Avatar';
import UserInfo from '../UserInfo';
import Style from './Contact.module.css'
class Contact extends React.Component{
    render(){
        return(
            <>
            <div className={Style.main}>
                <Avatar src='https://netshoes-image-store.s3.amazonaws.com/marketplace/seller-logo/15264.png'/>
                <div>
                    CONTATOS
                </div>
                <UserInfo campo1='SUPORTE:' campo2='RESPONSÁVEL PELA QUADRA:' campo3='ENDEREÇO:' campo4='UMA INICIATIVA DR SPORTS'/>
            </div>
            </>
        );
    }
}
export default Contact;