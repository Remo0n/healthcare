import React from 'react';
import { Avatar } from 'antd';

const ConnectionsGraph = () => {
  const connections = [
    { id: 1, src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face", top: "10%", left: "20%", borderColor: "border-blue-400" },
    { id: 2, src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face", top: "15%", left: "60%", borderColor: "border-pink-400" },
    { id: 3, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face", top: "25%", left: "80%", borderColor: "border-green-400" },
    { id: 4, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face", top: "40%", left: "15%", borderColor: "border-purple-400" },
    { id: 5, src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop&crop=face", top: "45%", left: "70%", borderColor: "border-yellow-400" },
    { id: 6, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face", top: "60%", left: "25%", borderColor: "border-red-400" },
    { id: 7, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face", top: "65%", left: "85%", borderColor: "border-indigo-400" },
    { id: 8, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face", top: "80%", left: "40%", borderColor: "border-teal-400" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl h-full relative overflow-hidden rounded-xl">
      {/* Central node - Dr. Emily Carter */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Avatar
          size={80}
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
          className="border-4 border-white shadow-lg"
        />
      </div>
      
      {/* Connection nodes */}
      {connections.map((connection) => (
        <div
          key={connection.id}
          className="absolute"
          style={{ top: connection.top, left: connection.left }}
        >
          <Avatar
            size={40}
            src={connection.src}
            className={`border-2 ${connection.borderColor} shadow-md hover:scale-110 transition-transform cursor-pointer`}
          />
        </div>
      ))}
      
      {/* Connection lines (simplified) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Sample connection lines */}
        <line x1="50%" y1="50%" x2="20%" y2="10%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="60%" y2="15%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="15%" y2="40%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="70%" y2="45%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="25%" y2="60%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="85%" y2="65%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
        <line x1="50%" y1="50%" x2="40%" y2="80%" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
};

export default ConnectionsGraph;