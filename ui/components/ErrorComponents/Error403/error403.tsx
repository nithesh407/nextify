import React from "react";
import {
  Typography, Button, Row, Col, Space, Image,
} from "antd";
import image from "./images/error403.png";
import styles from "./error403.module.scss";

const { Title, Paragraph } = Typography;

const Error403 = () => (
  <Row justify="center" className={styles.rowContainer}>
    <Col className={styles.colContainer}>
      <Space direction="vertical">
        <Image src={image.src} width={252} height={294} preview={false} />
        <Title level={3}> 403</Title>
        <Paragraph type="secondary">
          Sorry, the page you visited does not exist.
        </Paragraph>
        <Button type="primary" size="large">
          Go to home
        </Button>
      </Space>
    </Col>

  </Row>
);

export default Error403;
