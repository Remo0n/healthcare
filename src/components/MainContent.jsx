import React from "react";
import { useSelector } from "react-redux";

import ConnectionsGraph from "./ConnectionsGraph";
import ProfileDetails from "./ProfileDetails";

const MainContent = ({ doctorData }) => {
  const { activeData } = useSelector(
    (state) => state.hcpProfileDetails.hcpProfileDetails
  );
  return (
    <div className="flex gap-6 h-full">
      {activeData && <div className="flex flex-col gap-3 flex-1 space-y-6">
        <ProfileDetails doctorData={doctorData} />
      </div>}
      <div className={`${activeData ? 'w-2/3 relative': 'w-full'} `}>
        <ConnectionsGraph />
      </div>
    </div>
  );
};

export default MainContent;
