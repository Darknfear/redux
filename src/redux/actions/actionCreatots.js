export function toggleIsAdding  ()  {
    return {
        type : "TOGGLE_ISADING"
    }
}
export function addWord (en,vn)  {
 
    return {
        type : "ADD_WORD",
        en : en,
        vn : vn
    }
}
export function setFilterStatus(actionType){
    return {
        type : actionType
    }
}
export function toggleMemorized(id){
    return {
        type : "TOGGLE_MEMORIZED",
        id : id
    }
}
export function toggleShow(id){
    return {
        type : "TOGGLE_SHOW",
        id : id
    }
}