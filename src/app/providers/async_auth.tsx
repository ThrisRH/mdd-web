import { clearAuth, setAuth } from "@/redux/slices/authSlice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthAsync() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
      console.log("Session Log: ", session.user);
      dispatch(setAuth(session));
    } else {
      dispatch(clearAuth());
    }
  }, [session, dispatch]);

  return null;
}
