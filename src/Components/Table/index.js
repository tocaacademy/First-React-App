import React, {Component} from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";


class Table extends Component{
    render(){ 
        const {workersData,
                removeWorker} = this.props
        return(
            <table>
                <TableHeader/>
                <TableBody
                    workersData={workersData}
                    removeWorker={removeWorker}
                />
            </table>
        )
    }
}


export default Table