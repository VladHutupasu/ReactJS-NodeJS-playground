import { IFilter } from "./IFilter";

export interface IForm {
  fromCurrency: string;
  fromAmount: number;
  toCurrency: string;
  toAmount: number;
  filters: IFilter;
  valid: boolean;
}
