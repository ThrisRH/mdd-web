// import Button from "@/components/Button/button";
// import { fireEvent, render, screen } from "@testing-library/react";

// describe("Button component", () => {
//   it("Renders đúng component không?", () => {
//     render(<Button>Click Me</Button>);
//     expect(screen.getByText("Click Me")).toBeInTheDocument();
//   });

//   it("Default props có hoạt động đúng mặt định là secondary hay không?", () => {
//     render(<Button>Secondary Btn</Button>);
//     const button = screen.getByRole("button");
//     expect(button).toHaveAttribute("class");
//   });

//   it("Chiều cao có đúng 60px không?", () => {
//     render(<Button height="60px">Tall Btn</Button>);
//     const button = screen.getByRole("button");
//     expect(button).toHaveStyle({ height: "60px" });
//   });

//   it("Có gọi hàm onClickFunc khi click không?", () => {
//     const handleClick = jest.fn();
//     render(<Button onClickFunc={handleClick}>Click</Button>);
//     fireEvent.click(screen.getByText("Click"));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });

//   it("Vô hiệu hóa nút khi disabled == true", () => {
//     const handleClick = jest.fn();
//     render(
//       <Button disable={true} onClickFunc={handleClick}>
//         Disabled
//       </Button>
//     );
//     const button = screen.getByRole("button");
//     expect(button).toBeDisabled();
//     fireEvent.click(button);
//     expect(handleClick).not.toHaveBeenCalled();
//   });
// });
