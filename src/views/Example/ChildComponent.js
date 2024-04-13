import React from 'react';
// Class component (stateless)
class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState ({
            showJob: !this.state.showJob
        })
    }
    handleOnclickDelete = (job) => {
        // alert("click me!")
        console.log("handleOnclickDelete:", job)
        this.props.deleteAJob(job)


    }
    render(){
        let {arrJobs} = this.props;
        let {showJob} = this.state;
        return(
            <>
                {showJob === false && <div><button onClick={() => this.handleShowHide()}>Show</button></div>}
                {showJob && 
                <>
                    <div className="job_lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key ={item.id}>
                                    {item.title} - {item.salary} &nbsp; <span onClick={()=> this.handleOnclickDelete(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                </>}
                
            </>
        )
    }
}

// Function component (statefull)

// const ChildComponent = (props) => {
//     let {arrJobs} = props;

//     return (
//         <>
//             <div className="job_lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 600) {
//                             return (
//                                 <div key={item.id}> 
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;