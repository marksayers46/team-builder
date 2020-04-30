import React from "react";

const FormsDisplay = props => {
  console.log(props.data);
  const passedData = props.data;

  return (
    <div className="subTitle">
      <h1>Submitted Forms:</h1>
      <h1>____________________</h1>
      {passedData.map(banana => {
        return (
          <div className="card">
            <h1>Member:</h1>
            <h1>{banana.name}</h1>
            <h2>{banana.email}</h2>
            <h2>{banana.role}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default FormsDisplay;