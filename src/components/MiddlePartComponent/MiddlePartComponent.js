import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AnimatedProgressBar from '../AnimatedProgressBar/AnimatedProgressBar';
import ProgressBar from '../ProgressBar/ProgressBar';

const MiddlePartComponent = () => {
    const testData = [
        { bgcolor: "#C496EF", completed: 95, title: "Application" },
        { bgcolor: "#34a9cf", completed: 80, title: "Application" },
        { bgcolor: "#f88", completed: 63, title: "Projects" },
        { bgcolor: "#c379e8", completed: 45, title: "Onhold" },
        { bgcolor: "#8cf5ab", completed: 20, title: "Selected" },
      ];
    return (
           <Row className="mt-2">
               <Col sm={12} md={8} style={{ width:'400px'}} className="hvr-grow-shadow">
                <Card style={{height:'280px'}} className="border-style">
                  <AnimatedProgressBar/>
                </Card>
               </Col>
               <Col sm={12} md={4} className="hvr-grow-shadow">
                  <Card  style={{height:'280px', backgroundColor:'#1d1d1d'}} className="border-style p-2">
                    {testData.map((item, idx) => (<ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.title}
                    /> ))} 
                </Card>
              </Col>
           </Row>
        
    );
};

export default MiddlePartComponent;