import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import './App.css';
import {URLQUIPMENT} from './settings';

function Equipment() {
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover variant="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Catagory</th>
            <th>Weight</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {/* <tbody>
          {URLQUIPMENT.map((test) => (
            <tr key={test.name}>
              <td>{test.name}</td>
            </tr>
          ))}
        </tbody> */}
      </ReactBootStrap.Table>
    </div>
  );
}
export default Equipment;
