export const storeToken=(data)=>{
    return(dispatch)=>{
        dispatch({
            type:'storeToken',
            token:data.token,
            id:data?.id,
            name:data?.name,
            email:data?.email
        })
    }
}

export const removeToken=(data)=>{
    return(dispatch)=>{
        dispatch({
            type:'removeToken',
            token:data.token,
            id:data.id,
        })
    }
}