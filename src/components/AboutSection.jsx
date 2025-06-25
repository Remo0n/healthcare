import React from 'react';
import { Card } from 'antd';

const AboutSection = ({ doctorData }) => {
  return (
    <Card className="rounded-xl text-left shadow-sm border border-gray-200">
      <h4 className="text-md font-semibold text-gray-900 mb-2">About</h4>
      <p className="text-gray-500 text-sm leading-relaxed">
        {doctorData.about}
      </p>
    </Card>
  );
};

export default AboutSection;