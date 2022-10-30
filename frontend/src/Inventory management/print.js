import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class PrintThisComponent extends Component {
  render() {
    return (
      <div>
        <Button
          variant="dark"
          style={{ width: "220px" }}
          onClick={() => window.print()}
        >
          Print
        </Button>
      </div>
    );
  }
}
