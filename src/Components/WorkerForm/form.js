import React, { Component } from "react";

class WorkerForm extends Component {
  initState = {
    id: "",
    name: "",
    job: ""
  };
  // arreglo para listar los trabajos(jobs)
  jobs = ["Developer", "Front-End", "Back-End", "Full stack"]

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
    const { name, job } = this.state;

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
            <label>Job</label>
            {/* <input
              value={job}
              name="job"
              onChange={this.onChangeNJ}
              type="text"
              placeholder="Write the job"
            /> */}

            {/* select del campo trabajo(job) */}
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
            <input onClick={this.onSubmit} type="button" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default WorkerForm;
