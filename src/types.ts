import { FieldValues, UseControllerProps } from "react-hook-form";

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
