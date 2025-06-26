import React, { useEffect, useMemo, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllHcps,
  selectAllHcps,
  selectAllConnections,
  selectHcpLoading,
  selectHcpError,
} from "../store/slices/hcpSlice";

import { setHcpProfileDetails } from "../store/slices/hcpProfileDetailsSlice";

const ConnectionsGraph = () => {
  const dispatch = useDispatch();
  const hcps = useSelector(selectAllHcps);
  const connections = useSelector(selectAllConnections);
  const loading = useSelector(selectHcpLoading);
  const error = useSelector(selectHcpError);
  const [selectedNode, setSelectedNode] = useState([]);
  const [selectedLink, setSelectedLink] = useState([]);

  useEffect(() => {
    dispatch(fetchAllHcps());
  }, [dispatch]);

  // Helper function to assign colors based on HCP title - MOVED BEFORE USAGE
  const getNodeColor = (title) => {
    const colors = {
      Cardiologist: "#ef4444",
      "Cardiac Surgeon": "#3b82f6",
      Internist: "#10b981",
      Neurologist: "#8b5cf6",
      Oncologist: "#f59e0b",
      Pediatrician: "#ec4899",
    };
    return colors[title] || "#6b7280";
  };

  // Format HCP data for ForceGraph2D
  const graphData = useMemo(() => {
    if (!hcps || hcps.length === 0 || !connections) {
      return {
        nodes: [],
        links: [],
      };
    }

    // Create nodes from HCP data
    const nodes = hcps.map((hcp) => ({
      id: hcp.id,
      name: hcp.name,
      title: hcp.title,
      location: hcp.location,
      avatar: hcp.avatar,
      peers: hcp.peers,
      following: hcp.following,
      patientsServed: hcp.patientsServed,
      successRate: hcp.successRate,
      bio:hcp.bio,
      specialty:hcp.specialty,
      // Add visual properties
      val: Math.random() * 10 + 5, // Node size
      color: getNodeColor(hcp.title),
    }));

    // Use actual connections from mock data
    const links = connections.map((connection) => ({
      source: connection.source,
      target: connection.target,
      type: connection.type,
      details: connection.details,
      value: 3, // Link strength
      label: connection.type,
    }));

    return { nodes, links };
  }, [hcps]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl h-full flex items-center justify-center">
        <div className="text-gray-500">Loading connections...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl h-full flex items-center justify-center">
        <div className="text-red-500">Error loading connections: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full absolute overflow-hidden">
      <ForceGraph2D
        graphData={graphData}
        nodeAutoColorBy="title"
        nodeLabel={(node) =>
          `${node.name}\n${node.title}\n${node.location}\nPatients: ${node.patientsServed}\nSuccess Rate: ${node.successRate}%`
        }
        nodeVal={(node) => node.val}
        linkLabel={(link) =>
          `Connection between ${link.source.name || link.source} and ${
            link.target.name || link.target
          }`
        }
        linkWidth={(link) => link.value}
        linkColor={() => "#cbd5e1"}
        backgroundColor="transparent"
        // width={window.innerWidth}
        // height={window.innerHeight}
        onNodeClick={(node) => {
          console.log("Clicked node:", node);
          dispatch(setHcpProfileDetails({...node, activeData: true}))
        }}
        onLinkClick={(link) => {
          console.log("Clicked link:", link);
        }}
        nodeCanvasObject={(node, ctx, globalScale) => {
          if (node.avatar) {
            const size = 12;
            const img = new Image();
            img.src = node.avatar;

            img.onload = () => {
              const x = node.x;
              const y = node.y;
              const radius = size / 2;

              // Save context state
              ctx.save();

              // Draw circular clipping path
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
              ctx.closePath();
              ctx.clip();

              // Draw image inside the clipped circle
              ctx.drawImage(img, x - radius, y - radius, size, size);

              // Restore context to remove clipping
              ctx.restore();
            };
          }
        }}
      />
    </div>
  );
};

export default ConnectionsGraph;
