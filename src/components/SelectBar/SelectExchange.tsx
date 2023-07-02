import { useState } from "react";
import { optionCoins, optionTimer } from "../../datalist";
import {
  Select,
  SelectWrapperUl,
  SelectWrapperLi,
  Option,
  MaterialIcon,
  FilterBtn,
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
function SelectExchange() {
  const [subscriptionListFilter, setSubscriptionListFilter] = useState(0);
  const [nameFilter, setNameFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);

  const handleToggleSubscriptionFilter = () => {
    setSubscriptionListFilter((choices) => (choices === 1 ? 0 : choices + 1));
  };
  const handleToggleNameFilter = () => {
    setNameFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  const handleTogglePriceFilter = () => {
    setPriceFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <SelectWrapperUl>
      <SelectWrapperLi>
        <Select defaultValue={optionCoins[0].value}>
          {optionCoins.map((list) => (
            <Option key={list.value} value={list.label}>
              {list.label}
            </Option>
          ))}
        </Select>
      </SelectWrapperLi>
      <SelectWrapperLi>
        <Select defaultValue={optionTimer[7].value}>
          {optionTimer.map((list) => (
            <Option key={list.value} value={list.label}>
              {list.label}
            </Option>
          ))}
        </Select>
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterBtn
          onClick={() => handleToggleSubscriptionFilter()}
          filterNum={subscriptionListFilter}
        >
          <span>subscription List</span>
        </FilterBtn>
      </SelectWrapperLi>
      {renderFilterButton("name", nameFilter, handleToggleNameFilter)}
      {renderFilterButton("price", priceFilter, handleTogglePriceFilter)}
    </SelectWrapperUl>
  );
}

export default SelectExchange;
