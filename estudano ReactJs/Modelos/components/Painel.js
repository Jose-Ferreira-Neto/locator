import Style from './Painel.module.css';
import {Outlet, Link} from 'react-router-dom' 
function Painel(){
    return(
    <div className={Style.painel}>
        <Link to={'/cargo'}>APARECER ELEMENTO TESTE</Link>
        <br/>
        <Link to={'/app'}>APARECER ELEMENTO APP</Link>
        <Outlet/>
    </div>
    )
}
export default Painel;