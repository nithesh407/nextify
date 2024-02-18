import React, { useState } from "react";
import { Form, Input, DatePicker, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const isEducationSection = true;
const formEducationItemLayout = {
  wrapperCol: {
    sm: { span: 20 },
  },
};

const EducationForm: React.FC<{initialValues:any}> = ({ initialValues}) => {
  const [numDegrees, setNumDegrees] = useState(initialValues.educations.length);
  return (
    <Form.List name="educations">
      {(fields, { add, remove }, { errors }) => (
          <div style={{ marginLeft: 30 }}>
          <Space size={"large"} style={{ marginBottom: 20 }}>
            <Button
              type="dashed"
              onClick={() => {
                  if (numDegrees < 4) {
                      add();
                      setNumDegrees(numDegrees + 1);
                    }
                }}
                icon={<PlusOutlined />}
              disabled={numDegrees >= 4}
              >
              Add fields
            </Button>
            <Button
              type="dashed"
              onClick={() => {
                  remove(fields.length - 1);
                  if (numDegrees >= 0) {
                      setNumDegrees(numDegrees - 1);
                    }
                }}
                icon={<MinusCircleOutlined />}
                disabled={numDegrees <= 1}
                >
              Remove fields
            </Button>
          </Space>
          <Form.ErrorList errors={errors} />

          {fields.map((field, index) => (
              <div key={index}>
              <Form.Item
                {...(isEducationSection && formEducationItemLayout)}
                name={[field.name, "organization"]}
                validateTrigger={["onChange", "onBlur"]}
                rules={[
                    {
                        required: true,
                        whitespace: true,
                        message:
                        "Please input the organization name or delete this field.",
                    },
                ]}
                >
                <Input placeholder={`Organization ${index + 1}`} />
              </Form.Item>
              <Space>
                <Form.Item
                  {...(isEducationSection && formEducationItemLayout)}
                  name={[field.name, "degree"]}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                      {
                          required: true,
                          whitespace: true,
                          message: "Please input the degree or delete this field.",
                        },
                    ]}
                    >
                  <Input placeholder={`Degree ${index + 1}`} />
                </Form.Item>
                <Form.Item
                  {...(isEducationSection && formEducationItemLayout)}
                  name={[field.name, "period"]}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                      {
                          required: true,
                          message: "Please select the period or delete this field.",
                        },
                    ]}
                    >
                  <DatePicker.RangePicker picker="year" format={"YYYY"} />
                </Form.Item>
              </Space>
            </div>
          ))}
          <Form.ErrorList errors={errors} />
        </div>
      )}
    </Form.List>
  );
};

export default EducationForm;
