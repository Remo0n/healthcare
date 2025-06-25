import React from 'react';
import { Card } from 'antd';

const AboutSection = ({ doctorData }) => {
  return (
    <Card className="rounded-xl shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        {doctorData.about}
      </p>
    </Card>
  );
};

export default AboutSection;