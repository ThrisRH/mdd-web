import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "@/app/about/page";
import { notFound } from "next/navigation";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // chỉ render <img> đơn giản
    return <img {...props} />;
  },
}));

describe("AboutContentUI", () => {
  it("render avatar, about text, contact and footer", () => {
    render(<AboutPage />);

    // Avatar
    expect(screen.getByAltText("avt")).toBeInTheDocument();

    // About text
    expect(screen.getByText("Hello world")).toBeInTheDocument();

    // Contact
    expect(screen.getByText("email@test.com")).toBeInTheDocument();

    // Footer
    expect(screen.getByText("Have a nice day!")).toBeInTheDocument();
    expect(screen.getByText("my MDD diary")).toBeInTheDocument();
  });
});
