import React,{Component,Fragment} from 'react';
import TodoItem from './component/TodoItem';
import './style.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:['学习React','运动','收拾房间']
        }
        //绑定this值，指向TodoList
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
    }
    handleInputChange(e){
        //setState接收回调函数
        //回调函数中（{}）表示返回一个对象
        const value=e.target.value;
        this.setState(()=>({
            inputValue:value
        }));
    }
    handleBtnClick(e){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }));
    }
    handleItemDelete(index){
        //immutable
        //state不允许我们做任何的改变
        // this.state.list.splice(index,1);
        this.setState((prevState)=>{
            const arr=[...prevState.list];
            arr.splice(index,1);
            return {list:arr}
        });
    }

    getTodoList(){
        return this.state.list.map((value,index)=>{
            return (
            <TodoItem item={value} 
            key={index}
            onHandlerDeleteItem={this.handleItemDelete.bind(this,index)} 
           />)
}
);
    }
    render(){
        return (
            <Fragment>
                {/* Fragment充当一个包裹元素*/}
                <div>
                <label htmlFor="insertArea">输入内容</label>
                <input id="insertArea" value={this.state.inputValue}
                onChange={this.handleInputChange}
                className="input"/>
                {/*htmlFor 替代html里的for 点击label insertArea获取光标 */}
                <button onClick={this.handleBtnClick}>提交</button></div>
                <ul>
                    {this.getTodoList()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;