import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Head from "./Navbar";

export default class UpdateDrugs extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/drugs/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          amount: response.data.amount,
          price: response.data.price,
          purpose: response.data.purpose,
          date: response.data.date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

    const drugs = {
      name: this.state.name,
      amount: this.state.amount,
      price: this.state.price,
      purpose: this.state.purpose,
      date: this.state.date,
    };

    console.log(drugs);
    axios
      .post(
        "http://localhost:5000/api/drugs/update/" + this.props.match.params.id,
        drugs
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  render() {
    return (
      <div>
        <Head />
        <br />
        <div className="updateinventory">
          <h1
            className="form"
            style={{ justifyContent: "center", display: "flex" }}
          >
            {" "}
            Update Drugs Details{" "}
          </h1>
          <br />
          <br />

          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="Name"
                onChange={this.onChangeName}
                value={this.state.name}
              />
            </Form.Group>

            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="Amount"
                onChange={this.onChangeAmount}
                value={this.state.amount}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFrom">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Price"
                onChange={this.onChangePrice}
                value={this.state.price}
              />
            </Form.Group>

            <Form.Group controlId="formBasicBalance">
              <Form.Label>Purpose</Form.Label>
              <Form.Control
                type="Purpose"
                onChange={this.onChangePurpose}
                value={this.state.purpose}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label>Imported Date</Form.Label>
              <Form.Control
                type="Imported Date"
                onChange={this.onChangeDate}
                value={this.state.date}
              />
            </Form.Group>

            <Button
              style={{ justifyContent: "center", display: "flex" }}
              variant="primary"
              type="submit"
            >
              UPDATE
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
