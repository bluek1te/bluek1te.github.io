import React, { useState } from 'react';

import { 
  Affix, 
  Button, 
  Space 
} from 'antd'

import {
  Link
} from "react-router-dom";

const Navbar = () => {
  const top = 10;
  const css = `
    .space-align-block {
      flex: none;
      margin: 8px 4px;
      padding: 4px;
      border: 1px solid #40a9ff;
    }
    .navbar-center {
      text-align: center;
    }
    `
  return (
    <>
      <style>
        {css}
      </style>
      <Affix offsetTop={top} className="navbar-center">
        <Space align="center">
          <Link to="/">
            <Button type="primary">
              home
            </Button>
          </Link>
          <Link to="/projects">
            <Button type="primary">
              projects
            </Button>
          </Link>
          <Button type="primary">
            resume
          </Button>
          <Button type="primary">
            about
          </Button>
        </Space>
      </Affix>
    </>
  );
}

export default Navbar;