import React from 'react';
import { withRouter } from 'react-router';
import Color from '../HOC/Color.js';


//HOC: Higher order component dạng withRouter()

class Home extends React.Component {
    componentDidMount(){
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // },3000)
    }
    render(){
        console.log(">>>check props", this.props)
        return (
            <div>Hello home page</div>
        )
    }
}

export default Color(Home);

// export default withRouter(Home);