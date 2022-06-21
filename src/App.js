import React, { Component } from "react";
import Table from "./Components/Table";
import WorkerForm from "./Components/WorkerForm/form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    workers: [],
    workerToEdit: {}
  };

  removeWorker = (idx) => {
    const { workers } = this.state;
    this.setState({
      workers: workers.filter((worker, index) => index != idx)
    });
  };

  saveWorker=(worker)=>{
    if (worker.id.length > 0) {
      this.editWorker(worker);
    } else {
      this.addWorker(worker)
    }
  }

  addWorker = (worker) => {
    worker.id = uuidv4();
    this.setState({
      workers: [...this.state.workers, worker]
    });
    
  };
  setWorkerToEdit = (id) => {
    const workerToEdit = this.state.workers.filter(
      (workerItem) => workerItem.id == id
    );

    this.setState({
      workerToEdit: workerToEdit != undefined ? workerToEdit[0] : {}
    });
  };

  editWorker = (worker) => {
    const workers = this.state.workers.map((workerItem) => {
      if (worker.id == workerItem.id) {
        workerItem = worker;
      }

      return workerItem;
    });

    this.setState({
      workers
    });
  };
  render() {
    const { workers } = this.state;
    return (
      <div className="container">
        <WorkerForm
          saveWorker={this.saveWorker}
          workerToEdit={this.state.workerToEdit}
        />
        <br />
        <Table
          workersData={workers}
          removeWorker={this.removeWorker}
          setWorkerToEdit={this.setWorkerToEdit}
        />
      </div>
    );
  }
}

export default App;
