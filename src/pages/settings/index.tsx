import { useState } from "react";

import LanguageSwitcher from "@/components/language-switcher";
import ThemeSwitcher from "@/components/theme-switcher";
import withLayout from "@/hoc/withLayout";

const Component = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>Settings</div>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

Component.displayName = "Settings";

export default withLayout(Component);
