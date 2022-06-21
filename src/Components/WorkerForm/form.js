import { Component } from "react";

class WorkerForm extends Component{
    initState = {
        id:"",
        name:"",
        job:"",
        error:false
    }
    state=this.initState
    
    onChangeNJ=(event)=>{
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    onSubmit=()=>{
         const {id,name, job} = this.state
        if(id.trim().length==0 ||name.trim().length==0 || job.trim().length==0){//el trim elimina espacios
            this.setState({
                error:true,
            })
        }
        else
        {
            this.props.addWorker(this.state)

        }
    }
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>ID</label>
                        <input name="id" onChange={this.onChangeNJ} type='text' placeholder="Write the ID"/>
                        {(this.state.error && this.state.id.trim().length ===0)?<small style={{color: 'red'}}>Campo recquerido</small>:null}

                    </div>
                    <div>
                        <label>Name</label>
                        <input name="name" onChange={this.onChangeNJ} type='text' placeholder="Write the name"/>
                        {(this.state.error && this.state.name.trim().length ===0)?<small style={{color: 'red'}}>Campo requerido</small>:null}

                    </div>
                    <div>
                        <label>Job</label>
                        <input name="job" onChange={this.onChangeNJ} type='text' placeholder="Write the job"/>
                        {(this.state.error && this.state.job.trim().length ===0)?<small style={{color: 'red'}}>Campo requerido</small>:null}

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