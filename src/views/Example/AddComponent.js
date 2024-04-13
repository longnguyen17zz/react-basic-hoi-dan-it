import React from 'react';
// Add data vào mảng ban đầu
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert("Missing required parameters")
        }else {
            console.log("check data input ", this.state)
            this.props.addNewJob({
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                salary: this.state.salary
            })
        }

        this.setState({
            title: "",
            salary: ""
        })
        // alert('Successfully')
    }
   
    render(){
        return(
            <form>
                <label htmlFor="fname">Job's title:</label><br/>
                <input type="text" value={this.state.title} onChange={(event)=> this.handleChangetitle(event)}/><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text" value={this.state.salary} onChange={(event)=> this.handleChangesalary(event)}/><br/><br/>
                <input type="submit" value="Submit" onClick={(event)=> this.handleSubmit(event)}/>
            </form> 
        )
    }
}

export default AddComponent;