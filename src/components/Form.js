import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSubmit() {
    return (
        <>
        <h3>SUBMIT A COMMENT</h3>
            <Form>
                <Form.Group controlId="validationCustom01">
                    <Form.Control        
                        required
                        type="text"
                        placeholder="Name"
                     />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormSubmit;