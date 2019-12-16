const initState=[
    {"id":1,"text":"item1","undo":"text-undo"},
    {"id":2,"text":"item2","undo":"text-normal"},
]
const listToDoReducers = (state=initState,action) =>{
    if (action.type==='ADD_TODO'){
        return [...state,{"id":Math.random,"text":action.text,"undo":action.undo}]
    }
return state

}

export default listToDoReducers