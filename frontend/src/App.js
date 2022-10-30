import React, { useState, useEffect } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddSurInventory from "./Inventory management/AddSurInventory";
import ViewGeneralInventory from "./Inventory management/ViewGeneralInventory";
import ViewSurgicalInventory from "./Inventory management/ViewSurgicalInventory";
import UpdateSurgicalInventory from "./Inventory management/UpdateSurgicalInventory";

import UpdateGeneralInventory from "./Inventory management/UpdateGeneralInventory";
import UserContext from "./context/UserContext";
import ViewInventory from "./Inventory management/Inventory";
import AddGenInventory from "./Inventory management/AddGenInventory";

import AddDrugs from "./Inventory management/AddDrugs";
import ViewDrugs from "./Inventory management/ViewDrugs";

import ViewStaff from "./Inventory management/ViewStaff";
import AddStaff from "./Inventory management/AddStaff";
import UpdateStaff from "./Inventory management/UpdateStaff";

import PrintThisComponent from "./Inventory management/print";
import UpdateDrugs from "./Inventory management/UpdateDrugs";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/api/users/tokenIsValid",
        {},
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route
            path="/updategen/:id"
            exact
            component={UpdateGeneralInventory}
          />
          <Route path="/" exact component={ViewInventory} />

          <Route path="/addsurg" exact component={AddSurInventory} />

          <Route path="/adddrug" exact component={AddDrugs} />
          <Route path="/viewdrug" exact component={ViewDrugs} />
          <Route path="/updatedrugs/:id" exact component={UpdateDrugs} />

          <Route path="/addstaff" exact component={AddStaff} />
          <Route path="/viewstaff" exact component={ViewStaff} />
          <Route path="/updatestaff/:id" exact component={UpdateStaff} />

          <Route path="/Surgtable" exact component={ViewSurgicalInventory} />

          <Route path="/Surgical" exact component={ViewSurgicalInventory} />

          <Route path="/General" exact component={ViewGeneralInventory} />
          <Route path="/fileupload" exact component={File} />

          <Route
            path="/updateSurgical/:id"
            exact
            component={UpdateSurgicalInventory}
          />

          <Route path="/gentable" exact component={ViewGeneralInventory} />

          <Route path="/addsurg" exact component={AddSurInventory} />

          <Route path="/addgen" exact component={AddGenInventory} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
