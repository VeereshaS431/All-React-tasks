

const initialState={
    todos:[]
}

const todoReducer=(state=initialState, action)=>{

    switch(action.type){
        case "ADD_TODO":
            return {...state,todos:[...state.todos,action.payLoad]}


        case "DELETE_TODO":
            console.log(action.payLoad)
            const result=state.todos.filter((val,index)=>{
                return index!=action.payLoad
            })
            console.log(result)
            return {...state,todos:result}

        case "UPDATE_TODO":
            const updateData=state.todos.map((val,index)=>{
                if(index===action.index){
                    return action.payLoad
                }
                else{
                    return val
                }
            })

            return {...state, todos:updateData}

            default:
                return state
    }
}

export default todoReducer