import withAuth from "@/hoc/withLogin";
import { showToast } from "@/utils/toast";

import OutlineButton from "../core/button";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      qwe2e123s
      <OutlineButton> 12323321</OutlineButton>
    </main>
  );
};

export default withAuth(Home);
