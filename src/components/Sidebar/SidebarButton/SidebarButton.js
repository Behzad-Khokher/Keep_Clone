import React from "react";

function SidebarButton({ children, name, isSelected }) {
  let color = "white";
  if (isSelected) {
    color = "#FEEFC3";
  }
  const ButtonStyle = {
    backgroundColor: color,
    borderRadius: "0 20px 20px 0",
  };
  return (
    <li style={ButtonStyle} className="d-flex  py-2">
      <div style={{ marginLeft: 20 }}>{children}</div>
      <div style={{ marginLeft: 20 }}>{name}</div>
    </li>
  );
}

export default SidebarButton;
