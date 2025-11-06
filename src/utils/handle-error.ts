import { toast } from "react-toastify";

export function handleError() {
  let message = "Something went wrong. Please try again later.";

  toast.error(message);
}
