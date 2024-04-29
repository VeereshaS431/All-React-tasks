



export const todoActionAdd=(todo)=>{

    const todoAction={
        type:"ADD_TODO",
        payLoad:todo
    }
    return todoAction
}

export const todoActionDelete=(index)=>{
    const todoAction={
        type:"DELETE_TODO",
        payLoad:index
    }
    return todoAction
}


export const todoActionUpdate=(index,todo)=>{
    const todoAction={
        type:"UPDATE_TODO",
        payLoad:todo,
        index:index
    }
    return todoAction
}



