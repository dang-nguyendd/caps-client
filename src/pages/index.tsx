import OutlineButton from "@/core/outline-button";
import withAuth from "@/hoc/withLogin";
import { showToast } from "@/utils/app";

const Home = () => {
  const _handleClick = () => {
    showToast("success", "hi name is bap");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      qwe2e123s
      <OutlineButton> 12323321</OutlineButton>
    </main>
  );
};

export default withAuth(Home);
