import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { BsBootstrap } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import profile from "../../assets/images/p-1.JPG";
const User = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <BsBootstrap size="2em" className="mt-5 mb-4" />
          <div className="d-flex">
            <Image src={profile} width={50} height={50} roundedCircle></Image>
            <div className="d-flex flex-column ml-2">
              <h6>Anand Agarwal</h6>
              <small>anand.agarwal@bk.com</small>
            </div>
          </div>
          <div className="d-flex flex-column mt-5">
            <small className="mb-2">Motivation</small>
            <small className="mb-2">Productivity</small>
            <small className="mb-2">Design</small>
            <small className="mb-2">Study</small>
          </div>

          <Card className="d-flex flex-row dark-color border-style w-50 mt-5 mx-5 py-3 px-1">
            <IoRocketOutline size="2em" className="mr-1" />
            <div className="d-flex flex-column">
              <small>Lorem ipsum dolor sit amet.</small>
              <button className="btn bg-white w-50">
                <small className="bg-white text-dark">Go Pro</small>
              </button>
            </div>
          </Card>
        </Col>
        <Col md={8} className=" mt-5">
        <h2>Motivation</h2>
        <div className="d-flex">
            <small className="mb-2 mr-2">All</small>
            <small className="mb-2 mr-2">Motivation</small>
            <small className="mb-2 mr-2">Productivity</small>
            <small className="mb-2 mr-2">Design</small>
            <small className="mb-2 mr-2">Study</small>
        </div>

          <div class="row mt-5">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
