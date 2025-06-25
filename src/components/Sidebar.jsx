import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const menuItems = [
    { key: '1', icon: <HomeOutlined />, label: '' },
    { key: '2', icon: <UserOutlined />, label: '' },
    { key: '3', icon: <TeamOutlined />, label: '' },
    { key: '4', icon: <MessageOutlined />, label: '' },
    { key: '5', icon: <BellOutlined />, label: '' },
    { key: '6', icon: <SettingOutlined />, label: '' },
    { key: '7', icon: <QuestionCircleOutlined />, label: '' },
  ];

  return (
    <Sider
      width={64}
      className="fixed left-0 top-0 h-full bg-white shadow-lg z-10 rounded-xl"
      theme="light"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PS</span>
          </div>
        </div>
        <Menu
          mode="vertical"
          selectedKeys={['3']}
          items={menuItems}
          className="border-none flex-1"
        />
      </div>
    </Sider>
  );
};

export default Sidebar;