import React from "react";
import { Card } from "antd";
import StatsCard from "./StatsCard";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ProfileCard from "./ProfileCard";

const ProfileDetails = ({ doctorData }) => {
  return (
    <div className="flex flex-col gap-3">
      <ProfileCard doctorData={doctorData} />
      <Card className="rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col gap-5">
          <StatsCard doctorData={doctorData} />
          <AboutSection doctorData={doctorData} />
          <EducationSection doctorData={doctorData} />
        </div>
      </Card>
    </div>
  );
};

export default ProfileDetails;
