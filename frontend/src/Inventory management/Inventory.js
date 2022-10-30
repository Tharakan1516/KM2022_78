import React from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import { Link } from "react-router-dom";
import logo from "./pictures/hospital.png";
import img2 from "./pictures/patientN.png";
import img3 from "./pictures/doctorN.png";
import img4 from "./pictures/staffN.png";
import img1 from "./pictures/medi.png";
import img5 from "./pictures/patientN1.png";
import img6 from "./pictures/staffN1.png";
import img7 from "./pictures/doctorN1.png";
import img8 from "./pictures/med2.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Head from "./Navbar";
const ViewInventory = () => {
  return (
    <div>
      <Head />
      <div>
        <div class="container">
          <div>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: 50,
                  color: "Brown",
                }}
              >
                {" "}
                <br /> Supramaniyam Medi Clinic
              </h1>
              <br />
              <br />

              <div style={{ justifyContent: "center", display: "flex" }}>
                <table>
                  <tr>
                    <td>
                      <Card className="card1" style={{ width: "18rem" }}>
                        <Card.Img
                          src={img2}
                          alt="user"
                          height="100"
                          width="100"
                        />
                        <Card.Body>
                          <Card.Title>Add Patients Details</Card.Title>
                          <Card.Text>to add Patients Details</Card.Text>
                          <Link to="/addsurg">
                            <Button variant="primary">Add</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </td>

                    <td>
                      <Card className="card3" style={{ width: "18rem" }}>
                        <Card.Img
                          src={img5}
                          alt="user"
                          height="100"
                          width="100"
                        />
                        <Card.Body>
                          <Card.Title>View Patients Details</Card.Title>
                          <Card.Text>to view Patients Details</Card.Text>
                          <Link to="/surgtable">
                            <Button variant="primary">View</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </td>

                    <td>
                      <Card className="card8" style={{ width: "18rem" }}>
                        <Card.Img
                          src={img6}
                          alt="user"
                          height="100"
                          width="100"
                        />

                        <Card.Body>
                          <Card.Title>Add Hospital Staff Details</Card.Title>
                          <Card.Text>to add staff Details</Card.Text>
                          <Link to="/addstaff">
                            <Button variant="primary">Add</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </td>

                    <td>
                      <Card className="card9" style={{ width: "18rem" }}>
                        <Card.Img
                          src={img4}
                          alt="user"
                          height="100"
                          width="100"
                        />
                        <Card.Body>
                          <Card.Title>View Hospital Staff Details</Card.Title>
                          <Card.Text>to view Staff Details</Card.Text>
                          <Link to="/viewstaff">
                            <Button variant="primary">View</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                </table>
              </div>
              <br />
              <br />
              <div style={{ justifyContent: "center", display: "flex" }}>
                <table>
                  <td>
                    <Card className="card4" style={{ width: "18rem" }}>
                      <Card.Img
                        src={img3}
                        alt="user"
                        height="100"
                        width="100"
                      />
                      <Card.Body>
                        <Card.Title>Add Doctor Details</Card.Title>
                        <Card.Text>to add Doctor Details</Card.Text>
                        <Link to="/addgen">
                          <Button variant="primary">Add</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </td>

                  <td>
                    <Card className="card5" style={{ width: "18rem" }}>
                      <Card.Img
                        src={img7}
                        alt="user"
                        height="100"
                        width="100"
                      />
                      <Card.Body>
                        <Card.Title>View Doctor Details</Card.Title>
                        <Card.Text>to view Doctor Details</Card.Text>
                        <Link to="/gentable">
                          <Button variant="primary">View</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </td>

                  <td>
                    <Card className="card6" style={{ width: "18rem" }}>
                      <Card.Img
                        src={img1}
                        alt="user"
                        height="100"
                        width="100"
                      />
                      <Card.Body>
                        <Card.Title>Add Drug Details</Card.Title>
                        <Card.Text>to add Drug Details</Card.Text>
                        <Link to="/adddrug">
                          <Button variant="primary">Add</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </td>

                  <td>
                    <Card className="card7" style={{ width: "18rem" }}>
                      <Card.Img
                        src={img8}
                        alt="user"
                        height="100"
                        width="100"
                      />
                      <Card.Body>
                        <Card.Title>View Drug Details</Card.Title>
                        <Card.Text>to view Drug Details</Card.Text>
                        <Link to="/viewdrug">
                          <Button variant="primary">View</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </td>
                </table>
                <br />
                <br />
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer
            style={{
              height: "50px",
            }}
          >
            <div>
              <input type="file" id="myfile" name="Filename"></input>
            </div>
            <div
              style={{
                textAlign: "center",
                paddingBottom: "15px",
                backgroundColor: "#128b27",
              }}
            >
              <hr />
              &copy; 2022 copyright: Knowledge Management.com
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ViewInventory;
