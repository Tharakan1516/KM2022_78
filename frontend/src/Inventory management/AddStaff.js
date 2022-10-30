import { Button, Form } from "react-bootstrap";
import axios from "axios";
//import {Link} from "react-router-dom"
import React, { Component } from "react";
import "../App.css";
import Head from "./Navbar";
export default class AddStaff extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      telephone: "",
      address: "",
      salary: "",
      date: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeTelephone(e) {
    this.setState({
      telephone: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeSalary(e) {
    this.setState({
      salary: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const general = {
      name: this.state.name,
      telephone: this.state.telephone,
      address: this.state.address,
      salary: this.state.salary,
      date: this.state.date,
    };

    console.log(general);

    axios.post("http://localhost:5000/api/staff/add", general).then((res) => {
      console.log(res.data);
    });

    this.setState({
      name: "",
      telephone: "",
      address: "",
      salary: "",
      date: "",
    });
  }
  render() {
    return (
      <div>
        <Head />
        <br />
        <div className="addinventory">
          <h1
            className="form"
            style={{ justifyContent: "center", display: "flex" }}
          >
            {" "}
            ADD HOSPITAL STAFF DETAILS{" "}
          </h1>
          <br />
          <br />

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label> Staff Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Staff Name"
                onChange={this.onChangeName}
                value={this.state.name}
              />
            </Form.Group>

            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Telephone No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telephone No"
                onChange={this.onChangeTelephone}
                value={this.state.telephone}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFrom">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={this.onChangeAddress}
                value={this.state.address}
              />
            </Form.Group>

            <Form.Group controlId="formBasicBalance">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Salary"
                onChange={this.onChangeSalary}
                value={this.state.salary}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label> Joined Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="DD/MM/YYYY"
                onChange={this.onChangeDate}
                value={this.state.date}
              />
            </Form.Group>

            <Button
              style={{ justifyContent: "center", display: "flex" }}
              variant="primary"
              type="submit"
            >
              ADD
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
