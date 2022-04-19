import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import {getInvoices} from '../data'
function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }
function Element(){
    let cargos = getInvoices();
    let [searchParams, setParams]=useSearchParams();

return (
    <>
    <div>
        <input 
        value={searchParams.get('filter') || ''}
        onChange={(event)=>{
            let filter = event.target.value;
            if(filter){setParams({filter})}
            else{
                setParams({})
            }
        }}
        />
        {
        cargos.filter((cargos)=>{
            let filter = searchParams.get('filter')
            if(!filter) return true;
            let name = cargos.name.toLowerCase()
            return name.startsWith(filter.toLowerCase()) 
        }).map((data)=>(
            <QueryNavLink 
            style={({isActive})=>{return{
                display:'flex',
                color: isActive?'green':'red'
            }}}
            to={`/cargo/${data.number}`}
            key={data.number}
            >
            {data.name}
            </QueryNavLink>
        ))}
    </div>
    <div>
        <Outlet/>
    </div>
    </>
)
}
export default Element;