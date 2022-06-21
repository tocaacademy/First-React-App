import React from "react"

const TableBody=({workersData, removeWorker})=>{
    return(
        <tbody>
                    {
                        workersData.map((item,idx)=>{
                            return(<tr key={idx}>
                                    <td>{item.id}</td>                            
                                    <td>{item.name}</td>
                                    <td>{item.job}</td>
                                    <td>
                                        <button type="button" onClick={()=>{removeWorker(idx)}}>Delete</button>
                                    </td>
                                </tr>)
                        })
                        
                    }
                </tbody>
    )
}


export default TableBody