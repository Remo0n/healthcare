import React, { useEffect, useMemo, useState, useRef } from "react";
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAllHcps());
  }, [dispatch]);

  // Handle container resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    // Initial measurement
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    // Use ResizeObserver for more accurate container size changes
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

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
      
      
    }));

    const links = connections.map((connection) => ({
      source: connection.source,
      target: connection.target,
      type: connection.type,
      details: connection.details,
      value: 3, 
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

  const nodeCanvas = (node, ctx, globalScale) => {
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
          }

  return (
    <div ref={containerRef} className="w-full h-full left-0 right-0 top-0 bottom-0 absolute overflow-hidden">
      {dimensions.width > 0 && dimensions.height > 0 && (
        <ForceGraph2D
          graphData={graphData}
          width={dimensions.width}
          height={dimensions.height}
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
          onNodeClick={(node) => {
            dispatch(setHcpProfileDetails({...node, activeData: true}))
          }}
          onLinkClick={(link) => {
            console.log("Clicked link:", link);
          }}
          nodeCanvasObject={nodeCanvas}
        />
      )}
    </div>
  );
};

export default ConnectionsGraph;
