import React,{Component} from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import store from './store/index.js'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'

class TodoList_antd extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        //subscribe是一个订阅函数，可以感知store的变化
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange(e){
        const action={
            type:CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action);
    }
    handleBtnClick(e){
        const action={
            type:ADD_TODO_ITEM
        }
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action={
            type:DELETE_TODO_ITEM,
            index:index
        }
        store.dispatch(action);
    }
    handleStoreChange(){
        //重新得到store中的数据
        this.setState(store.getState());
    }
    render(){
        return (
            <div>
            <div style={{margin:'10px'}}>
            <Input 
            value={this.state.inputValue}
            placeholder="To do info" 
            style={{width:'300px',marginRight:'10px'}}
            onChange={this.handleInputChange}/>
            <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
            </div>

            <List
             bordered
             dataSource={this.state.list}
             renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
             style={{width:'400px'}}
            />
            </div>
        )
    }
}
export default TodoList_antd;