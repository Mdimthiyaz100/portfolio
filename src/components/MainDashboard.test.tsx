import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MainDashboard } from "./MainDashboard";

afterEach(cleanup);

describe("portfolio", () => {
  it("renders the abstract hero, navigation, and featured projects without a portrait", () => {
    render(<MainDashboard />);

    expect(screen.getByRole("heading", { name: /Hi, I'm Mohamed Imthiyaz/i })).toBeTruthy();
    expect(screen.getByText("Available for Opportunities")).toBeTruthy();
    expect(screen.getByLabelText(/const developer/)).toBeTruthy();
    expect(screen.queryByRole("img", { name: /portrait|profile photo/i })).toBeNull();
    expect(screen.getByRole("link", { name: "About" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Skills" }).getAttribute("href")).toBe("#skills");
    expect(screen.getByRole("heading", { name: "DeliveryHub" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "EventX" })).toBeTruthy();
    expect(screen.queryByRole("heading", { name: "CareerGo" })).toBeNull();
  });

  it("provides the supplied project, email, and LinkedIn links", () => {
    render(<MainDashboard />);

    const externalLinks = [
      ["DeliveryHub GitHub repository", "https://github.com/Mdimthiyaz100/DeliveryHub"],
      ["DeliveryHub live demo", "https://deliveryhub-feh3.onrender.com/"],
      ["EventX GitHub repository", "https://github.com/Mdimthiyaz100/EventX"],
      ["EventX live demo", "https://eventx-1-iuzj.onrender.com/"],
      ["Mohamed Imthiyaz on LinkedIn", "https://www.linkedin.com/in/mohamed-imthiyaz-6b2223289/"],
    ] as const;

    for (const [label, href] of externalLinks) {
      const link = screen.getByRole("link", { name: label });
      expect(link.getAttribute("href")).toBe(href);
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    }

    expect(screen.getByRole("link", { name: "Contact Me" }).getAttribute("href"))
      .toBe("mailto:mimthiyaz100@gmail.com");
    expect(screen.getByRole("link", { name: "mimthiyaz100@gmail.com" }).getAttribute("href"))
      .toBe("mailto:mimthiyaz100@gmail.com");

    const cvLink = screen.getAllByRole("link", { name: /Download CV/ })
      .find((link) => link.getAttribute("href") === "/resume/Mohamed-Imthiyaz-Resume.pdf");
    expect(cvLink?.hasAttribute("download")).toBe(true);
  });

  it("opens the mobile navigation and closes it after choosing a section", () => {
    render(<MainDashboard />);

    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));
    expect(screen.getByRole("button", { name: "Close navigation menu" }).getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(screen.getByRole("link", { name: "Projects" }));
    expect(screen.getByRole("button", { name: "Open navigation menu" }).getAttribute("aria-expanded")).toBe("false");
  });
});
