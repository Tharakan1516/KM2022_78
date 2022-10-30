import { Button, Form } from "react-bootstrap";
import axios from "axios";
//import {Link} from "react-router-dom"
import React, { Component } from "react";
import "../App.css";
import Head from "./Navbar";
export default class AddDrugs extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangePurpose = this.onChangePurpose.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      amount: "",
      price: "",
      purpose: "",
      date: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangePurpose(e) {
    this.setState({
      purpose: e.target.value,
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
      amount: this.state.amount,
      price: this.state.price,
      purpose: this.state.purpose,
      date: this.state.date,
    };

    console.log(general);

    axios.post("http://localhost:5000/api/drugs/add", general).then((res) => {
      console.log(res.data);
    });

    this.setState({
      name: "",
      amount: "",
      price: "",
      purpose: "",
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
            ADD DRUGS DETAILS{" "}
          </h1>
          <br />
          <br />

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label> Drug Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Drug Name"
                onChange={this.onChangeName}
                value={this.state.name}
              />
            </Form.Group>

            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Amount In Hand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Amount In Hand"
                onChange={this.onChangeAmount}
                value={this.state.amount}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFrom">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={this.onChangePrice}
                value={this.state.price}
              />
            </Form.Group>

            <Form.Group controlId="formBasicBalance">
              <Form.Label>Purpose Of Drug</Form.Label>
              <Form.Control
                type="text"
                placeholder="Purpose Of Drug"
                onChange={this.onChangePurpose}
                value={this.state.purpose}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label> Imported Date</Form.Label>
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
