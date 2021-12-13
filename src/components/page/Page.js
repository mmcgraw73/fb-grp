import './Page.css'
import '../group/Group'
import Group from '../group/Group'
import Header from '../header/Header'
import TitleBar from '../titlebar/TitleBar'
import UserList from '../user/UserList'

import React, { useState } from 'react';

function Page() {
  const [meta, user, group] = useState([])
    return (
      <div className="page">
        <Header className="page-header" name="{user.first}">
          <h1 className="page-blue page-xl">
            {meta.pageTitle}
          </h1>
        </Header>
        <TitleBar />
        <Group />
      </div>
    );
  }
  
  export default Page;

