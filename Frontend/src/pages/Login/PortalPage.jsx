import React, { useState } from 'react';
import Table from '../../components/Admin/Table';
import ChartComponent from '../../components/Admin/ChartComponent';
import SearchInput from '../../components/Admin/SearchInput';
import './PortalPage.css';

function PortalPage() {
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(false);
  return (
    <>
      <div className="portalContainer">
        <SearchInput setSearch={setSearch} setBool={setBool} />
        <div className="tableContainer">
          <Table search={search} bool={bool} />
        </div>
      </div>
    </>
  );
}

export default PortalPage;
