import { createSlice } from "@reduxjs/toolkit";




export const StoreAndRemoveToken =createSlice({
name:"token",
initialState:{
id:'',
name:"",
email:"",
token:""

},
    reducers:{

        storetoken:(state,action)=>{
            const { email, id, name, token } = action.payload;
            state.id=id;
            state.name=name;
            state.token=token;
            state.email=email
        },
        removetoken:(state,action)=>{
         state.token=null;
         state.id=null;
         state.name=null;
         state.email=null
        }
        
    } 
    
     
})
console.log("this is token",StoreAndRemoveToken);

export const {storetoken,removetoken}=StoreAndRemoveToken.actions;
export default StoreAndRemoveToken.reducer