export const Card = (): JSX.Element => {
  const { address, zip_code, price, area, bedrooms, is_rental, city, image } =
    DUMMY_ESTATE;
  return (
    <div className="w-[384px] h-[455px] relative border border-solid border-red-700 rounded-tr-[14px] rounded-tl-[14px] overflow-hidden">
      <span className="absolute top-[23px] left-[23px] tag-chip">
        {is_rental ? "ქირავდება" : "იყიდება"}
      </span>
      <img
        className="h-[307px] w-full object-cover"
        src={image}
        alt={address}
      />
      <div className="flex flex-col gap-5 px-[25px] py-[22px]">
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-[28px]" aria-label={`${price}`}>
            {price}
          </span>
          <span className="card-details-text text-rdbryText-200">
            <span>{"(i)"}</span>
            {`${city.name}, ${address}`}
          </span>
        </div>
        <div className="flex gap-8 items-start">
          <span className="card-details-text text-rdbryText-200 flex gap-[5px]">
            <span>{"(i)"}</span>
            {bedrooms}
          </span>
          <span className="card-details-text text-rdbryText-200 flex gap-[5px]">
            <span>{"(i)"}</span>
            {area}
          </span>
          <span className="card-details-text text-rdbryText-200 flex gap-[5px]">
            <span>{"(i)"}</span>
            {zip_code}
          </span>
        </div>
      </div>
    </div>
  );
};

var DUMMY_ESTATE = {
  id: 1,
  address: "შარტავას 2ა",
  zip_code: "0101",
  price: 100000,
  area: 100.5,
  bedrooms: 3,
  is_rental: 0,
  image:
    "https://api.real-estate-manager.redberryinternship.ge/storage/agent_avatars/KXhmcUIaDo7TTkgfCBraeUhx3Nd6eTKrmsXOWkPh.png",
  city_id: 1,
  city: {
    id: 1,
    name: "სოხუმი",
    region_id: 1,
    region: {
      id: 1,
      name: "აფხაზეთი",
    },
  },
};
