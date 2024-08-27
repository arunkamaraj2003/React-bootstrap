import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AssetForm from '../components/AssetForm';
import AssetList from '../components/AssetList';

const AssetInventoryPage = () => {
  const [assets, setAssets] = useState([]);

  const addAsset = (asset) => {
    setAssets([...assets, asset]);
  };

  return (
    <Container>
      <h2>Asset Inventory</h2>
      <AssetForm addAsset={addAsset} />
      <AssetList assets={assets} />
    </Container>
  );
};

export default AssetInventoryPage;
