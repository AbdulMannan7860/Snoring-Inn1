import React from 'react';
import Table from '../../components/Admin/Table';
import ChartComponent from '../../components/Admin/ChartComponent';
import SearchInput from '../../components/Admin/SearchInput';
import './PortalPage.css';

function PortalPage() {
  return (
    <>
      <h1 className='portalHeading'>Portal Page</h1>
      <div className="portalContainer">
        <SearchInput />
        <div className="tableContainer">
          <Table />
        </div>
        <div className="chartContainer">
          <ChartComponent />
        </div>
      </div>
    </>
  );
}

export default PortalPage;
