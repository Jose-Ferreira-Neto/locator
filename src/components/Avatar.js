import React from 'react';
import Style from './Avatar.module.css'
class Avatar extends React.Component{
    render(){
        return(
        <>
        <img className={Style.avatar} src={this.props.src} alt='img'/>    
        </>
        );
    }
}
export default Avatar;