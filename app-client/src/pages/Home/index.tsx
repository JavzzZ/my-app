import React from 'react';
import { Link, Outlet } from "react-router-dom";
// import { Input } from 'antd';
// import Utils from '../../utils';

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
                <Link to={`/${item.code}`}>{item.name}</Link>
              </li>
            )
          })
        }
      </ul>
      <Outlet />
    </>
  )
}

export default Home;
