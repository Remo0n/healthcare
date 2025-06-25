import React from 'react';
import { Card } from 'antd';

const EducationSection = ({ doctorData }) => {
  return (
    <Card className="rounded-xl shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Education</h4>
      {doctorData.education.map((edu, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-semibold text-sm">HMU</span>
          </div>
          <div className="flex-1">
            <h5 className="font-semibold text-gray-900">{edu.university}</h5>
            <p className="text-gray-700 text-sm">{edu.degree}</p>
            <p className="text-gray-600 text-sm">{edu.specialization}</p>
            <p className="text-gray-500 text-xs mt-1">{edu.date}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default EducationSection;