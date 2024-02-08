"use client"

import { useState } from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";



interface Props{
    data:any,
    onSelect:(data:any)=>void,
    placeholder ?: string
}

const Search:React.FC<Props>=({data,placeholder,onSelect})=>{

    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string; label: string; }[]>([]);


    const getPanelValue = (searchText: string) => {
        if (!searchText) return [];
        return data.filter((user: { name: string; }) => user.name.toLowerCase().includes(searchText.toLowerCase())).map((user: { name: any; }) => ({
            value: user.name,
            label: user.name
        }));
    };


    const onChange = (data: string) => {
        setValue(data);
        setOptions(getPanelValue(data));
    };

    return(
        <AutoComplete
            value={value}
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onChange}
            onChange={onChange}
            placeholder={placeholder}
            suffixIcon={<SearchOutlined/>}
        />
    )
}

export default Search;