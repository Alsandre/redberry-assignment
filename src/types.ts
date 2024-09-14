import { Control, FieldValues, UseControllerProps } from "react-hook-form";

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
  agent: IAgentData;
  created_at: string;
  description: string;
}

export interface INewEstateData extends IEstateDataGeneric {
  description: string;
  image: File | null;
  created_at: string;
}

export interface IAgentData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: File | null;
}

export interface IRegionData {
  id: number;
  name: string;
}
export interface ICityData {
  id: number;
  name: string;
  region_id: number;
  region: IRegionData;
}

export interface IFormInputProps extends UseControllerProps {
  label: string;
  required: boolean;
}

export interface IDealTypeRadioGroupProps extends FieldValues {
  value: string;
}

export interface IFormSection {
  control: Control;
}

export interface IControlledComponentProps extends FieldValues {
  control: Control;
  name: string;
  label: string;
}

export interface IControlledSelectProps extends IControlledComponentProps {
  options: { value: string; label: string }[];
}
