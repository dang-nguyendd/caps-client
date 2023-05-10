import React from "react";
import { useState } from "react";

import { IUserInfo } from "@/components/settings/type";
import withSettings from "@/hoc/withSettings";

const Component = React.memo(() => {
  const placeHolder: IUserInfo = {
    name: "Giang Nguyen",
    dob: "18/05",
    gender: "male",
    email: "hahahaaa",
  };

  const [userInfo, setUserInfo] = useState(placeHolder);
  return (
    <main className="grow p-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="px-8 py-6">
          <div className="mb-6 flex items-center">
            <div className="mr-4 h-10 w-10 rounded-full bg-blue"></div>
            <h2 className="text-2xl font-semibold">{userInfo.name}</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Date of Birth</h3>
            <p>{userInfo.dob}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Gender</h3>
            <p>{userInfo.gender}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Email</h3>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
});

Component.displayName = "Personal";

export default withSettings(Component, "Personal Information");
