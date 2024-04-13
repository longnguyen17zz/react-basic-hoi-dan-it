import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Mycomponent extends React.Component {
    state = {
        arrJobs: [
            {id: "job1", title: "Developer", salary: "600"},
            {id: "job2", title: "Tester", salary: "500"},
            {id: "job3", title: "Fullstask", salary: "1000"}
        ]
    };

    addNewJob = (job) => {
        console.log("check", job)
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs  = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }


    render(){
        console.log("check data call render", this.state )
        return(
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />           
            </>
        )
    }
}

export default Mycomponent;