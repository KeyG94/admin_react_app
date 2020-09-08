import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


function TabCard() {
    return (
        <>
            <Accordion defaultActiveKey="0" className="d-md-none">
                <Card>
                    <Card.Header className="tabs__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Home
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body className="tabs__content"><p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className="tabs__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Profile
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body className="tabs__content"><p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className="tabs__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Contact
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body className="tabs__content"><p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className="tabs__header">
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Extra
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body className="tabs__content"><p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div className="d-none d-md-block">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p>
                    </Tab>
                    <Tab eventKey="extra" title="Extra">
                        <p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default TabCard;
