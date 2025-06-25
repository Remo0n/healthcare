import React from 'react';
import { Card } from 'antd';
import { UserOutlined, TrophyOutlined } from '@ant-design/icons';

const StatsCard = ({ doctorData }) => {
  return (
    <Card className="rounded-xl shadow-sm border border-gray-200">
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <UserOutlined className="text-blue-500 text-lg mr-2" />
            <span className="text-gray-600 text-sm">Patient Served</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{doctorData.patientServed}</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrophyOutlined className="text-green-500 text-lg mr-2" />
            <span className="text-gray-600 text-sm">Success rate</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{doctorData.successRate}%</div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;