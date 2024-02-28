import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Upload,
  UploadFile,
  UploadProps,
  GetProp,
  Modal,
  Flex,
  Select,
  Avatar,
} from "antd";
import ImgCrop from "antd-img-crop";
import { PlusOutlined } from "@ant-design/icons";
import {
  ICountry,
  IState,
  ICity,
  Country,
  State,
  City,
} from "country-state-city";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const { Option } = Select;

const formProfileItemLayout = {
  labelCol: {
    sm: { span: 9 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

const BasicDetailsForm: React.FC<{ form: any; initialValues: any }> = ({
  form,
  initialValues,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
    initialValues.userImage,
  ]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(initialValues.userLocation.country || null);
  const [selectedState, setSelectedState] = useState<string | null>(initialValues.userLocation.state || null);
  const [selectedCity, setSelectedCity] = useState<string | null>(initialValues.userLocation.city || null);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const allCountries = Country.getAllCountries();
      setCountries(allCountries);
    };

    fetchCountries();
  }, []);

  function handleCountry(country: string) {
    setSelectedCountry(country);
    const countryObj = countries.find((c) => c.name === country);
    if (countryObj) {
      const allStates = State.getStatesOfCountry(countryObj.isoCode);
      setStates(allStates);

      form.setFieldsValue({
        userLocation: {
          country: country,
          state: null,
          city: null,
        },
      });
    }
  }

  const handleState = (stateName: string) => {
    const countryObj = countries.find((c) => c.name === selectedCountry);
    if (countryObj) {
      setSelectedState(stateName);
      const stateObj = states.find((s) => s.name === stateName);
      if (stateObj) {
        const allCities = City.getCitiesOfState(
          countryObj.isoCode,
          stateObj.isoCode
        );
        setCities(allCities);
        form.setFieldsValue({
          userLocation: {
            ...form.getFieldValue("userLocation"),
            state: stateName,
            city:null
          },
        });
      }
    }
  };

  const handleCity = (cityName: string) => {
    setSelectedCity(cityName);
    form.setFieldsValue({
      userLocation: {
        ...form.getFieldValue("userLocation"),
        city: cityName,
      },
    });
  };

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
      userImage: newFileList.length > 0 ? newFileList[0] : null,
    });
  };

  const uploadButton =
    fileList.length === 0 ? (
      <button style={{ border: 0, background: "none" }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
    ) : null;

  const handleCancel = () => setPreviewOpen(false);

  return (
    <Row gutter={[24, 24]}>
      <Col span={4}>
        <Form.Item name="userImage" {...formProfileItemLayout}>
          <ImgCrop rotationSlider>
            <Upload
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </ImgCrop>
        </Form.Item>
      </Col>
      <Col span={18}>
        <Form.Item {...formProfileItemLayout}
          label="User Name"
          name="userName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...formProfileItemLayout}
          label="User Email"
          name="email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...formProfileItemLayout}
          label="User Location"
          rules={[{ required: true }]}
        >

            <Form.Item {...formProfileItemLayout} rules={[{ required: true }]} name={['userLocation','country']}>
              <Select onChange={handleCountry} showSearch >
                {countries.map((country) => (
                  <Option key={country.name} value={country.name}>
                    {country.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

              {selectedCountry && (
            <Form.Item {...formProfileItemLayout} rules={[{ required: states.length>0 }]} name={['userLocation','state']}>
                <Select onChange={handleState} showSearch>
                  {states.map((state) => (
                    <Option key={state.name} value={state.name}>
                      {state.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              )}

              { cities !== null && selectedState && (
            <Form.Item {...formProfileItemLayout} rules={[{ required: cities.length>0 }]} name={['userLocation','city']}>
                <Select onChange={handleCity} showSearch>
                  {cities.map((city) => (
                    <Option key={city.name} value={city.name}>
                      {city.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              )}
          
        </Form.Item>
        <Form.Item {...formProfileItemLayout}
          label="User Description"
          name="userDescription"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Col>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </Row>
  );
};

export default BasicDetailsForm;
