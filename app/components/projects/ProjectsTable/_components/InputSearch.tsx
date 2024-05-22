import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { useFilterSearch } from "../hook/useFilterSearch";

export const SearchInput = () => {
  const { filterValue, onSearchChange, onClear } = useFilterSearch();

  return (
    <Input
      isClearable
      className="w-full sm:max-w-[60%]"
      placeholder="Search by project name, token contract address or token symbol"
      startContent={<SearchIcon />}
      value={filterValue}
      onClear={() => onClear()}
      onValueChange={onSearchChange}
    />
  );
};
