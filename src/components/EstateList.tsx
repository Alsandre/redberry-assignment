import { Card } from "./ui";
const FAKE_data = Array(5).fill(1);
export const EstateList = (): JSX.Element => {
  return (
    <>
      {FAKE_data.map((_, index) => (
        <Card key={index} />
      ))}
    </>
  );
};
