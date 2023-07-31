import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Input } from 'antd';
// import { useDebounceFn } from 'ahooks';
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
  // const onChange = (value) => {
  //   console.log('🚀 -- file: index.tsx -- line 25 -- e', value);

  //   return value;
  // }
  // const { run } = useDebounceFn(onChange, { wait: 1000 });
  // const debounceFn = Utils.debounce(onChange, 1000);

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

      {/* <Input
        type="text"
        onChange={(e) => {
          run(e.target.value);
          debounceFn(e.target.value);
        }}
      /> */}

      <Outlet />
    </>
  )
}

export default Home;
