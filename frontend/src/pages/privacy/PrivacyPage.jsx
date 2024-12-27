import React from 'react';
import Content from './components/Content.jsx';
import Heading from './components/Heading.jsx';
import MainLayout from '../../components/MainLayout';
const PrivacyPolicy = () => {
  return (
    <MainLayout style={{ backgroundColor: '#a67bdb' }}>
      <Heading />
      <Content />
    </MainLayout>
  );
};

export default PrivacyPolicy;