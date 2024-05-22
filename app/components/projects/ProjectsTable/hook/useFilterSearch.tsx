import { useState, useCallback } from "react";

export const useFilterSearch = () => {
  const [filterValue, setFilterValue] = useState("");

  const onSearchChange = useCallback((value: string) => {
    setFilterValue(value);
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
  }, []);

  return { filterValue, onSearchChange, onClear };
};
