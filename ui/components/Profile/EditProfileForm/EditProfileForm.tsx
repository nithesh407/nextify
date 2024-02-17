"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Collapse,
  Upload,
  Space,
  DatePicker,
  Col,
  Row,
  Card,
  Modal,
  GetProp,
  Flex,
  UploadFile,
  UploadProps,
} from "antd";
import {
  CaretRightOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { Moment } from "moment";
import { ProfileItem } from "@/util";
import CountrySelect from "./CountrySelect";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];


const { Panel } = Collapse;
const isProfileSection = true;
const isEducationSection = true;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const formItemLayout = {
  labelCol: {
    sm: { span: 5 },
  },
  wrapperCol: {
    sm: { span: 17 },
  },
};
const formProfileItemLayout = {
  labelCol: {
    sm: { span: 9 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};
const formEducationItemLayout = {
  wrapperCol: {
    sm: { span: 20 },
  },

};

const EditProfileForm: React.FC<{ initialValues: ProfileItem }> = ({
  initialValues,
}) => {
  const [form] = Form.useForm();
  const [numSkills, setNumSkills] = useState(initialValues.Skills.length);
  const [numDegrees, setNumDegrees] = useState(initialValues.Educations.length);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([initialValues.userImage]);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
      setFileList(newFileList);
      form.setFieldsValue({
        userImage: newFileList.length > 0 ? newFileList[0] : null
      });
  };

  const uploadButton =
    fileList.length === 0 ? (
      <button style={{ border: 0, background: "none" }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
    ) : null;

  const handleClear = () => {
    form.resetFields(); // Reset form fields to their initial values
    setFileList([initialValues.userImage]); 
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
      })
      .catch((errorInfo) => {
        console.error("Validation failed:", errorInfo);
      });
  };

  return (
    <Form {...formItemLayout} initialValues={initialValues} form={form} onFinish={onFinish} scrollToFirstError>
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
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header="Profile" key="Profile">
            <Row gutter={[24, 24]}>
              <Col span={4}>
                <Form.Item
                  {...(isProfileSection && formProfileItemLayout)}
                  name="userImage"
                >
                  <ImgCrop rotationSlider>
                    <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture-circle"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                  </ImgCrop>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </Form.Item>
              </Col>
              <Col span={18}>
                <Form.Item
                  label="User Name"
                  name="userName"
                  rules={[{ required: true }]}
                  {...(isProfileSection && formProfileItemLayout)}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="User Email"
                  name="userEmail"
                  rules={[{ required: true }]}
                  {...(isProfileSection && formProfileItemLayout)}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="User Location"
                  name="userLocation"
                  rules={[{ required: true }]}
                  {...(isProfileSection && formProfileItemLayout)}
                >
                  <CountrySelect/>
                </Form.Item>
                <Form.Item
                  label="User Description"
                  name="userDescription"
                  rules={[{ required: true }]}
                  {...(isProfileSection && formProfileItemLayout)}
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
          </Panel>
          <Panel header="Educations" key="Educations">
            <Form.List
              name="Educations"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length > 4) {
                      return Promise.reject(
                        new Error("You can add only up to 4 degrees")
                      );
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <div style={{ marginLeft: 30 }}>
                  <Space  size={'large'} style={{marginBottom:20}}>
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
                      <Form.Item {...isEducationSection && formEducationItemLayout} 
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
                        <Form.Item {...isEducationSection && formEducationItemLayout}
                        name={[field.name, "degree"]}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input the degree or delete this field.",
                          },
                        ]}
                      >
                        <Input placeholder={`Degree ${index + 1}`} />
                      </Form.Item>
                      <Form.Item {...isEducationSection && formEducationItemLayout}
                        name={[field.name, "period"]}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            message:
                              "Please select the period or delete this field.",
                          },
                        ]}
                      >
                        <DatePicker.RangePicker picker="year" format={"YYYY"} />
                      </Form.Item>
                        </Space>
                    </div>
                  ))}
                </div>
              )}
            </Form.List>
          </Panel>
          <Panel header="Skills" key="Skills">
            <Form.List
              name="Skills"
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
                          name={[field.name, "skill"]}
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
          </Panel>
          <Panel header="Social media" key="Social media">
            <Form.Item
              label="LinkedIn URL"
              name="linkedINURL"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="GitHub URL"
              name="githubURL"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Twitter URL" name="twitterURL">
              <Input />
            </Form.Item>
            <Form.Item label="Instagram URL" name="instagramURL">
              <Input />
            </Form.Item>
          </Panel>
        </Collapse>
      </Card>
    </Form>
  );
};

export default EditProfileForm;
