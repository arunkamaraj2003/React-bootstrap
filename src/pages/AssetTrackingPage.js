import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import TrackingOverview from '../components/TrackingOverview';

const AssetTrackingPage = () => {
  const [trackingEntries, setTrackingEntries] = useState([]);

  const addTrackingEntry = (entry) => {
    setTrackingEntries([...trackingEntries, entry]);
  };

  return (
    <Container>
      <h2>Asset Tracking</h2>
      <TrackingOverview addTrackingEntry={addTrackingEntry} trackingEntries={trackingEntries} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Asset Name</th>
            <th>Status</th>
            <th>Location</th>
            <th>Last Check-In Date</th>
          </tr>
        </thead>
        <tbody>
          {trackingEntries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.assetName}</td>
              <td>{entry.status}</td>
              <td>{entry.location}</td>
              <td>{entry.checkInDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AssetTrackingPage;
