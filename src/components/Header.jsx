import React from 'react';
import { Avatar, Button, Input, Switch } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header = ({ doctorData }) => {
  return (
    <div className="bg-white p-4 shadow-sm border-b rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <Avatar
              size={40}
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{doctorData.name}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>My Peers <strong>{doctorData.peers}</strong></span>
                <span>Following <strong>{doctorData.following}</strong></span>
              </div>
            </div>
          </div>
          <Button type="primary" className="bg-blue-500 hover:bg-blue-600 border-blue-500">
            Create web
          </Button>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch size="small" defaultChecked />
              <span className="text-sm text-gray-600">Show connections</span>
            </div>
            <div className="flex items-center space-x-2">
              <Switch size="small" />
              <span className="text-sm text-gray-600">Show my connections on map</span>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="flex items-center space-x-3">
            <Search
              placeholder="Search"
              className="w-64"
              prefix={<SearchOutlined />}
            />
            <Button icon={<FilterOutlined />} className="border-gray-300">
              Filter
            </Button>
          </div>
    </div>
  );
};

export default Header;