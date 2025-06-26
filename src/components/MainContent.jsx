import React from 'react';
import ProfileCard from './ProfileCard';
import StatsCard from './StatsCard';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ConnectionsGraph from './ConnectionsGraph';
import ProfileDetails from './ProfileDetails';

const MainContent = ({ doctorData }) => {
  return (
    <div className="flex gap-6 h-full">
      <div className="flex flex-col gap-3 flex-1 space-y-6">
      <ProfileDetails doctorData={doctorData}/>
      </div>
      <div className="w-2/3 relative">
        <ConnectionsGraph />
      </div>
    </div>
  );
};

export default MainContent;