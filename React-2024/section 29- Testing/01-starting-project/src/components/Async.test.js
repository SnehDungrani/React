import { render, screen } from "@testing-library/react";
import "mutationobserver-shim";
import Async from "./Async";
import React from "react";

describe("Async component", () => {
  test("render post if request succeeds", async () => {
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
