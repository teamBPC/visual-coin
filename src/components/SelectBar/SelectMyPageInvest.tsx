import { useState } from "react";
import { optionCategory, optionExchange } from "../../datalist";
import {
  Select,
  SelectWrapperUl,
  SelectWrapperLi,
  Option,
  FilterBtn,
  MaterialIcon,
} from "./commonStyled";

const renderFilterButton = (
  label: string,
  filter: number,
  handleToggleFn: { (): void }
) => {
  return (
    <SelectWrapperLi>
      <FilterBtn onClick={() => handleToggleFn()} filterNum={filter}>
        <span>{label}</span>
        {filter === 1 ? (
          <MaterialIcon className="material-symbols-outlined">
            arrow_drop_down
          </MaterialIcon>
        ) : filter === 2 ? (
          <MaterialIcon className="material-symbols-outlined">
            arrow_drop_up
          </MaterialIcon>
        ) : (
          <></>
        )}
      </FilterBtn>
    </SelectWrapperLi>
  );
};
function SelectMyPageInvest() {
  const [nameFilter, setNameFilter] = useState(0);
  const [changeFilter, setChangeFilter] = useState(0);

  const handleToggleNameFilter = () => {
    setNameFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  const handleToggleChangeFilter = () => {
    setChangeFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <SelectWrapperUl>
      <SelectWrapperLi>
        <Select defaultValue={optionCategory[0].value}>
          {optionCategory.map((list) => (
            <Option key={list.value} value={list.label}>
              {list.label}
            </Option>
          ))}
        </Select>
      </SelectWrapperLi>
      <SelectWrapperLi>
        <Select defaultValue={optionExchange[0].value}>
          {optionExchange.map((list) => (
            <Option key={list.value} value={list.label}>
              {list.label}
            </Option>
          ))}
        </Select>
      </SelectWrapperLi>
      {renderFilterButton("name", nameFilter, handleToggleNameFilter)}
      {renderFilterButton("change", changeFilter, handleToggleChangeFilter)}
    </SelectWrapperUl>
  );
}

export default SelectMyPageInvest;
