import React, {Component} from 'react'
import Table from './Components/Table'

class App extends Component{
    state = {
        workers : [
            {
                name:"Emilio",
                job:"Developer"
            },
            {
                name:"Abner",
                job:"Developer"
            },
            {
                name:"Evertz",
                job:"Developer"
            },
            {
                name:"Fernando",
                job:"Developer"
            },
            {
                name:"Vicente",
                job:"Developer"
            },
            {
                name:"Marvin",
                job:"Developer"
            }
        ]
    }
    

    removeWorker = (idx)=>{
        const {workers} = this.state
        this.setState({
            workers: workers.filter((worker,index)=>(index!=idx))
        })
    }
    render(){
        const {workers} = this.state
        return(
            <div className='container'>
                <Table 
                    workersData={workers}
                    removeWorker={this.removeWorker}
                />
            </div>
        )
    }
}


export default App