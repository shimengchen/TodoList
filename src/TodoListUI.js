//UI组件
import React,{Component} from 'react';
import { Input,Button,List } from 'antd';
class TodoListUI extends Component{
    render(){
        return (<div>
        <div style={{margin:'10px'}}>
        <Input 
        value={this.props.inputValue}
        placeholder="To do info" 
        style={{width:'300px',marginRight:'10px'}}
        onChange={this.props.handleInputChange}/>
        <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
        </div>

        <List
         bordered
         dataSource={this.props.list}
         renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
         style={{width:'400px'}}
        />
        </div>)
    }
}

export default TodoListUI;