import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserhandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
