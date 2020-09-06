import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

function TabCard() {
    return (
        <>
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
                <Tab eventKey="extra" title="extra">
                    <p>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </p>
                </Tab>
            </Tabs>
        </>
    )
}

export default TabCard;
