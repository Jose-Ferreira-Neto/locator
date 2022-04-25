import React from 'react';
import Style from './UserInfo.module.css';

class UserInfo extends React.Component{
    render(){
        return(
        <div className={Style.userInfo}>
            <span>{this.props.campo1}</span>            
            <span>{this.props.campo2}</span>            
            <span>{this.props.campo3}</span>            
            <span>{this.props.campo4}</span>            
            <span>{this.props.campo5}</span>            
          </div>
        );
    }
}
export default UserInfo;