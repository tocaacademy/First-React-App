import { Component } from "react";

class WorkerForm extends Component{
    initState = {
        name:"",
        job:""
    }

    jobs = ["Developer","Front-End","Back-End", "Full Stack"]
    state=this.initState
     
    onChangeNJ=(event)=>{
        const {name, value} = event.target
        this.setState({
            [name]:value

        })
    }

    onSubmit=()=>{
        this.props.addWorker(this.state)
    }
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Name</label>
                        <input name="name" onChange={this.onChangeNJ} type='text' placeholder="Write the name"/>
                    </div>
                    <div>
                        <label>Job</label>
                        <select name="job" onChange={this.onChangeNJ}>
                            <option value="">Choose a Job</option>
                            {
                                this.jobs.map((job,idx)=>{
                                     return(
                                      <option value={job}>{job}</option>
                                )})
                               

                            }
                        </select>
                    </div>
                    <div>
                        <input onClick={this.onSubmit} type='button' value="Save" />
                    </div>
                </form>
            </div>
        )
    }
}

export default WorkerForm