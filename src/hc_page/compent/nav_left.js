import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './nav_left.css'
const NavLeft = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    企业/部门管理
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>cccc</p>
                        <p>cccc</p>
                        <p>cccc</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    企业/部门管理
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>cccc</p>
                        <p>cccc</p>
                        <p>cccc</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card><Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    企业/部门管理
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <p>cccc</p>
                        <p>cccc</p>
                        <p>cccc</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card><Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    企业/部门管理
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <p>cccc</p>
                        <p>cccc</p>
                        <p>cccc</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
export default NavLeft