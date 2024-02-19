"use client";
import { useEffect } from "react";
import {
  Button,
  Form,
  Collapse,
  Space,
  Card,
  CollapseProps,
} from "antd";
import {
  CaretRightOutlined,
} from "@ant-design/icons";
import BasicDetailsForm from "./BasicDetailsForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import SocialMediaForm from "./SocialMediaForm";
import { ProfileItem } from "@/utils";

const formItemLayout = {
  labelCol: {
    sm: { span: 5 },
  },
  wrapperCol: {
    sm: { span: 17 },
  },
};

const EditProfileForm: React.FC<{ initialValues: ProfileItem }> = ({
  initialValues,
}) => {
  const [form] = Form.useForm();


  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);


  const handleClear = () => {
    form.resetFields();
  };

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        console.log("Form values:", values);
        const response = await fetch('http://localhost:3000/api/v1/gytfugj/edit', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        })
        const res = await response.json();
        console.log(res)
      })
      .catch((errorInfo) => {
        console.error("Validation failed:", errorInfo);
      });
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      forceRender: true,
      label: "Profile",
      children: <BasicDetailsForm initialValues={initialValues} form={form} />,
    },
    {
      key: "2",
      label: "Education",
      forceRender: true,
      children: <EducationForm initialValues={initialValues} />,
    },
    {
      key: "3",
      label: "Skills",
      forceRender: true,
      children: <SkillsForm initialValues={initialValues} />,
    },
    {
      key: "4",
      label: "Social Media",
      forceRender: true,
      children: <SocialMediaForm initialValues={initialValues} />,
    },
  ];

  return (
    <Form
      {...formItemLayout}
      initialValues={initialValues}
      form={form}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Card
        title="Edit Personal Details"
        extra={
          <Form.Item style={{ margin: "auto" }}>
            <Space>
              <Button onClick={handleClear}>Clear</Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        }
      >
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={items}
        ></Collapse>

      </Card>
    </Form>
  );
};

export default EditProfileForm;