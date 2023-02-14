const initialState = {
    token: "",
    id: "",
  };
  
const tokenReducers=(prevState=initialState,action)=>{
    switch(action.type){
        case "storeToken":
            return {
                ...prevState,
                token: action.token,
                id: action?.id,
                name:action?.name,
                email:action?.email
            }

            case "removeToken":
                return {
                    ...prevState,
                    token: "",
                    id: "",
                }

                default:
                    return initialState

    }
}

export default tokenReducers