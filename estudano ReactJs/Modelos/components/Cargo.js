import {useParams} from 'react-router-dom'
import {findById} from '../data'
function Cargo(){
    let params = useParams();
    let cargo = findById(parseInt(params.dataNumber,10))
    return(
        <div key={cargo.number}>
                <h1>{cargo.name}</h1>
                <p>{cargo.amount}</p>
                <p>{cargo.due}</p>
        </div>
    )
}
export default Cargo;