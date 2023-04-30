import OutlineButton from "@/core/outline-button";
import { showToast } from "@/utils/app";

export default function Home() {
  const _handleClick = () => {
    showToast("success", "hi name is bap");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      qwe2e123s
      <OutlineButton> 12323321</OutlineButton>
    </main>
  );
}
