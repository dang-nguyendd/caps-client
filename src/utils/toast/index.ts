import { toast } from "react-toastify";

import { MessageTypes } from "@/utils/toast/type";

export const showToast = (messageType: MessageTypes, message: string) => {
  switch (messageType) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "info":
      toast.info(message);
      break;
  }
};
