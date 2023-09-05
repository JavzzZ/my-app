import React from 'react';
import { Outlet } from "react-router-dom";
import { Input } from 'antd';
// import { useDebounceFn } from 'ahooks';
import Utils from '../../utils';

import './index.less';

function Home() {
  const onChange = (value) => {
    console.log('🚀 -- file: index.tsx -- line 25 -- e', value);
  }
  // 方法一：使用 ahooks 的 useDebounceFn
  // const { run } = useDebounceFn(onChange, { wait: 1000 });
  // 方法二：通用方法 debounce
  const debounceFn = Utils.debounce(onChange, 1000);

  return (
    <>
      <Input
        type="text"
        onChange={(e) => {
          // run(e.target.value);
          
          debounceFn(e.target.value);
        }}
      />

      <Outlet />
    </>
  )
}

export default Home;
