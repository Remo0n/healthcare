import React, { useEffect, useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllHcps,
  selectAllHcps,
  selectHcpLoading,
  selectHcpError,
} from "../store/slices/hcpSlice";

const ConnectionsGraph = () => {
  const dispatch = useDispatch();
  const hcps = useSelector(selectAllHcps);
  const loading = useSelector(selectHcpLoading);
  const error = useSelector(selectHcpError);

  useEffect(() => {
    dispatch(fetchAllHcps());
  }, [dispatch]);

  // Helper function to assign colors based on HCP title - MOVED BEFORE USAGE
  const getNodeColor = (title) => {
    const colors = {
      'Cardiologist': '#ef4444',
      'Cardiac Surgeon': '#3b82f6',
      'Internist': '#10b981',
      'Neurologist': '#8b5cf6',
      'Oncologist': '#f59e0b',
      'Pediatrician': '#ec4899'
    };
    return colors[title] || '#6b7280';
  };

  // Format HCP data for ForceGraph2D
  const graphData = useMemo(() => {
    if (!hcps || hcps.length === 0) {
      return {
        nodes: [{ id: "a" }, { id: "b" }, { id: "c" }],
        links: [
          { source: "a", target: "b" },
          { source: "c", target: "a" },
        ],
      };
    }

    // Create nodes from HCP data
    const nodes = hcps.map(hcp => ({
      id: hcp.id,
      name: hcp.name,
      title: hcp.title,
      location: hcp.location,
      avatar: hcp.avatar,
      peers: hcp.peers,
      following: hcp.following,
      patientsServed: hcp.patientsServed,
      successRate: hcp.successRate,
      // Add visual properties
      val: Math.random() * 10 + 5, // Node size
      color: getNodeColor(hcp.title)
    }));

    // Create links between HCPs (you can customize this logic)
    const links = [];
    
    // Create connections between HCPs based on similar titles or locations
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i];
        const node2 = nodes[j];
        
        // Connect HCPs with similar titles or same location
        if (node1.title === node2.title || node1.location === node2.location) {
          links.push({
            source: node1.id,
            target: node2.id,
            value: Math.random() * 5 + 1 // Link strength
          });
        }
      }
    }

    // If no natural connections, create some random ones
    if (links.length === 0 && nodes.length > 1) {
      for (let i = 0; i < Math.min(nodes.length - 1, 5); i++) {
        links.push({
          source: nodes[i].id,
          target: nodes[i + 1].id,
          value: Math.random() * 3 + 1
        });
      }
    }

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
        nodeLabel={node => `${node.name}\n${node.title}\n${node.location}\nPatients: ${node.patientsServed}\nSuccess Rate: ${node.successRate}%`}
        nodeVal={node => node.val}
        linkLabel={link => `Connection between ${link.source.name || link.source} and ${link.target.name || link.target}`}
        linkWidth={link => link.value}
        linkColor={() => '#cbd5e1'}
        backgroundColor="transparent"
        width={window.innerWidth}
        height={window.innerHeight}
        onNodeClick={(node) => {
          console.log('Clicked node:', node);
        }}
        onLinkClick={(link) => {
          console.log('Clicked link:', link);
        }}
      />
    </div>
  );
};

export default ConnectionsGraph;
