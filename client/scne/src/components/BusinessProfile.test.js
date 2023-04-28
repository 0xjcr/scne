import React from "react";
import { render, screen, act } from "@testing-library/react";
import BusinessProfile from "./BusinessProfile";
import { getAllProfiles } from "../api-service";

jest.mock("../api-service", () => ({
  getAllProfiles: jest.fn(),
}));

describe("BusinessProfile", () => {
  test("renders the business name", async () => {
    const name = "Test Business";
    getAllProfiles.mockResolvedValue([{ id: 1, member: name }]);

    render(<BusinessProfile name={name} />);

    expect(await screen.findByText(name)).toBeInTheDocument();
  });

  test("renders the business bio", async () => {
    const bio = "This is a test business";
    getAllProfiles.mockResolvedValue([{ id: 1, bio }]);

    render(<BusinessProfile bio={bio} />);

    expect(await screen.findByText(bio)).toBeInTheDocument();
  });

  test("renders the business city", async () => {
    const city = "Test City";
    getAllProfiles.mockResolvedValue([{ id: 1, city }]);

    render(<BusinessProfile city={city} />);

    expect(await screen.findByText(city)).toBeInTheDocument();
  });

  test("renders the business address", async () => {
    const address = "123 Test Street";
    getAllProfiles.mockResolvedValue([{ id: 1, address }]);

    render(<BusinessProfile address={address} />);

    expect(await screen.findByText(address)).toBeInTheDocument();
  });

  test("renders the business phone number", async () => {
    const phone = "555-1234";
    getAllProfiles.mockResolvedValue([{ id: 1, phone }]);

    render(<BusinessProfile phone={phone} />);

    expect(await screen.findByText(phone)).toBeInTheDocument();
  });

  test("renders the number of business reviews", async () => {
    const reviewCount = 42;
    getAllProfiles.mockResolvedValue([{ id: 1, reviewCount }]);

    render(<BusinessProfile reviewCount={reviewCount} />);

    expect(await screen.findByText(reviewCount)).toBeInTheDocument();
  });

  test("renders the business Instagram handle", async () => {
    const ig = "@testbusiness";
    getAllProfiles.mockResolvedValue([{ id: 1, ig }]);

    render(<BusinessProfile ig={ig} />);

    expect(await screen.findByText(ig)).toBeInTheDocument();
  });

  test("renders the business profile photo", async () => {
    const photo = "https://example.com/photo.jpg";
    getAllProfiles.mockResolvedValue([{ id: 1, photo }]);

    render(<BusinessProfile photo={photo} />);

    expect(screen.getByAltText("")).toHaveAttribute("src", photo);
  });
});
