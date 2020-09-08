import React from 'react'
import Table from 'react-bootstrap/Table'


function TableList() {
    return (
    <Table striped bordered hover size="sm" responsive>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>SPECIALITY</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>Tincidut</td>
                <td>Tincidut@email.com</td>
                <td>Oslo</td>
                <td>Cows</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Ullamcorper</td>
                <td>Ullamcorper@email.com</td>
                <td>Bergen</td>
                <td>Mud</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Pretium</td>
                <td>Pretium@email.com</td>
                <td>Oslo</td>
                <td>Sand Castles</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Libero</td>
                <td>Libero@email.com</td>
                <td>Bergen</td>
                <td>Puppets</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Tellus</td>
                <td>Tellus@email.com</td>
                <td>Oslo</td>
                <td>Donkeys</td>
            </tr>
        </tbody>
    </Table>
    )
}

export default TableList
