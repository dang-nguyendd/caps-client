import { useState } from "react";

import { IconX } from "@tabler/icons-react";

import Button from "@/core/button";
import withLayout from "@/hoc/withLayout";

const Component = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>Settings</div>
    </div>
  );
};

Component.displayName = "Settings";

export default withLayout(Component);
