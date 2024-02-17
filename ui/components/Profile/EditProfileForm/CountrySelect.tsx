"use client";
import { Flex, Select, Space } from "antd";
import { useEffect, useState } from "react";
import {
  Country,
  State,
  City,
  ICountry,
  IState,
  ICity,
} from "country-state-city";

const { Option } = Select;

const CountrySelect: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>();
  const [selectedState, setSelectedState] = useState<string | null>();
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  function handleCountry(country: string) {
    setSelectedCountry(country);

    const countryObj = countries.find((c) => c.name === country);
    if (countryObj) {
      const allStates = State.getStatesOfCountry(countryObj.isoCode);
      setStates(allStates);
      setSelectedState(null);
    }
  }

  const handleState = (stateName: string) => {
    setSelectedState(stateName);

    if (selectedCountry) {
      const countryObj = countries.find((c) => c.name === selectedCountry);
      if (countryObj) {
        const stateObj = states.find((s) => s.name === stateName);
        if (stateObj) {
          const allCities = City.getCitiesOfState(
            countryObj.isoCode,
            stateObj.isoCode
          );
          setCities(allCities);
        }
      }
    }
  };
  return (
    <Flex gap={10} vertical>
      <Select onChange={handleCountry} showSearch>
        {countries.map((country) => (
          <Option key={country.name} value={country.name}>
            {" "}
            {country.name}
          </Option>
        ))}
      </Select>

      {selectedCountry && (
        <Select onChange={handleState} showSearch>
          {states.map((state) => (
            <Option key={state.name} value={state.name}>
              {" "}
              {state.name}
            </Option>
          ))}
        </Select>
      )}
    
      {selectedState && (
        <Select showSearch>
          {cities.map((city) => (
            <Option key={city.name} value={city.name}>
              {" "}
              {city.name}
            </Option>
          ))}
        </Select>
      )}
    </Flex>
  );
};
export default CountrySelect;
