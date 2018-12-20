import React,{Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
    // componentWillReceiveProps(){
    //     console.log("Todoitem receive props");
    // }
    // componentWillUnmount(){
    //     console.log(this.props.item+"我被卸载啦");
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.item!==this.props.item){
            return true;
        }

    }
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
    item:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    onHandlerDeleteItem:PropTypes.func
}

TodoItem.defaultProps={
    title:"任务"
}

export default TodoItem;