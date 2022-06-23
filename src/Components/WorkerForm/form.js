import React, { Component } from "react";

class WorkerForm extends Component {
  initState = {
    id: "",
    name: "",
    sexo:"",
    job: "",
    depto:"",
    country:""
  };

  // arreglo para listar los trabajos(jobs)
  jobs = ["Developer", "Front-End", "Back-End", "Full Stack"]
  deptos = ["Managua", "Leon", "Chinandega", "Estelí", "Alajuela"]
  countrys = ["Nicaragua", "Costa Rica", "EEUU", "Italia"]

  state = this.initState;

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.workerToEdit !== this.props.workerToEdit) {
      this.setState(this.props.workerToEdit);
    }
  }

  onChangeNJ = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = () => {
    this.props.saveWorker(this.state);
    this.setState(this.initState);
  };

  render() {
    const { name, job, sex} = this.state;

    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              autoFocus
              value={name}
              name="name"
              onChange={this.onChangeNJ}
              type="text"
              placeholder="Write the name"
            />
          </div>
          <div>
            <label>Sex</label>
            <div>
              <input 
			  value="Male"
			  name="sex"
			  onChange={this.onChangeNJ}
			  type="radio"/>Male
              <br/>
              <input 
			  value="Female"
			  name="sex"
			  onChange={this.onChangeNJ}
			  type="radio"/>Female
            </div>
          </div>
          <div>
            <label>Job</label>
            <select name="job" onChange={this.onChangeNJ}>
              <option value="">Choose a Job</option>
              {
                this.jobs.map((job,idx)=>{
                  return(
                    <option value={job}>{job}</option>
                  )
                })
              } 
            </select>            
          </div>
          <div>
            <label>Country</label>
            <select name="country" onChange={this.onChangeNJ}>
              <option value="">Choose a Country</option>
              {
                this.countrys.map((country,idx)=>{
                  return(
                    <option value={country}>{country}</option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <label>Department</label>
            <select name="depto" onChange={this.onChangeNJ}>
              <option value="">Choose a Department</option>
              {
                this.deptos.map((depto,idx)=>{
                  return(
                    <option value={depto}>{depto}</option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <input onClick={this.onSubmit} type="button" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default WorkerForm;
