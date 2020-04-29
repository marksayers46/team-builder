import React, { useState } from "react";


const Form = props => {
  const [newData, setNewData] = useState("")

  return (
    <div className="team-form">
      <form>
        <input
          name="name"
          placeholder="name"
          value={newData.name}
          />
      </form>
    </div>
  );
};

export default Form;