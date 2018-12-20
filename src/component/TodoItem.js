import React,{Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
    render(){
        const {item,onHandlerDeleteItem,title}=this.props;
        return (
            <div>
                <li onClick={onHandlerDeleteItem}>{title}-{item}</li>
            </div>
        )
    }
}

TodoItem.propTypes={
    item:PropTypes.string,
    onHandlerDeleteItem:PropTypes.func
}

TodoItem.defaultProps={
    title:"任务"
}

export default TodoItem;