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
    <td>{props.General.amount}</td>
    <td>{props.General.price}</td>
    <td>{props.General.purpose}</td>
    <td>{props.General.date}</td>
    <td>
      <Link to={"/updatedrugs/" + props.General._id}>update</Link> |{" "}
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
      .get("http://localhost:5000/api/drugs/")
      .then((response) => {
        console.log(response.data);
        this.setState({ General: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteGeneral(id) {
    axios.delete("http://localhost:5000/api/drugs/" + id).then((response) => {
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

        <h3> View Drugs Details</h3>
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Drug Name</th>
              <th>Total Amount</th>
              <th>Price</th>
              <th>Purpose Of Drug</th>
              <th>Imported Date</th>
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
