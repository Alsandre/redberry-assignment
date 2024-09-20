import { ReactNode } from "react";
import {
  Control,
  FieldValues,
  UseControllerProps,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

// Estate
interface IEstateDataGeneric {
  id: number;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  city_id: number;
}
export interface IGetEstatesList extends IEstateDataGeneric {
  image: string;
  city: ICityData;
}

export interface IGetEstateById extends IEstateDataGeneric {
  agent_id: number;
  city: ICityData;
  agent: IAgentDetails;
  created_at: string;
  description: string;
}

export interface INewEstateData extends IEstateDataGeneric {
  agent_id: number;
  description: string;
  image: File | null;
  created_at: string;
}

// Agent

interface IAgentGeneric {
  name: string;
  surname: string;
}
export interface IGetAgentData extends IAgentGeneric {
  id: number;
  avatar: string;
}
export interface INewAgentData extends IAgentGeneric {
  email: string;
  phone: string;
  avatar: string;
}
export interface IAgentDetails extends IGetAgentData {
  email: string;
  phone: string;
}

// Region
export interface IRegionData {
  id: number;
  name: string;
}

// City
export interface ICityData {
  id: number;
  name: string;
  region_id: number;
  region: IRegionData;
}

// Props
export interface IEstateCardProps extends IGetEstatesList {
  onClick: () => void;
}

export interface IFormInputProps extends UseControllerProps {
  label: string;
  required: boolean;
}

export interface IDealTypeRadioGroupProps extends FieldValues {
  value: number;
  onChange: (id: number) => void;
}

export interface IControlledComponentProps extends FieldValues {
  control: Control;
  name: string;
  label: string;
}

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export interface INewAgentFormProps {
  onClose: () => void;
}

export interface IEstateImagePreviewProps {
  is_rental: number;
  image: string;
  alt_description: string;
  created_at: string;
}

export interface IEstateListProps {
  data: IGetEstatesList[] | undefined;
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
}

export interface IFiltersPanelProps {
  onFilterChange: (filterData: IFilters) => void;
}

export interface IIconProps {
  className?: string;
  onClick?: () => void;
}

export enum EButtonTypes {
  DEFAULT = "button",
  SUBMIT = "submit",
  RESET = "reset",
}
export interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: EButtonTypes;
  disabled?: boolean;
}

export interface IConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  isModalOpen: boolean;
}

// Filters data types
export interface IFilters {
  regions: string[];
  area: {
    min: string;
    max: string;
  };
  price: {
    min: string;
    max: string;
  };
  bedrooms: string;
}

export enum EFilters {
  REGIONS = "regions",
  AREA = "area",
  PRICE = "price",
  BEDROOMS = "bedrooms",
}

export interface IFilterProps {
  register: UseFormRegister<IFilters>;
  fieldName: EFilters;
}

export interface ICheckBoxFilterProps {
  fieldName: EFilters;
  options: { label: string; value: string }[];
}

export interface IRangeFilterProps extends Omit<IFilterProps, "fieldName"> {
  setValue: UseFormSetValue<IFilters>;
  range: number[];
  fieldName: "area" | "price";
  watch: UseFormWatch<IFilters>;
}

export enum ECheckBoxVariants {
  DEFAULT = "default",
  CHECKED = "checked",
}

export interface ICheckBoxProps extends IIconProps {
  varaint: ECheckBoxVariants;
}

export type TFormSectionTtle = {
  className?: string;
  label: string;
};
