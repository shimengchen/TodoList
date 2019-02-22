//容器组件
import React,{Component} from 'react'
import 'antd/dist/antd.css';
import store from './store/index.js';
import {getInitList,getInputChangeAction,getAddTodoItemAction,getDeleteTodoItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI.js';

class TodoList_antd extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        //subscribe是一个订阅函数，可以感知store的变化
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange(e){
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleBtnClick(e){
        const action=getAddTodoItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action=getDeleteTodoItemAction(index);
        store.dispatch(action);
    }
    handleStoreChange(){
        //重新得到store中的数据
        this.setState(store.getState());
    }
    render(){
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount(){
        // const action=getTodoList();
        // store.dispatch(action);
        // axios.get('/mofang').then((res)=>{
        //     const data=res.data;
        //     const action=initListAction(data);
        //     store.dispatch(action);
        // });
        const action =getInitList();
        store.dispatch(action);
    }
}
export default TodoList_antd;