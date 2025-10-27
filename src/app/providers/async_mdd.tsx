import { fetchAuthorData } from "@/redux/slices/mainBlogAuthorSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function MDDAsync() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAuthorData());
  }, [dispatch]);

  return null;
}
