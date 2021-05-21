import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, title } = props;
  console.log(props.name);
  const containerStyles = {
    height: 10,
    width: "200px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "20px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <small className="d-block text-align-start p-2">{title}</small>
      
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
      <small style={labelStyles}>{`${completed}%`}</small>
    </div>
  );
};

export default ProgressBar;
