import React, { useState } from 'react';
import { Form, Input, Button, Flex } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const SkillsForm: React.FC<{initialValues:any }> = ({ initialValues }) => {
  const [numSkills, setNumSkills] = useState(initialValues.skills.length);
  return (
    <Form.List
    name="skills"
    rules={[
      {
        validator: async (_, names) => {
          if (!names || names.length > 6) {
            return Promise.reject(
              new Error("You can add only up to 6 skills")
            );
          }
        },
      },
    ]}
  >
    {(fields, { add, remove }, { errors }) => (
      <div style={{ marginLeft: 30 }}>
        <Button
          style={{marginBottom:20}}
          type="dashed"
          onClick={() => {
            if (numSkills < 6) {
              add();
              setNumSkills(numSkills + 1); // Increment numSkills when adding a skill
            }
          }}
          icon={<PlusOutlined />}
          disabled={numSkills >= 6} // Disable button when numSkills is 6 or more
        >
          Add fields
        </Button>
        <Form.ErrorList errors={errors} />

        <Flex wrap="wrap">
          {fields.map((field, index) => (
            <Flex key={field.key} style={{ marginBottom: -8 }}>
              <Form.Item
                name={[field.name]}
                validateTrigger={["onChange", "onBlur"]}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message:
                      "Please input a skill or delete this field.",
                  },
                ]}
              >
                <Input
                  placeholder={`skill ${index + 1}`}
                  suffix={
                    fields.length >= 1 ? (
                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                          setNumSkills(numSkills - 1); // Decrement numSkills when removing a skill
                        }}
                      />
                    ) : null
                  }
                />
              </Form.Item>
            </Flex>
          ))}
        </Flex>
      </div>
    )}
  </Form.List>
  );
};

export default SkillsForm;
