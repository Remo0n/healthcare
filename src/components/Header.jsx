import React, { useState } from "react";
import { Avatar, Button, Input, Switch, AutoComplete } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setSelectedSearchResult,
  selectSearchResults,
  selectSearchQuery
} from "../store/slices/hcpSlice";

const { Search } = Input;

const Header = ({ doctorData }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const searchQuery = useSelector(selectSearchQuery);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    dispatch(setSearchQuery(value));
  };

  const handleSelect = (value, option) => {
    const selectedHcp = searchResults.find(hcp => hcp.id === option.key);
    if (selectedHcp) {
      dispatch(setSelectedSearchResult(selectedHcp));
      setSearchValue(selectedHcp.name);
    }
  };

  // Format search results for AutoComplete
  const searchOptions = searchResults.map(hcp => ({
    value: hcp.name,
    label: (
      <div className="flex items-center space-x-2">
        <img 
          src={hcp.avatar} 
          alt={hcp.name}
          className="w-6 h-6 rounded-full"
        />
        <div>
          <div className="font-medium">{hcp.name}</div>
          <div className="text-xs text-gray-500">{hcp.title} - {hcp.location}</div>
        </div>
      </div>
    ),
    key: hcp.id
  }));

  return (
    <>
      <div>
        <div className="flex w-full h-full gap-4 items-center">
          <div className="flex w-4/5 items-center py-3 px-4 bg-white rounded-xl justify-between">
            <div className="flex items-center">
              <Avatar
                size={50}
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
              />
              <div className="ml-2">
                <h2 className="text-base font-semibold text-gray-900">
                  {doctorData.name}
                </h2>
                <span className="text-xs tracking-tighter font-light text-gray-900">
                  Cardiologist at NHOG
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-600">
              <div className="py-2">
                <span className="mr-2">
                  My Peers <strong>{doctorData.peers}</strong>
                </span>
                <span>
                  Following <strong>{doctorData.following}</strong>
                </span>
              </div>
              <Button
                type="primary"
                className="bg-blue-500 hover:bg-blue-600 border-blue-500 w-full"
              >
                Create web
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/5 p-3 bg-white rounded-xl h-full">
              <div className="flex items-center m-1">
                <Switch size="small" defaultChecked />
                <span className="text-xs text-gray-600 pl-2">Show connections</span>
              </div>
              <div className="flex items-center m-1">
                <Switch size="small" />
                <span className="text-xs text-gray-600 pl-2">
                  Show my connections on map
                </span>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-2 mt-2 shadow-sm border-b rounded-xl">
        <div className="flex items-center space-x-3">
          <AutoComplete
            className="w-64"
            options={searchOptions}
            onSearch={handleSearch}
            onSelect={handleSelect}
            value={searchValue}
            placeholder="Search HCPs..."
          >
            <Input prefix={<SearchOutlined />} />
          </AutoComplete>
          <Button icon={<FilterOutlined />} className="border-gray-300">
            Filter
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
