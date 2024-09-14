import { Control, FieldValues, UseControllerProps } from "react-hook-form";

export interface IEstateData {
  address: string;
  image: File | null;
  region_id: number;
  description: string;
  city_id: number;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  isRental: number;
  agent_id: number;
}

export interface IAgentData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: File | null;
}

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  onChange: () => void;
  onBlur: () => void;
  name: string;
  type: string;
  label: string;
  message: string;
  isValid: boolean;
  isError: boolean;
  required: boolean;
}

export interface IFormInputProps extends UseControllerProps {
  label: string;
  required: boolean;
}

export interface IUseFormType extends FieldValues {
  address: string;
  image: File | null;
  region_id: number;
  description: string;
  city_id: number;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  isRental: number;
  agent_id: number;
}

export interface IDealTypeRadioGroupProps extends FieldValues {
  value: string;
}

export interface IRegionSelectGroupProps extends UseControllerProps {
  value: string;
}

export interface IFormSection {
  control: Control;
}
