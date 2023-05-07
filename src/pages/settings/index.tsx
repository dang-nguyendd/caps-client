import { useState } from "react";

import LanguageSwitcher from "@/components/language-switcher";
import ThemeSwitcher from "@/components/theme-switcher";
import withLayout from "@/hoc/withLayout";
import useTrans from "@/hooks/useTrans";

const Component = () => {
  const trans = useTrans();

  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>Settings</div>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <main>
        <h1>{trans.home.title}</h1>

        <p>{trans.home.content}</p>
      </main>
    </div>
  );
};

Component.displayName = "Settings";

export default withLayout(Component);
