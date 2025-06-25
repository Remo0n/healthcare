import React from 'react';
import ProfileCard from './ProfileCard';
import StatsCard from './StatsCard';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ConnectionsGraph from './ConnectionsGraph';

const MainContent = ({ doctorData }) => {
  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 space-y-6">
        <ProfileCard doctorData={doctorData} />
        <StatsCard doctorData={doctorData} />
        <AboutSection doctorData={doctorData} />
        <EducationSection doctorData={doctorData} />
      </div>
      <div className="w-2/3">
        <ConnectionsGraph />
      </div>
    </div>
  );
};

export default MainContent;