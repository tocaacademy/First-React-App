import React, {Component} from 'react'
import Table from './Components/Table'
import WorkerForm from './Components/WorkerForm/form'
import updateForm from './Components/updateForm/form'

class App extends Component{
    state = {
        workers : []
    }
    

    removeWorker = (idx)=>{
        const {workers} = this.state
        this.setState({
            workers: workers.filter((worker,index)=>(index!=idx))
        })
    }

    addWorker=(worker)=>{
        this.setState({
            workers:[...this.state.workers, worker]
        })
    }
    render(){
        const {workers} = this.state
        return(
            <div  className='container'>
                <WorkerForm addWorker={this.addWorker}/>
                <br/>
                <Table 
                    workersData={workers}
                    removeWorker={this.removeWorker}
                />               
                
            </div>
            
        )
    }
}


export default App