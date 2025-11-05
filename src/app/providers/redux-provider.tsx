"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import AuthAsync from "./async-auth";
import MDDAsync from "./async-mdd";

type Props = {
  children: React.ReactNode;
};
const ReduxProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <AuthAsync />
      <MDDAsync />
      {children}
    </Provider>
  );
};

export default ReduxProvider;
