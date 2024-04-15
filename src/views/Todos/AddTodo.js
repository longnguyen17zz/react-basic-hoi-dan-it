import  React from 'react';
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            toast.error(`Missing title's Todos`)
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }


    render(){
        let {title} = this.state;
        return(
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleChange(event)} />
                <button className="add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;