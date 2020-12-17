import React from "react";


export function TodoComponent(props) {
  // return React.createElement("div", {}, [
  //   React.createElement("input", {
  //     type: "checkbox",
  //     checked: props.completed
  //   }),
  //   props.title
  // ]);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={e => props.onCompletedChange(e.target.checked)}
        />
        {props.title}
      </label>
    </div>
  );
}
