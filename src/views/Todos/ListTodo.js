import React from 'react';
import AddTodo from './AddTodo.js';
import './ListTodo.scss';
import { toast } from 'react-toastify';
import Color from '../HOC/Color.js';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            {id: "abc", title:"Doing homework"},
            {id: "abc1", title:"Playing game"},
            {id: "abc2", title:"Using React"}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Todos added successfully")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;
        // save
        if(isEmtyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })
            toast.success("Update Todo successed!")
            return;
        }
        // edit
        this.setState({
            editTodo: todo
        })
    }

    handleDeleteTodo = (todo) => {
        // console.log("Delete Todo", todo)
        let currentTodos  = this.state.listTodos;;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete successed")
    }
    
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render(){
        let {listTodos, editTodo} = this.state;

        let isEmtyObj = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                     Hello Nguyễn Văn Long
                </p>
                <div className="list-todo-container">
                        <AddTodo
                            addNewTodo={this.addNewTodo}
                        />
                        <div className="todolist-content">
                            {listTodos && listTodos.length > 0 && 
                                listTodos.map((item, index) =>{
                                    return (
                                        <div className="todo-child" key={item.id}>
                                            {isEmtyObj === true ?
                                            <span> {index+1} - {item.title} </span>
                                            :
                                            <>
                                            {editTodo.id === item.id ? 
                                                <span> {index+1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                /></span>
                                                :
                                                <span> {index+1} - {item.title} </span>
                                            }
                                                
                                            </>
                                            }   
                                            <button className="edit" 
                                                onClick={() => this.handleEditTodo(item)}
                                            >{isEmtyObj === false && editTodo.id === item.id ? "Save" : "Edit"}</button>
                                            <button className="delete"
                                                onClick={() => this.handleDeleteTodo(item)}
                                            >Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
           </>
        )
    }
}

export default Color(ListTodo);