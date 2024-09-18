import { ReactNode } from "react";
import {
  Control,
  FieldValues,
  UseControllerProps,
  UseFormRegister,
  UseFormSetValue,
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
  title: string;
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
  data: IGetEstatesList[] | undefined;
  onFilterChange: (filteredData: IGetEstatesList[]) => void;
}

// Filters data types
export interface Filters {
  regions: string[];
  area: {
    min: number;
    max: number;
  };
  price: {
    min: number;
    max: number;
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
  register: UseFormRegister<Filters>;
  fieldName: EFilters;
}

export interface ICheckBoxFilterProps extends IFilterProps {
  options: { label: string; value: number }[];
}

export interface IRangeFilterProps extends Omit<IFilterProps, "fieldName"> {
  setValue: UseFormSetValue<Filters>;
  range: number[];
  fieldName: "area" | "price";
}
