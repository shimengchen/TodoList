//UI组件-无状态组件:性能比较高，就是一个
import React from 'react';
import { Input,Button,List } from 'antd';

const TodoListUI=(props)=>{
    return (
        <div>
        <div style={{margin:'10px'}}>
        <Input 
        value={props.inputValue}
        placeholder="To do info" 
        style={{width:'300px',marginRight:'10px'}}
        onChange={props.handleInputChange}/>
        <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
        </div>

        <List
         bordered
         dataSource={props.list}
         renderItem={(item,index) => (<List.Item onClick={(index)=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
         style={{width:'400px'}}
        />
        </div>
    );
}

export default TodoListUI;