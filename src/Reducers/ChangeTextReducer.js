const changeTextReducer = (state='dddd',action) =>{
    if (action.type==='CHANGE_TXT'){
        return action.value
    }
return state

}

export default changeTextReducer