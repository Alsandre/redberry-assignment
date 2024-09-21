export const AREA_RANGES = [50, 100, 150, 200, 250, 300];
export const PRICE_RANGES = [50000, 100000, 150000, 200000, 250000, 300000];
export const FILTERS_FORM_DEFAULT_VALUES = {
  regions: [],
  area: { min: "", max: "" },
  price: { min: "", max: "" },
  bedrooms: "",
};
export const ESTATE_FORM_DEFAULT_VALUES = {
  address: "",
  zip_code: "",
  image: null,
  region_id: 0,
  city_id: 0,
  price: 0,
  area: 0,
  bedrooms: 0,
  agent_id: 0,
  is_rental: 1,
  description: "",
};
export const AGENT_FORM_DEFAULT_VALUES = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  avatar: "",
};

export const ESTATE_PER_SCREEN = 12;

export const EMOTIONS = [
  "What a wild ride, right?",
  "That was quite the adventure!",
  "That was an epic trip!",
  "What a rollercoaster, huh?",
  "That was a memorable trek!",
  "What a fascinating journey!",
  "That was a whirlwind experience!",
  "What an incredible expedition!",
  "That was an unforgettable path!",
  "What a thrilling voyage!",
];
