import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import MaintenanceSchedule from '../components/MaintenanceSchedule';

const AssetMaintenancePage = () => {
  const [maintenanceLogs, setMaintenanceLogs] = useState([]);

  const addMaintenanceLog = (log) => {
    setMaintenanceLogs([...maintenanceLogs, log]);
  };

  return (
    <Container>
      <h2>Asset Maintenance</h2>
      <MaintenanceSchedule addMaintenanceLog={addMaintenanceLog} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Asset Name</th>
            <th>Maintenance Date</th>
            <th>Type of Maintenance</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceLogs.map((log, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{log.assetName}</td>
              <td>{log.date}</td>
              <td>{log.type}</td>
              <td>{log.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AssetMaintenancePage;
