import React, { useState } from "react";
import ItemButton from "./components/ItemButton";
import ItemInfo from "./components/ItemInfo";
import ItemQuantity from "./components/ItemQuantity";
import ItemTotal from "./components/ItemTotal";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <ItemInfo>
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </ItemInfo>
      <ItemQuantity>
        <ItemButton disabled={total === 0} onClick={handleRemoveClick}>
          -
        </ItemButton>
        <ItemTotal className="item-total">{total ? total : ""}</ItemTotal>
        <ItemButton onClick={handleAddClick}>+</ItemButton>
      </ItemQuantity>
    </div>
  );
}
