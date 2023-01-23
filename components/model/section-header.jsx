import { Container } from "@mui/material";
import React from "react";
import { FiLayers } from "react-icons/fi";

function SectionHeader({ title, description, color }) {
  return (
    <Container maxWidth="sm">
      <div
        className={`text-center text-lg sm:text-xl md:text-2xl font-semibold mb-1 uppercase ${
          color ? "text-white" : "text-gray-700 "
        }`}
      >
        {title}
      </div>
      <div className="flex items-center space-x-3 justify-center mb-2">
        <div className="w-16 border-b" />
        <FiLayers fontSize={16} className="text-yellow-400" />
        <div className="w-16 border-b" />
      </div>

      <div className="text-center text-sm sm:text-lg text-gray-500 mb-6">
        <p>{description}</p>
      </div>
    </Container>
  );
}

export default SectionHeader;
