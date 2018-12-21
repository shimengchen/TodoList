import React,{Component,Fragment} from 'react';
import TodoItem from './component/TodoItem';
//import axios from 'axios';
import './style.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:['学习React','运动','收拾房间'],
            showList:true
        }
        //绑定this值，指向TodoList
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleHiddenList=this.handleHiddenList.bind(this);
    }
    componentDidMount(){
        //适合发送异步请求
        // axios.get('/data/todoList')
        // .then(()=>{console.log('success')})
        // .catch(()=>{console.log('error')});
    }
    handleInputChange(e){
        //setState接收回调函数
        //回调函数中（{}）表示返回一个对象
        const value=this.input.value;
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
    handleHiddenList(){
        this.setState((prevState)=>({
            showList:!prevState.showList
        }));
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
        //JSX -> JS对象 -> 真实的DOM
        return (
            <Fragment>
                {/* Fragment充当一个包裹元素*/}
                <div>
                <label htmlFor="insertArea">输入内容</label>
                <input id="insertArea" value={this.state.inputValue}
                onChange={this.handleInputChange}
                className="input"
                ref={(input)=>{this.input=input}}
                />
                {/*htmlFor 替代html里的for 点击label insertArea获取光标 */}
                <button onClick={this.handleBtnClick}>提交</button></div>
                <ul className={this.state.showList?'show':'hidden'}>
                    {this.getTodoList()}
                </ul>
                <button onClick={this.handleHiddenList}>隐藏任务</button>
            </Fragment>
        )
    }
}

export default TodoList;