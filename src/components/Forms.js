import React, { useState } from "react";


const Forms = props => {
  const [newData, setNewData] = useState("")

  return (
    <div className="team-form">
      <form>
        <input
          name="name"
          placeholder="name:"
          value={newData.name}
        />
        <input
          name="email"
          placeholder="email:"
          value={newData.email}
        />
        <input
          name="role"
          placeholder="role:"
          value={newData.role}
        />

        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default Forms;