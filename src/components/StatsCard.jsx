import React from "react";
import { useSelector } from "react-redux";

import { UserOutlined, TrophyOutlined } from "@ant-design/icons";

const StatsCard = () => {
  const { patientsServed, successRate } = useSelector(
    (state) => state.hcpProfileDetails.hcpProfileDetails
  );
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-gray-50 p-2 rounded-xl">
        <div className="flex items-center mb-2">
          <UserOutlined className="text-blue-500 text-lg mr-2" />
          <span className="text-gray-600 text-sm">Patient Served</span>
        </div>
        <div className="text-3xl font-bold text-gray-900">
          {patientsServed}
        </div>
      </div>
      <div className="bg-gray-50 p-2 rounded-xl">
        <div className="flex items-center mb-2">
          <TrophyOutlined className="text-green-500 text-lg mr-2" />
          <span className="text-gray-600 text-sm">Success rate</span>
        </div>
        <div className="text-3xl font-bold text-gray-900">
          {successRate}%
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
