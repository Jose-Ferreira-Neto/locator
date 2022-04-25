import React from 'react';
import NavLinkWithProps from '../NavLink.js';
import { MdHomeFilled, MdSchedule, MdOutlineContactPhone } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { GiSoccerField } from "react-icons/gi";
import StyleNavBar from './NavBar.module.css';
class NavBar extends React.Component{
    render(){
    return(
    <div className={StyleNavBar.navbar}>
        <span className={StyleNavBar.logo}><GiSoccerField size={50}/></span>
        <ul>
        <NavLinkWithProps name={<MdHomeFilled size={30}/>} to={'/'}/>
        <NavLinkWithProps name={<BiUserCircle size={30}/>} to={'/user'}/>
        <NavLinkWithProps name={<MdSchedule size={30}/>}to={'/schedule'}/>
        <NavLinkWithProps name={<MdOutlineContactPhone size={30}/>} to={'/contact'}/>
        </ul>
    </div>
)}
}
export default NavBar;