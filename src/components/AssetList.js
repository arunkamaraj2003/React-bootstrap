import React from 'react';
import { Table, Button } from 'react-bootstrap';

const AssetList = ({ assets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Asset Name</th>
          <th>Category</th>
          <th>Purchase Date</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{asset.name}</td>
            <td>{asset.category}</td>
            <td>{asset.date}</td>
            <td>${asset.value}</td>
            <td>
              <Button variant="warning" size="sm">
                Edit
              </Button>{' '}
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AssetList;
