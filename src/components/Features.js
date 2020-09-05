import React from 'react'
import Card from 'react-bootstrap/Card';

function Features() {
    return (
        <div className="container_card">
            <h3>Features</h3>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://46dtbf3k4dl51vghpj6qqocj-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/placeholder-600x400.png" />
                <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://46dtbf3k4dl51vghpj6qqocj-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/placeholder-600x400.png" />
                <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://46dtbf3k4dl51vghpj6qqocj-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/placeholder-600x400.png" />
                <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Features
