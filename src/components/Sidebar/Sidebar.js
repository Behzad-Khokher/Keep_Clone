import React from "react";
import { useState } from "react";
import LightBulb from "../Icons/LightBulb";
import ArchiveIcon from "../Icons/ArchiveIcon";
import SidebarButton from "./SidebarButton/SidebarButton";
import ReminderIcon from "../Icons/ReminderIcon";

function Sidebar() {
  const [highLight, setHighLight] = useState({
    notes: true,
    archive: false,
    reminders: false,
    trash: false,
  });

  const HandleClick = () => {
    console.log("handle click running");
  };

  return (
    <div>
      <ul className="d-flex flex-column list-unstyled">
        <div onClick={HandleClick}>
          <SidebarButton name="Notes" isSelected={true}>
            <LightBulb width={24} height={24} />
          </SidebarButton>
        </div>

        <SidebarButton name="Edit Archive" isSelected={false}>
          <ArchiveIcon width={24} height={24} />
        </SidebarButton>

        <SidebarButton name="Reminders" isSelected={false}>
          <ReminderIcon height={24} width={24} />
        </SidebarButton>

        <SidebarButton name="Trash" isSelected={false}>
          <LightBulb width={24} height={24} />
        </SidebarButton>
      </ul>
    </div>
  );
}

export default Sidebar;
