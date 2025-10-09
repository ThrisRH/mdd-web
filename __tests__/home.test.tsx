import Home from "@/app/(user)/page";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
  usePathname: () => "blogs/123",
}));

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          data: [
            {
              id: 1,
              title: "Post 1",
              mainContent: "Hello world content",
              cover: { url: "/cover.jpg" },
            },
          ],
          meta: { pagination: { pageCount: 5 } },
        }),
    })
  ) as jest.Mock;
});

test("renders heading Blog", async () => {
  let ui: React.ReactElement;

  await act(async () => {
    ui = await Home({ searchParams: Promise.resolve({}) });
    render(ui!);
  });

  expect(screen.getByText(/blog/i)).toBeInTheDocument();
});
