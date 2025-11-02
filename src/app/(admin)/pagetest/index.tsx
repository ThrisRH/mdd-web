import React from "react";
import PageTestScreen from "screens/pagetest";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return { props: {} };
};
export type PageTestProps = {
}

const PageTestPage = ({}: PageTestProps) => {
	return <PageTestScreen />;
};

export default PageTestPage;
