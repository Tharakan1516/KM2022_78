/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Form, Nav, FormControl } from "react-bootstrap";
import Head from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Print from "./print";

const General = (props) => (
  <tr>
    <td>{props.General.name}</td>
    <td>{props.General.telephone}</td>
    <td>{props.General.address}</td>
    <td>{props.General.salary}</td>
    <td>{props.General.date}</td>
    <td>
      <Link to={"/updatestaff/" + props.General._id}>update</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteGeneral(props.General._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class viewGeneralInventory extends Component {
  constructor(props) {
    super(props);

    this.deleteGeneral = this.deleteGeneral.bind(this);

    this.state = { General: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/staff/")
      .then((response) => {
        this.setState({ General: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteGeneral(id) {
    axios.delete("http://localhost:5000/api/staff/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      General: this.state.General.filter((el) => el._id !== id),
    });
  }

  GeneralList() {
    return this.state.General.map((currentGeneral) => {
      return (
        <General
          General={currentGeneral}
          deleteGeneral={this.deleteGeneral}
          key={currentGeneral._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Head />
        <br />

        <br />

        <h3> View Hospital Staff Details</h3>
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Staff Name</th>
              <th>Telephone No</th>
              <th>Adress</th>
              <th>Salary</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.GeneralList()}</tbody>
        </table>
        <Print />
      </div>
    );
  }
}

/* //    <Nav.Link href="#home">Logout</Nav.Link> */
