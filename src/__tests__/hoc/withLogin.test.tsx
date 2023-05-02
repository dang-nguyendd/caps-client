import React from "react";

import { render } from "@testing-library/react";
import { useRouter } from "next/router";

import { useAuth } from "@/contexts/auth-context";
import withLogin from "@/hoc/withLogin";
import { AuthContextData } from "@/types/context/with-auth-context";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/contexts/auth-context");

const DummyComponent = () => <div>Dummy Component</div>;

describe("withAuth HOC", () => {
  let useRouterMock: jest.Mock;
  let useAuthMock: jest.Mock<AuthContextData>;

  beforeEach(() => {
    useRouterMock = useRouter as jest.Mock;
    useRouterMock.mockReturnValue({ replace: jest.fn() });

    useAuthMock = useAuth as jest.Mock<AuthContextData>;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should redirect to /auth/login if user is not authenticated", () => {
    useAuthMock.mockReturnValue({
      user: null,
      signIn: jest.fn(),
      signOut: jest.fn(),
    });
    const WithAuth = withLogin(DummyComponent);
    render(<WithAuth />);
    expect(useRouterMock().replace).toHaveBeenCalledWith("/auth/login");
  });

  it("should render the wrapped component if user is authenticated", () => {
    useAuthMock.mockReturnValue({
      user: { id: 1, name: "Test User", email: "user@example.com" },
      signIn: jest.fn(),
      signOut: jest.fn(),
    });
    const WithAuth = withLogin(DummyComponent);
    const { getByText } = render(<WithAuth />);
    expect(getByText("Dummy Component")).toBeInTheDocument();
  });
});
