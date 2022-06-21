import React from "react";

const TableBody = ({ workersData, removeWorker, setWorkerToEdit }) => {
  return (
    <tbody>
      {workersData.map((item, idx) => {
        return (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  removeWorker(idx);
                }}
                style={{background:"tomato", borderColor:"tomato", marginRight:10}}
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => {
                  setWorkerToEdit(item.id);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
