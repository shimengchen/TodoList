import {GET_INIT_LIST,CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
// import axios from 'axios'
export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value:value
});
export const getAddTodoItemAction=()=>({
    type:ADD_TODO_ITEM
});
export const getDeleteTodoItemAction=(index)=>({
    type:DELETE_TODO_ITEM,
    index:index
});
export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data:data
});
// export const getTodoList=()=>{
//     // 可以返回函数
//     return (dispatch)=>{
//         axios.get('/mofang').then((ref)=>{
//             const action=initListAction(ref.data);
//             dispatch(action);
//         }); 
//  }
// }

export const getInitList=()=>({
    type:GET_INIT_LIST
})