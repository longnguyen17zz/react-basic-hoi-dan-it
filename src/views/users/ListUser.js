import React from 'react';
import axios from 'axios';
import "./listUsers.scss";
import { withRouter } from 'react-router-dom';

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {// bất đồng bộ
        // hỗ trợ tù JS
        // axios.get("https://reqres.in/api/users?page=2")
        // .then(res => {
        //     console.log("check res", res)
        // })
        let res = await axios.get("https://reqres.in/api/users?page=1")
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let {listUsers} = this.state;
        return(
            <div className="list-user-container">
                <div className="title">
                    Fetch all list usersl
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                    listUsers.map((item,index) => {
                        return (
                            <div className="child" key={item.id} onClick={() => this.handleDetailUser(item)}>
                            {index+1} - {item.first_name} {item.last_name}
                            </div>
                        )
                       
                    })
                    }
                    
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);