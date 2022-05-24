import UserSearch from "./components/UserSearch";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
const API_URL =
  "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";
function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setUserList(res.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="container-fluid p-3">
        <h2>Users</h2>
        <Routes>
          <Route exact path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UserSearch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
