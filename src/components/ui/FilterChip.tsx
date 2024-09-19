import { CrossIcon } from "../icons";

interface IFilterChipProps {
  onClick: () => void;
  content: string;
}

export const FilterChip: React.FC<IFilterChipProps> = ({
  onClick,
  content,
}) => {
  return (
    <div
      onClick={() => onClick()}
      className="flex items-center gap-1 filter-chip"
    >
      <span>{content}</span>
      <span>
        <CrossIcon className="text-rdbryText-400" />
      </span>
    </div>
  );
};
