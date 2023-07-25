import React from 'react';
import { Outlet } from "react-router-dom";

import './index.less';

const navigationMap = [{
  code: '',
  name: '首页',
}, {
  code: 'System',
  name: '系统中心',
}, {
  code: 'About',
  name: '关于我们',
}]

function Home() {
  return (
    <>
      <ul className="navigation-wrap">
        {
          navigationMap.map((item, index) => {
            return (
              <li key={index} >
                <a href={`/${item.code}`}>{item.name}</a>
              </li>
            )
          })
        }
      </ul >
      <Outlet />
    </>
  )
}

export default Home;
