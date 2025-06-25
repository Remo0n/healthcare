import React from "react";

const AboutSection = ({ doctorData }) => {
  return (
    <div>
      <h4 className="text-md font-semibold text-gray-900 mb-2">About</h4>
      <p className="text-gray-500 text-sm leading-relaxed">
        {doctorData.about}
      </p>
    </div>
  );
};

export default AboutSection;
