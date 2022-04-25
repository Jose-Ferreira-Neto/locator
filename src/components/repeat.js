function isActive({isActive}){
        return{
            backgroundColor:isActive?"#efefef":'',
            color:isActive?"#000":'#e1e1e1',
            textDecoration:'none'
    }
}

export {isActive};