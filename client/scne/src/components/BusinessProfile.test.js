import React from "react";
import { render, screen, act } from "@testing-library/react";
import BusinessProfile from "./BusinessProfile";
import { getAllProfiles } from "../api-service";
import { MemoryRouter } from "react-router-dom";

jest.mock("../api-service", () => ({
  getAllProfiles: jest.fn(),
}));

describe("BusinessProfile", () => {
  test("renders the business name", async () => {
    const name = "Test Business";
    getAllProfiles.mockResolvedValue([{ id: 1, member: name }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile name={name} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(name)).toBeInTheDocument();
  });

  test("renders the business bio", async () => {
    const bio = "This is a test business";
    getAllProfiles.mockResolvedValue([{ id: 1, bio }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile bio={bio} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(bio)).toBeInTheDocument();
  });

  test("renders the business city", async () => {
    const city = "Test City";
    getAllProfiles.mockResolvedValue([{ id: 1, city }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile city={city} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(city)).toBeInTheDocument();
  });

  test("renders the business address", async () => {
    const address = "123 Test Street";
    getAllProfiles.mockResolvedValue([{ id: 1, address }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile address={address} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(address)).toBeInTheDocument();
  });

  test("renders the business phone number", async () => {
    const phone = "555-1234";
    getAllProfiles.mockResolvedValue([{ id: 1, phone }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile phone={phone} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(phone)).toBeInTheDocument();
  });

  test("renders the number of business reviews", async () => {
    const reviewCount = 42;
    getAllProfiles.mockResolvedValue([{ id: 1, reviewCount }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile reviewCount={reviewCount} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(reviewCount)).toBeInTheDocument();
  });

  test("renders the business Instagram handle", async () => {
    const ig = "@testbusiness";
    getAllProfiles.mockResolvedValue([{ id: 1, ig }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile ig={ig} />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(ig)).toBeInTheDocument();
  });

  test("renders the business profile photo", async () => {
    const photo = "https://example.com/photo.jpg";
    getAllProfiles.mockResolvedValue([{ id: 1, photo }]);

    await act(async () => {
      render(
        <MemoryRouter>
          <BusinessProfile photo={photo} />
        </MemoryRouter>
      );
    });

    expect(screen.getByAltText("")).toHaveAttribute("src", photo);
  });
});
