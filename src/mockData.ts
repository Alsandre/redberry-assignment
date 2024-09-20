import { createEstate } from "./services/mutation";

const STREETS = [
  "ა. წერეთელი გამზირი",
  "ა. ჭავჭავაძე ქუჩა",
  "გ. რუსთაველი გამზირი",
  "ი. ვეკუა ქუჩა",
  "ი. ჯავახიშვილი ქუჩა",
  "ვ. აბაშიძე ქუჩა",
  "ა. ხოშტარია ქუჩა",
  "მ. ასათიანი ქუჩა",
  "ლ. გუდიაშვილი ქუჩა",
  "შ. დადიანი ქუჩა",
  "დ. აღმაშენებელი გამზირი",
  "გ. აბაშიძე გამზირი",
  "ქ. მარჯანიშვილი ქუჩა",
  "ნ. ბარათაშვილი ქუჩა",
  "რ. კიკნაძე ქუჩა",
  "ი. მაჩაბელი ქუჩა",
  "ა. ხანჯალიაშვილი ქუჩა",
  "ნ. ჟორდანია ქუჩა",
  "ა. ერისთავი ქუჩა",
  "გ. ყაზბეგი გამზირი",
  "შ. ყავლაშვილი ქუჩა",
  "ს. ნინუა ქუჩა",
  "ლ. სანიკიძე ქუჩა",
  "ი. ჭიჭინაძე ქუჩა",
  "ა. გაბრიელაშვილი ქუჩა",
  "ვ. მერაბიშვილი ქუჩა",
  "მ. ბაქრაძე ქუჩა",
  "რ. აბულაძე ქუჩა",
  "თ. ბუაჩიძე ქუჩა",
  "გ. ჯავახიშვილი ქუჩა",
];
const DESCRIPTIONS = [
  "მშვენიერი ბინა, ახლახან გარემონტებული, ყველა საჭირო მოწყობილობით.",
  "გსურთ კომფორტი და სიმყუდროე? მოიძიეთ ბინა ჩვენს ახალი პროექტში.",
  "ძველი სტილის ბინა ცენტრში, დიდი ოთახებით და მაღალი ჭერით.",
  "მოსახლეობისთვის მზარდი მოთხოვნის ადგილი - ახალი ბინა ხარისხიანი გარემოებით.",
  "შესანიშნავი ბინა სანაპიროზე, ულამაზესი ხედით და კარგი მდებარეობით.",
  "ბინა ახალაშენებულ კორპუსში, მაღალხარისხიანი რემონტით და გასაგები ფასით.",
  "კომფორტული ბინა, ყველაფერი ახლახან გარემონტებულია და შკაბების ნაკლებობა არ გაქვთ.",
  "ბინა იდეალური ოჯახებისთვის, დიდი ოთახებით და მისაღები ფართით.",
  "წარმოუდგენელი ხედებით ბინა, ახლოს მარშრუტულებთან და საჭირო ობიექტებთან.",
  "მყუდრო ბინა, სრულად აღჭურვილი სამზარეულოთი და თანამედროვე დიზაინით.",
  "ბინა მყუდრო უბანში, ახლოს საჯარო ტრანსპორტით და სავაჭრო ცენტრებით.",
  "ბინა მაღალ სართულზე, ულამაზესი ქალაქის ხედით და კომფორტული ადგილმდებარეობით.",
  "ახალი აშენებული ბინა მშვიდ უბანში, ბავშვების სათამაშო მოედნებით და ბაღით.",
  "ბინა ქალაქის ცენტრში, ყველა საჭირო ინფრასტრუქტურით და კომფორტული გარემოთი.",
  "ბინა ჩვილების გარეშე, ოჯახური გარემო და დიდი შესასვლელი ადგილი.",
  "მყუდრო ბინა ახლოს სანაპიროს, დასასვენებელი ადგილების სიახლოვეში.",
  "კომფორტული ბინა ახალ აშენებულ კორპუსში, თანამედროვე ტექნოლოგიებით და ლამაზი ინტერიერით.",
  "ბინა სწრაფი გადასვლისთვის, ყველა საჭირო სერვისით და ახალი გარემონტებით.",
  "შესანიშნავი ბინა ქალაქის ჩრდილოეთ ნაწილში, სრულად მოწყობილ სამზარეულოთი და კარგ პირობებში.",
  "ბინა მშვენიერი ხედებით მთებისკენ, ახალი გარემონტებული და თანამედროვე დიზაინით.",
  "მყუდრო ბინა თანამედროვე ინტერიერით და კომფორტული საცხოვრებელი ფართით.",
  "ბინა ქალაქის ცენტრში, სადაც ყველაფერი ახლოსაა, ადვილად ხელმისაწვდომი და თანამედროვე სტილის.",
  "ბინა ძველი ქალაქის ისტორიით და კომფორტული გარემოთი, ახლოს საზოგადოებრივ ტრანსპორტთან.",
  "კომფორტული ბინა თანამედროვე ავეჯით და ახლად გარემონტებული, ახლოს სასწავლო დაწესებულებებთან.",
  "ბინა მწვანე უბანში, ახლოს პარკით და სასკოლო დაწესებულებებით, მშვიდი გარემოთი.",
  "ბინა პარკთან ახლოს, ახალი გარემონტებული და მყუდრო გარემოთი, საუკეთესო ადგილმდებარეობით.",
  "ბინა ქალაქის დასავლეთ ნაწილში, ახალი დიზაინით და კარგი ზომის საძინებელი ოთახებით.",
  "კომფორტული ბინა სექრეტული საცხოვრებელი კომპლექსით, ახლოს სავაჭრო ცენტრებით და ტრანსპორტით.",
  "ბინა ახალი აშენებული, კარგად გაწვდილი ლიფტით და კარგი გარანტიებით.",
  "ბინა მაღალი კლასის საცხოვრებელი კომპლექსში, ქალაქის საუკეთესო ხედებით და თანამედროვე ინტერიერით.",
  "ბინა ახალაშენებულ კორპუსში, ყველა საჭირო ტექნიკით და კომფორტული პირობებით.",
  "მყუდრო ბინა, ახლახან გარემონტებული, საძინებელი და ბავშვებისთვის იდეალური გარემოთი.",
  "ბინა ახლოს უნივერსიტეტთან, სტუდენტებისათვის იდეალური და თანამედროვე პირობებით.",
  "ბინა მშვიდ და მწვანე უბანში, ახალი გარემონტებული და კომფორტული საცხოვრებელი პირობებით.",
];
const IMAGES = [
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776912/estate6_qw2tvp.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776912/estate8_hqriop.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776911/estate2_c5xgbm.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776911/estate3_epqavb.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776911/estate4_j7sbsy.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776911/estate7_enqhor.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776911/estate1_urcy5r.png",
  "https://res.cloudinary.com/duzobmqaf/image/upload/v1726776911/estate5_dlthcs.png",
];
const CITY_DATA = [
  {
    id: 1,
    name: "სოხუმი",
    region_id: 1,
  },
  {
    id: 2,
    name: "გაგრა",
    region_id: 1,
  },
  {
    id: 3,
    name: "ოჩამჩირე",
    region_id: 1,
  },
  {
    id: 4,
    name: "გუდაუთა",
    region_id: 1,
  },
  {
    id: 5,
    name: "გალი",
    region_id: 1,
  },
  {
    id: 6,
    name: "ტყვარჩელი",
    region_id: 1,
  },
  {
    id: 7,
    name: "ახალი ათონი",
    region_id: 1,
  },
  {
    id: 8,
    name: "ბათუმი",
    region_id: 2,
  },
  {
    id: 9,
    name: "ქობულეთი",
    region_id: 2,
  },
  {
    id: 10,
    name: "ოზურგეთი",
    region_id: 3,
  },
  {
    id: 11,
    name: "ლანჩხუთი",
    region_id: 3,
  },
  {
    id: 12,
    name: "თბილისი",
    region_id: 4,
  },
  {
    id: 13,
    name: "ქუთაისი",
    region_id: 5,
  },
  {
    id: 14,
    name: "სამტრედია",
    region_id: 5,
  },
  {
    id: 15,
    name: "ზესტაფონი",
    region_id: 5,
  },
  {
    id: 16,
    name: "ჭიათურა",
    region_id: 5,
  },
  {
    id: 17,
    name: "წყალტუბო",
    region_id: 5,
  },
  {
    id: 18,
    name: "ტყიბული",
    region_id: 5,
  },
  {
    id: 19,
    name: "ხონი",
    region_id: 5,
  },
  {
    id: 20,
    name: "საჩხერე",
    region_id: 5,
  },
  {
    id: 21,
    name: "თერჯოლა",
    region_id: 5,
  },
  {
    id: 22,
    name: "ვანი",
    region_id: 5,
  },
  {
    id: 23,
    name: "ბაღდათი",
    region_id: 5,
  },
  {
    id: 24,
    name: "თელავი",
    region_id: 6,
  },
  {
    id: 25,
    name: "საგარეჯო",
    region_id: 6,
  },
  {
    id: 26,
    name: "გურჯაანი",
    region_id: 6,
  },
  {
    id: 27,
    name: "ყვარელი",
    region_id: 6,
  },
  {
    id: 28,
    name: "ახმეტა",
    region_id: 6,
  },
  {
    id: 29,
    name: "დედოფლისწყარო",
    region_id: 6,
  },
  {
    id: 30,
    name: "ლაგოდეხი",
    region_id: 6,
  },
  {
    id: 31,
    name: "წნორი",
    region_id: 6,
  },
  {
    id: 32,
    name: "სიღნაღი",
    region_id: 6,
  },
  {
    id: 33,
    name: "მცხეთა",
    region_id: 7,
  },
  {
    id: 34,
    name: "დუშეთი",
    region_id: 7,
  },
  {
    id: 35,
    name: "ონი",
    region_id: 8,
  },
  {
    id: 36,
    name: "ამბროლაური",
    region_id: 8,
  },
  {
    id: 37,
    name: "ცაგერი",
    region_id: 8,
  },
  {
    id: 38,
    name: "ზუგდიდი",
    region_id: 9,
  },
  {
    id: 39,
    name: "ფოთი",
    region_id: 9,
  },
  {
    id: 40,
    name: "სენაკი",
    region_id: 9,
  },
  {
    id: 41,
    name: "აბაშა",
    region_id: 9,
  },
  {
    id: 42,
    name: "მარტვილი",
    region_id: 9,
  },
  {
    id: 43,
    name: "ხობი",
    region_id: 9,
  },
  {
    id: 44,
    name: "წალენჯიხა",
    region_id: 9,
  },
  {
    id: 45,
    name: "ჩხოროწყუ",
    region_id: 9,
  },
  {
    id: 46,
    name: "ჯვარი",
    region_id: 9,
  },
  {
    id: 47,
    name: "ახალციხე",
    region_id: 10,
  },
  {
    id: 48,
    name: "ბორჯომი",
    region_id: 10,
  },
  {
    id: 49,
    name: "ახალქალაქი",
    region_id: 10,
  },
  {
    id: 50,
    name: "ნინოწმინდა",
    region_id: 10,
  },
  {
    id: 51,
    name: "ვალე",
    region_id: 10,
  },
  {
    id: 52,
    name: "რუსთავი",
    region_id: 11,
  },
  {
    id: 53,
    name: "მარნეული",
    region_id: 11,
  },
  {
    id: 54,
    name: "გარდაბანი",
    region_id: 11,
  },
  {
    id: 55,
    name: "ბოლნისი",
    region_id: 11,
  },
  {
    id: 56,
    name: "თეთრიწყარო",
    region_id: 11,
  },
  {
    id: 57,
    name: "დმანისი",
    region_id: 11,
  },
  {
    id: 58,
    name: "წალკა",
    region_id: 11,
  },
  {
    id: 59,
    name: "გორი",
    region_id: 12,
  },
  {
    id: 60,
    name: "ხაშური",
    region_id: 12,
  },
  {
    id: 61,
    name: "კასპი",
    region_id: 12,
  },
  {
    id: 62,
    name: "ქარელი",
    region_id: 12,
  },
  {
    id: 63,
    name: "ცხინვალი",
    region_id: 12,
  },
];
const AGENT_IDS = [595, 608];

const getRandomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomCityId = (regionId: number) => {
  const citiesInCurRegion = CITY_DATA.filter(
    (city) => city.region_id === regionId
  );
  const citiesCount = citiesInCurRegion.length - 1;
  return citiesInCurRegion[getRandomInRange(0, citiesCount)].id;
};

const generateRandomEstateData = (image: Blob) => {
  const formData = new FormData();

  const regionId = getRandomInRange(1, 12);
  // Append image to FormData
  formData.append("image", image, "image.png"); // Adjust filename and type if needed

  // Append other fields to FormData
  formData.append(
    "address",
    `${STREETS[getRandomInRange(0, 30)]}, #${getRandomInRange(1, 100)}`
  );
  formData.append("zip_code", `${getRandomInRange(100, 1000)}`);
  formData.append("price", getRandomInRange(50000, 300000).toString());
  formData.append("area", getRandomInRange(50, 500).toString());
  formData.append("bedrooms", getRandomInRange(1, 9).toString());
  formData.append("is_rental", getRandomInRange(0, 1).toString());
  formData.append("city_id", getRandomCityId(regionId).toString());
  //@ts-ignore
  formData.append("agent_id", AGENT_IDS[getRandomInRange(0, 1)]);
  formData.append("region_id", regionId.toString());
  formData.append("description", DESCRIPTIONS[getRandomInRange(0, 30)]);
  formData.append("created_at", new Date().toISOString());
  return formData;
};

export const seeder = async (amount: number) => {
  for (let i = 0; i < amount; i++) {
    const randomFlatImageURL = IMAGES[getRandomInRange(0, 7)];
    const response = await fetch(randomFlatImageURL);
    const imageBlob = await response.blob();

    const newEstateData = generateRandomEstateData(imageBlob);
    // @ts-ignore
    const postResponse = await createEstate(newEstateData);
  }
};
