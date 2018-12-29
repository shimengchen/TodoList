import React,{Component,Fragment} from 'react';
import TodoItem from './component/TodoItem';
//import axios from 'axios';
import {CSSTransition} from 'react-transition-group';
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
                {/*添加csstransition动画 
                 in感应状态变化触发动画
                 timeout表示动画时间
                 unmountOnExit表示隐藏动画时DOM也在文档流中被移除
                 onEntered表示入场后的事件处理程序
                 el指向动画作用的DOM元素，也就是ul
                 appear表示元素第一次渲染是时是否作用动画
                 */}
                  <CSSTransition
                in={this.state.showList}
                timeout={1000}
                classNames='fade'
                unmountOnExit
                onEntered={(el)=>{el.style.color='blue'}}
                appear={true}
                >
                <ul >
                    {this.getTodoList()}
                </ul>
               </CSSTransition>
                <button onClick={this.handleHiddenList}>{this.state.showList?'隐藏任务':'显示任务'}</button>
            </Fragment>
        )
    }
}

export default TodoList;
