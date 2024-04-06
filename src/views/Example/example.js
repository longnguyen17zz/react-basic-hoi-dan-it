import React from 'react';

class Mycomponent extends React.Component {
    state = {
        firstName: '',
        lastname: ''
    };

    handleChangefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('Successfully')
    }
   

    render(){
        
        return(
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" value={this.state.firstName} onChange={(event)=> this.handleChangefirstName(event)}/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" value={this.state.lastName} onChange={(event)=> this.handleChangelastName(event)}/><br/><br/>
                <input type="submit" value="Submit" onClick={(event)=> this.handleSubmit(event)}/>
            </form> 
          
          
        )
    }
}

export default Mycomponent;