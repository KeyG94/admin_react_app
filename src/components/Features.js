import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Features() {
    return (
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://46dtbf3k4dl51vghpj6qqocj-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/placeholder-600x400.png" />
                    <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://46dtbf3k4dl51vghpj6qqocj-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/placeholder-600x400.png" />
                    <Card.Body>
                        <Card.Title>Card 2</Card.Title>
                        <Card.Text>
                        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                <Card.Img variant="top" src="https://46dtbf3k4dl51vghpj6qqocj-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/placeholder-600x400.png" />
                <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Features
