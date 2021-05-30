import React, { useState } from 'react';

import { Col, Card, Button, Image, Row, Typography } from 'antd';
import { TwitterOutlined,
         InstagramOutlined,
         LinkedinOutlined,
         GithubOutlined
       } from '@ant-design/icons';

const Home = () => {
  const twitterUrl = "https://twitter.com/bluek1te";
  const instagramUrl = "https://www.instagram.com/bluek1te/?hl=en"
  const linkedinUrl = "https://www.linkedin.com/in/phil-tr/"
  const githubUrl = "https://github.com/bluek1te"
  const pictureUrl = "https://i.imgur.com/18LKrJd.png"
  const { Title } = Typography;

  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
  .card-text {
    font-family: sans-serif;
    font-size: 14px;
  }
  `
  return (
    <>
      <style>
        {css}
      </style>
      <Row style={{ marginBottom: 100 }}>
        <Col className="gutter-row" span={24}></Col>
      </Row>
      <Row justify="center">
        <Col>
          <Image
              width={300}
              src={pictureUrl}
          />
        </Col>
        <Col span={4}>
          <div className="site-card-border-less-wrapper">
            <Card className="card-title" title={<Title level={2}>Phil Tran</Title>} bordered={false} style={{ width: 300}}>
              <p className="card-text">software engineer</p>
              <p className="card-text">linux geek</p>
              <p className="card-text">tinkerer of stuff</p>
            </Card>
          </div>
        </Col>
      </Row>
      <Row justify="center" gutter={[10,10]}>
        <Col>
          <Button type="text" href={twitterUrl}>
            <TwitterOutlined />
          </Button>
        </Col>
        <Col>
          <Button type="text" href={instagramUrl}>
            <InstagramOutlined />
          </Button>
        </Col>
        <Col>
          <Button type="text" href={linkedinUrl}>
            <LinkedinOutlined />
          </Button>
        </Col>
        <Col>
          <Button type="text" href={githubUrl}>
            <GithubOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Home;