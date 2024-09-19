# Real Estate Listings Application

## Overview

This project is a **three-page frontend application** built using a provided backend API. The app showcases a list of real estate properties and includes functionality to add new estates, manage agents, and filter listings. It also features an infinite carousel for recommendations on the estate details page.

## Features

- **Real Estate Listings Page**
  - Display real estate listings with an image, address, city, zip code, price, area, number of bedrooms, and a tag indicating if it's for rent or sale.
  - Filter options to refine the listings displayed.

- **Estate Details Page**
  - View detailed information about a specific estate.
  - Infinite carousel for viewing recommended estates from the same region.
  - Option to delete an estate with confirmation and redirection.

- **Add New Estate Page**
  - Form to add new real estate listings including address, picture, region, city, zip code, price, area, bedrooms, description, sale/rent status, and agent selection.

- **Add New Agent Modal**
  - Form to add new agents with fields for name, surname, email, picture, and mobile.

## Tech Stack

- **Frontend**: Vite, React, TypeScript, TailwindCSS
- **Tools**: React Hook Form, @alsandre/responsive-image-carousel, React Query, Eslint, Prettier, Husky, Axios, Raect select, Headlessui, JEST testing
- **Backend**: Provided API

## Project Structure

```bash
├── public
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── utils
│   └── App.tsx
│   └── types.ts
│   └── constants.ts
├── package.json
└── README.md
