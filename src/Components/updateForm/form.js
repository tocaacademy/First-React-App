import { Component } from "react";

class updateForm extends Component
{
    initState=
    {
        id:"",
        name:"",
        job:"",
    }
    state=this.initState
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>ID</label>
                        <input name="id"  type='text' placeholder="Write the ID"/>

                    </div>
                    <div>
                        <label>Name</label>
                        <input name="name"  type='text' placeholder="Write the name"/>

                    </div>
                    <div>
                        <label>Job</label>
                        <input name="job"type='text' placeholder="Write the job"/>

                    </div>
                    <div>
                        <input type='button' value="GUARDAR" />
                    </div>
                    <div>
                        <input  type='button' value="CANCELAR" />
                    </div>
                </form>
            </div>
        )
    }
}

export default updateForm
