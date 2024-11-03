import { useEffect, useState } from "react";
import { IForm } from "../models/IForm";

const initialForm: IForm = {
  fromCurrency: "",
  fromAmount: 0,
  toCurrency: "",
  toAmount: 0,
  filters: {
    filter1: false,
    filter2: false,
    filter3: false,
  },
  valid: false,
};

export const useFormState = () => {
  const [form, setForm] = useState<IForm>(initialForm);

  useEffect(() => {
    const isFormValid =
      form.fromAmount > 0 && form.toAmount > 0 && form.fromCurrency.trim() !== "" && form.toCurrency.trim() !== "";
    setForm({ ...form, valid: isFormValid });
  }, [form.fromAmount, form.toAmount, form.fromCurrency, form.toCurrency]);

  return { form, setForm };
};
