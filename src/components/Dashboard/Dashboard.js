import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaPlus } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import BottomPartComponent from "../BottomPartComponent/BottomPartComponent";
import CardComponent from "../CardComponent/CardComponent";
import MiddlePartComponent from "../MiddlePartComponent/MiddlePartComponent";
import RightSidebar from "../RightSidebar/RightSidebar";
const Dashboard = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  const applicants = [
    {
      id: "1",
      title: "Total Applications",
      number: 7956,
      percentage: 70,
      totalPercentage: +3.55,
      color: "#C496EF",
    },
    {
      id: "2",
      title: "Shortlisted Candidates",
      number: 4658,
      percentage: 60,
      totalPercentage: +0.4,
      color: "#C496EF",
    },
    {
      id: "3",
      title: "Total Applications",
      number: 1501,
      percentage: 40,
      totalPercentage: -0.4,
      color: "#f88",
    },
  ];
  return (
    <Container fluid className="mt-3">
      <div className="d-flex justify-content-between">
       <div>
        <h3>Dashboard</h3>
        <span>{dateTime}</span>
       </div>
     <div>
     <div className="d-flex">
     <Button className="mr-2 d-flex d-inline-block align-items-center">
     <FaPlus className="bg-primary mr-1"/>Add</Button>
        <input
          className="form-control w-100 inline-block"
          type="search"
          placeholder='Search Application here'
          aria-label="Search"
        />
        <FcSearch size="2em" className="inline-block"/>
      </div>
     </div>
     </div>
      <Row className="justify-content-md-center">
        <Col sm={12} md={8} lg={8} className="d-flex flex-wrap container-fluid">
          {applicants.map((applicant) => (
            <CardComponent key={applicant.id} applicant={applicant} />
          ))}
          <div className="section mt-3 p-2">
            <MiddlePartComponent />
          </div>
          <div className="section mt-3 p-2">
            <BottomPartComponent />
          </div>
        </Col>
        <Col md={4}>
          <RightSidebar/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
