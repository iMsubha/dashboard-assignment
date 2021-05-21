import { Animation } from '@devexpress/dx-react-chart';
import {
    Chart,
    PieSeries
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsFillCursorFill } from "react-icons/bs";
import StatusCards from '../StatusCards/StatusCards';
const BottomPartComponent = () => {
    const data = [
        { region: 'Developer', val: 4119626293 ,color:'#c4c4c4'},
        { region: 'Designer', val: 1012956064,color:'#c8f881' },
        { region: 'Applicant', val: 344124520 ,color:'#ffffff'},
        { region: 'New', val: 590946440}
      ];
    const statusData =
    [
        { 
            id: '1',
            title: 'Users Reached',
            number: '7956',
            totalPercentage: '+3.55',
           
        },
        {
            id: '2',
            title: 'Referals',
            number: '0662',
            totalPercentage: '+9.0'
        },
        {
            id: '3',
            title: 'Shares',
            number: '1478',
            totalPercentage: '+39.10'
        },
        {
            id: '4',
            title: 'Applications',
            number: '0564',
            totalPercentage: '12.09'
        }
]

    return (
    <Row>
      <Col sm={12} md={8} style={{ width:'780px', border: '1px solid #616161',borderRadius:'2px' }}>
      <div className="d-flex justify-content-between p-3">
        <h6>Referals and campaign Status</h6>
            <div className="d-flex">
                <div>
                  <BsFillCursorFill  size='1.5em'/>
                </div>
                <div>
                    <small>40 Campaigns sent in total </small><br/>
                    <small>4 campaigns sent in last month</small>
                </div>
            </div>
        </div>
      <div style={{height:'100px'}} className="d-flex flex-row dark-color"> 
            {
                statusData.map(status =><StatusCards status={status}></StatusCards>)
            }
        </div>
      <div className="d-flex mt-3 justify-content-center">
            <Button style={{backgroundColor:'#34a9cf'}} className="mr-2 border-0">Start a New Campaign</Button>
            <Button style={{backgroundColor:'#f88'}} className="border-0">Pause All Running Campaign</Button>
       </div>
       </Col>
       <Col sm={12} md={4}>
            <Card  style={{height:'280px', backgroundColor:'#1d1d1d'}} className="border-style p-2">
            <Chart
          data={data}
        >
          <PieSeries
            color="color"
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <small>Open position by Department</small>
          <Animation />
        </Chart>
            </Card>
      </Col>
    </Row>
    );
};

export default BottomPartComponent;