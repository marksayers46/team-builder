import React, { useState, useEffect } from "react";

const Forms = props => {
  const [newData, setNewData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onChangeData = event => {
    setNewData({ ...newData, [event.target.name]: event.target.value });
  };

  const submitFunction = event => {
    event.preventDefault();
    const newSubmitData = {
      ...newData
    };

    props.addnewMember(newSubmitData);
    setNewData({ name: "", email: "", role: "" });
  };

  return (
    <div className="team-form">
      <form onSubmit={submitFunction}>
        <input
          name="name"
          placeholder="name"
          value={newData.name}
          onChange={onChangeData}
        />
        <input
          name="email"
          placeholder="email"
          value={newData.email}
          onChange={onChangeData}
        />
        <input
          name="role"
          placeholder="role"
          value={newData.role}
          onChange={onChangeData}
        />

        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default Forms;