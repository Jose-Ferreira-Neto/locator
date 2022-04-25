import React from 'react';
import StyleNavBar from './partials/NavBar.module.css';
import { NavLink } from "react-router-dom";
import {isActive} from './repeat.js'
class NavLinkWithProps extends React.Component{
    render(){
        return (
        <NavLink style={isActive} to={this.props.to}>
            <li>
                <span className={StyleNavBar.icon}>{this.props.name}</span>
            </li>
        </NavLink>
        )
    }
}
export default NavLinkWithProps;