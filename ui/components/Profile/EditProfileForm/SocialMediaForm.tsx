import React from 'react';
import { Form, Input } from 'antd';

const SocialMediaForm: React.FC<{ initialValues: any }> = ({ initialValues, ...props }) => {
  return (
    <>
      <Form.Item
              {...props}
              label="LinkedIn URL"
              name="linkedINURL"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            {...props}
              label="GitHub URL"
              name="githubURL"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...props} label="Twitter URL" name="twitterURL">
              <Input />
            </Form.Item>
            <Form.Item {...props} label="Instagram URL" name="instagramURL">
              <Input />
            </Form.Item>
    </>
  );
};

export default SocialMediaForm;
