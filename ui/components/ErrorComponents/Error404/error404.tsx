'use client'
import React from "react";
import {
  Typography, Button, Row, Col, Space, Image,
} from "antd";
import img from "./images/error404.png";
import styles from "./error404.module.scss";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

const Error404: React.FC = () => {
  const router = useRouter();

  return (

    <Row justify="center" className={styles.rowContainer}>
      <Col className={styles.colContainer}>
        <Space direction="vertical">
          <Image src={img.src} width={252} height={294} preview={false} />
          <Title level={3}>404</Title>
          <Paragraph type="secondary">
            Sorry, the page you visited does not exist.
          </Paragraph>
          <Button type="primary" size="large" onClick={() => router.push('/')}>
            Go to home
          </Button>
        </Space>
      </Col>
    </Row>
  )
};

export default React.memo(Error404);
