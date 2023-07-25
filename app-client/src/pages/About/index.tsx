import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div>关于我们</div>
      <div>关于我们的内容部分</div>
      <Link to='/'>返回首页</Link>
    </>
  );
};

export default About;
