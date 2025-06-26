import React from "react";
import { Card, Avatar, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { name, location, specialty, bio, avatar } = useSelector(
    (state) => state.hcpProfileDetails.hcpProfileDetails
  );

  return (
    <Card className="rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-start space-x-4">
        <Avatar
          size={80}
          src={avatar}
          className="border-4 border-white shadow-lg"
        />
        <div className="flex-1 ml-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-600">
                {specialty} • {location}
              </p>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                {bio}
              </p>
            </div>
            <Button
              type="text"
              icon={<EllipsisOutlined />}
              className="text-gray-400"
            />
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <Button
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 border-blue-500 rounded-lg"
            >
              View Profile
            </Button>
            <Button className="border-gray-300 rounded-lg">Resume</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
