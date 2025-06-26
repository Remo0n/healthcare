import React from 'react';

const ConnectionDetails = ({ connection, onClose, sourceNode, targetNode }) => {
  if (!connection) return null;

  return (
    <div className="bg-white border-l border-gray-200 shadow-lg w-80 h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Connection Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Connection Type */}
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-1">Connection Type</h4>
            <p className="text-blue-600 capitalize">{connection.type}</p>
          </div>

          {/* Connected Healthcare Professionals */}
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">From</h4>
              {sourceNode && (
                <div className="flex items-center space-x-2">
                  {sourceNode.avatar && (
                    <img 
                      src={sourceNode.avatar} 
                      alt={sourceNode.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium text-sm">{sourceNode.name}</p>
                    <p className="text-xs text-gray-500">{sourceNode.title}</p>
                    <p className="text-xs text-gray-400">{sourceNode.location}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">To</h4>
              {targetNode && (
                <div className="flex items-center space-x-2">
                  {targetNode.avatar && (
                    <img 
                      src={targetNode.avatar} 
                      alt={targetNode.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium text-sm">{targetNode.name}</p>
                    <p className="text-xs text-gray-500">{targetNode.title}</p>
                    <p className="text-xs text-gray-400">{targetNode.location}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Connection Details */}
          {connection.details && (
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-green-800 mb-1">Details</h4>
              <p className="text-green-700 text-sm">{connection.details.institution}</p>
            </div>
          )}

          {/* Additional Information */}
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Connection Strength</h4>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-purple-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full" 
                  style={{ width: `${(connection.value || 3) * 20}%` }}
                ></div>
              </div>
              <span className="text-purple-600 text-sm font-medium">
                {connection.value || 3}/5
              </span>
            </div>
          </div>

          {/* Professional Stats */}
          {(sourceNode || targetNode) && (
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Professional Stats</h4>
              <div className="space-y-2 text-sm">
                {sourceNode && (
                  <div>
                    <span className="font-medium">{sourceNode.name}:</span>
                    <div className="text-yellow-700 ml-2">
                      <p>Patients Served: {sourceNode.patientsServed}</p>
                      <p>Success Rate: {sourceNode.successRate}%</p>
                    </div>
                  </div>
                )}
                {targetNode && (
                  <div>
                    <span className="font-medium">{targetNode.name}:</span>
                    <div className="text-yellow-700 ml-2">
                      <p>Patients Served: {targetNode.patientsServed}</p>
                      <p>Success Rate: {targetNode.successRate}%</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectionDetails;