import { IAgentDetails } from "../types";
import { phoneFormater } from "../utils/phoneFormater";
import { EnvelopeIcon, PhoneIcon } from "./icons";

export const AgentCard = ({
  avatar,
  email,
  name,
  phone,
  surname,
}: IAgentDetails): JSX.Element => {
  const formattedPhone = phoneFormater(phone);

  return (
    <div className="w-[503px] h-[174px] rounded-[8px] border border-solid border-1 border-rdbryBorder-50 py-6 pl-5 flex flex-col gap-[15px]">
      <div className="flex gap-[14px] items-center">
        <div className="w-[72px] h-[72px]">
          <img
            className="w-full h-full rounded-full"
            src={avatar}
            alt={`${name} ${surname}`}
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className="text-rdbryText-300 text-[16px] leading-[19px] font-medium">{`${name} ${surname}`}</span>
          <span className="text-rdbryText-100 text-[14px] leading-[16.8px] font-regular">
            აგენტი
          </span>
        </div>
      </div>
      <div className="text-rdbryShade-200 text-[14px] leading-[16.8px] font-regular flex flex-col gap-1 items-start">
        <div className="flex gap-[5px] items-start">
          <span>
            <EnvelopeIcon />
          </span>
          <span>{email}</span>
        </div>
        <div className="flex gap-[5px] items-start">
          <span>
            <PhoneIcon />
          </span>
          <span>{formattedPhone}</span>
        </div>
      </div>
    </div>
  );
};
