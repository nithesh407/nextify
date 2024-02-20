"use client";

import { useEffect, useState } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import {
  City,
  Country,
  ICity,
  ICountry,
  IState,
  State,
} from "country-state-city";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


const App: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedCountry, setSelectedCountry] = useState<string | null>();
  const [selectedState, setSelectedState] = useState<string | null>();
  const [selectedCity, setSelectedCity] = useState<string | null>();
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
            city: null,
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

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card title={'Signup'} style={{margin:'auto', width:'35%',top:20}}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          {...formItemLayout}
          label="User Name"
          name="userName"
          rules={[{ required: true }]}
        >
          <Input  placeholder='Username'/>
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input  placeholder='E-mail'/>
        </Form.Item>
        <Form.Item
          name="profession"
          label='Profession'
          rules={[{ required: true, message: "Please input your profession!" }]}
        >
          <Input
            placeholder="Profession"
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="User Location"
          rules={[{ required: true }]}
        >
          <Form.Item
            rules={[{ required: true }]}
            name={["userLocation", "country"]}
          >
            <Select onChange={handleCountry} showSearch placeholder='Select Your Country'>
              {countries.map((country) => (
                <Option key={country.name} value={country.name}>
                  {country.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {selectedCountry && (
            <Form.Item
              rules={[{ required: states.length > 0 }]}
              name={["userLocation", "state"]}
            >
              <Select onChange={handleState} showSearch  placeholder='Select Your State'>
                {states.map((state) => (
                  <Option key={state.name} value={state.name}>
                    {state.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}

          {cities !== null && selectedState && (
            <Form.Item
              rules={[{ required: cities.length > 0 }]}
              name={["userLocation", "city"]}
            >
              <Select onChange={handleCity} showSearch  placeholder='Select Your City'>
                {cities.map((city) => (
                  <Option key={city.name} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password  placeholder='Password'/>
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password   placeholder='Confirm Password'/>
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="User Description"
          name="userDescription"
          rules={[{ required: true }]}
        >
          <Input.TextArea placeholder="Some interesting stuff about you !" />
        </Form.Item>

        <Form.Item style={{display:'flex', justifyContent:'center'}}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default App;
