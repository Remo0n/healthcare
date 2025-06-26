import React, { useEffect, useMemo, useState, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllHcps,
  selectAllHcps,
  selectAllConnections,
  selectHcpLoading,
  selectHcpError,
  selectSelectedSearchResult,
  setSelectedSearchResult,
} from "../store/slices/hcpSlice";

import { setHcpProfileDetails } from "../store/slices/hcpProfileDetailsSlice";

const ConnectionsGraph = () => {
  const dispatch = useDispatch();
  const hcps = useSelector(selectAllHcps);
  const connections = useSelector(selectAllConnections);
  const loading = useSelector(selectHcpLoading);
  const error = useSelector(selectHcpError);
  const selectedSearchResult = useSelector(selectSelectedSearchResult);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const forceGraphRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAllHcps());
  }, [dispatch]);

  useEffect(() => {
    if (selectedSearchResult && forceGraphRef.current) {
      const targetNode = graphData.nodes.find(
        (node) => node.id === selectedSearchResult.id
      );
      if (targetNode) {
        handleNodeClick(targetNode);
        dispatch(setSelectedSearchResult(null));
      }
    }
  }, [selectedSearchResult, dispatch]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  const graphData = useMemo(() => {
    if (!hcps || hcps.length === 0 || !connections) {
      return {
        nodes: [],
        links: [],
      };
    }

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
      bio: hcp.bio,
      specialty: hcp.specialty,
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
  }, [hcps, connections]);

  useEffect(() => {
    if (forceGraphRef.current && graphData.nodes.length > 0) {
      forceGraphRef.current.d3Force("link").distance(100);
      forceGraphRef.current.d3Force("charge").strength(-300);
      forceGraphRef.current.d3ReheatSimulation();
    }
  }, [graphData]);

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
      const size = 26;
      const img = new Image();
      img.src = node.avatar;

      const x = node.x;
      const y = node.y;
      const radius = size / 2;

      ctx.save();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(img, x - radius, y - radius, size, size);

      ctx.restore();

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      const size = 26;
      const radius = size / 2;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "#6366f1";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  };

  const handleNodeClick = (node) => {
    if (forceGraphRef.current) {
      forceGraphRef.current.centerAt(node.x, node.y, 1000);
    }

    dispatch(setHcpProfileDetails({ ...node, activeData: true }));
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full left-0 right-0 absolute overflow-hidden"
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <ForceGraph2D
          ref={forceGraphRef}
          graphData={graphData}
          width={dimensions.width}
          height={dimensions.height}
          nodeAutoColorBy="title"
          nodeLabel={(node) =>
            `${node.name}\n${node.title}\n${node.location}\nPatients: ${node.patientsServed}\nSuccess Rate: ${node.successRate}%`
          }
          nodeVal={(node) => node.val}
          linkLabel={(link) => `${link.type}`}
          linkWidth={(link) => link.value}
          linkColor={() => "#C6CDF4"}
          backgroundColor="#fff"
          onNodeClick={handleNodeClick}
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
