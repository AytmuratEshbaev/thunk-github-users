
export function dataIsLoading(state = false, action: any){
    switch(action.type){
        case 'DATA_IS_LOADING':
            return action.isLoading
        default: 
            return state;
    }
}

export function datas(state= [], action: any){
    switch(action.type){
        case 'DATA_LOADED_SUCCESS':            
            return action.data;
        default:
            return state;
    }
}