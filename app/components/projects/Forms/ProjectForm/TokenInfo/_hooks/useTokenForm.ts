import { useState, useMemo, useCallback } from "react";
import { ProjectType } from "@/types";

const COST_ETH = 4000;

/**
 * Кастомный хук для управления инпутами TokenInfo
 * @param {ProjectType} initialData - Начальные данные для инициализации инпутов формы TokenInfo
 * @returns объект, содержащий состояние формы, функции для управления состоянием и результаты вычислений
 */

export const useTokenForm = (initialData?: ProjectType) => {
  const [formData, setFormData] = useState({
    tokenSupply: initialData?.tokenSupply || 0,
    maxTokenForSeed: initialData?.maxTokenForSeed || 0,
    minTokenForSeed: initialData?.minTokenForSeed || 0,
    tokenPrice: initialData?.tokenPrice || 0,
  });

  const [isFocused, setIsFocused] = useState({
    maxTokenForSeed: false,
    minTokenForSeed: false,
    tokenPrice: false,
  });

  const handleChange = useCallback(
    (field: string) => (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: Number(value),
      }));
    },
    []
  );

  const handleFocus = useCallback((inputName: string, isFocused: boolean) => {
    setIsFocused((prev) => ({
      ...prev,
      [inputName]: isFocused,
    }));
  }, []);

  // Мемоизированное значение, определяющее, являются ли значения формы валидными
  const isInvalid = useMemo(
    () => ({
      tokenSupply: formData.tokenSupply < 0,
      maxTokenForSeed:
        formData.maxTokenForSeed > formData.tokenSupply ||
        formData.maxTokenForSeed < 0,
      minTokenForSeed:
        formData.minTokenForSeed > formData.maxTokenForSeed ||
        formData.maxTokenForSeed < 0,
      tokenPrice: formData.tokenPrice < 0,
    }),
    [formData]
  );

  const convertToETH = useCallback(() => {
    return formData.tokenPrice / COST_ETH;
  }, [formData.tokenPrice]);

  const convertTokenToDollar = useCallback(
    (value: number) => {
      return value * formData.tokenPrice;
    },
    [formData.tokenPrice]
  );

  const tokenPriseResult = `${convertToETH()} ETH`;

  const maxTokenAmountResult = `$ ${convertTokenToDollar(
    formData.maxTokenForSeed
  )} / ${formData.maxTokenForSeed * convertToETH()} ETH`;

  const minTokenAmountResult = `$ ${convertTokenToDollar(
    formData.minTokenForSeed
  )} / ${formData.minTokenForSeed * convertToETH()} ETH`;

  return {
    formData,
    isFocused,
    handleChange,
    handleFocus,
    isInvalid,
    tokenPriseResult,
    maxTokenAmountResult,
    minTokenAmountResult,
  };
};
