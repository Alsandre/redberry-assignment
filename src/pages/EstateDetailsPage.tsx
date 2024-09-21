import { EstateDetailsSection } from "../components/EstateDetailsSection";
import { EstateSliderSection } from "../components/EstatesSliderSection";

export const EstateDetailsPage = (): JSX.Element => {
  return (
    <>
      <EstateDetailsSection />
      <div className="mt-[97px]">
        <h3 className="text-[32px] leading-[38.4px] font-medium text-rdbryText-300">
          ბინები მსგავს ლოკაციაზე
        </h3>
        <EstateSliderSection />
      </div>
    </>
  );
};
