import { IAgentDetails } from "../types";

export const AgentCard = ({
  avatar,
  email,
  name,
  phone,
  surname,
}: IAgentDetails): JSX.Element => {
  return (
    <div>
      <div>
        <img src={avatar} alt={`${name} ${surname}`} />
        <div>
          <span>{`${name} ${surname}`}</span>
          <span>აგენტი</span>
        </div>
      </div>
      <div>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </div>
  );
};
