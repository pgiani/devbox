/* eslint-disable */
import React, { useEffect, useState } from "react";
import foodList from "./foodList";

function swap(oldList, a, b) {
  const newList = oldList.slice();
  const temp = newList[b];
  newList[b] = newList[a];
  newList[a] = temp;
  return newList;
}

// Fix  Rendering error
// Refactor this component to be Class based

export default function SpecialOffers() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(foodList);
  }, []);

  function moveUp(index) {
    const newList = swap(list, index, index - 1);
    setList(newList);
  }

  function moveDown(index) {
    const newList = swap(list, index, index + 1);
    setList(newList);
  }

  return (
    <>
      {list.map(({ type, ...item }, i) => {
        return (
          <div key={type} className="product-list-item">
            <b>{type}:</b>
            <span>{JSON.stringify(item)}</span>
            <button onClick={() => moveUp(i)} disabled={i === 0}>
              Up
            </button>
            <button
              onClick={() => moveDown(i)}
              disabled={i === list.length - 1}
            >
              Down
            </button>
          </div>
        );
      })}
    </>
  );
}
