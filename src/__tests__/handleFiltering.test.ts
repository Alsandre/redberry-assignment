// filterUtils.test.ts
import { IGetEstatesList, IFilters } from "../types"; // Adjust import as needed
import { handleFiltering } from "../utils/handleFiltering"; // Adjust import as needed

const mockData: IGetEstatesList[] = [
  {
    id: 1,
    address: "123 Maple St",
    zip_code: "12345",
    price: 50000,
    area: 100,
    bedrooms: 3,
    is_rental: 1,
    city_id: 1,
    image: "image1.jpg",
    city: {
      id: 1,
      name: "Springfield",
      region_id: 1,
      region: {
        id: 1,
        name: "Northeast",
      },
    },
  },
  {
    id: 2,
    address: "456 Oak St",
    zip_code: "67890",
    price: 100000,
    area: 150,
    bedrooms: 4,
    is_rental: 0,
    city_id: 2,
    image: "image2.jpg",
    city: {
      id: 2,
      name: "Shelbyville",
      region_id: 2,
      region: {
        id: 2,
        name: "Northwest",
      },
    },
  },
  {
    id: 3,
    address: "789 Birch St",
    zip_code: "54321",
    price: 80000,
    area: 120,
    bedrooms: 2,
    is_rental: 1,
    city_id: 1,
    image: "image3.jpg",
    city: {
      id: 1,
      name: "Springfield",
      region_id: 1,
      region: {
        id: 1,
        name: "Northeast",
      },
    },
  },
];

describe("filterEstates", () => {
  it("should return all estates when no filters are applied", () => {
    const filters: IFilters = {
      regions: [],
      area: { min: "", max: "" },
      price: { min: "", max: "" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual(mockData);
  });

  it("should filter estates by region", () => {
    const filters: IFilters = {
      regions: ["1"],
      area: { min: "", max: "" },
      price: { min: "", max: "" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([mockData[0], mockData[2]]);
  });

  it("should filter estates by area (min and max)", () => {
    const filters: IFilters = {
      regions: [],
      area: { min: "100", max: "120" },
      price: { min: "", max: "" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([mockData[0], mockData[2]]);
  });

  it("should filter estates by price (min only)", () => {
    const filters: IFilters = {
      regions: [],
      area: { min: "", max: "" },
      price: { min: "60000", max: "" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([mockData[1], mockData[2]]);
  });

  it("should filter estates by price (max only)", () => {
    const filters: IFilters = {
      regions: [],
      area: { min: "", max: "" },
      price: { min: "", max: "90000" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([mockData[0], mockData[2]]);
  });

  it("should filter estates by bedrooms", () => {
    const filters: IFilters = {
      regions: [],
      area: { min: "", max: "" },
      price: { min: "", max: "" },
      bedrooms: "3",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([mockData[0]]);
  });

  it("should apply multiple filters (regions and price)", () => {
    const filters: IFilters = {
      regions: ["1"],
      area: { min: "", max: "" },
      price: { min: "60000", max: "90000" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([mockData[2]]);
  });

  it("should return no estates when filters are too restrictive", () => {
    const filters: IFilters = {
      regions: ["1"],
      area: { min: "200", max: "" },
      price: { min: "", max: "" },
      bedrooms: "",
    };
    const result = handleFiltering(filters, mockData);
    expect(result).toEqual([]);
  });
});
