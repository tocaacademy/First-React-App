import React from "react"

const TableBody=({workersData, removeWorker, setWorkerToEdit})=>{
    return(
        <tbody>
                    {
                        workersData.map((item,idx)=>{
                            return(<tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.job}</td>
                                    <td>
                                        <button type="button" onClick={()=>{removeWorker(idx)}}>Delete</button>
                                        <button type="button" onClick={()=>{setWorkerToEdit(item.id)}}>Edit</button>
                                    </td>
                                </tr>)
                        })
                        
                    }
                </tbody>
    )
}


export default TableBody