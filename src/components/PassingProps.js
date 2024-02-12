import React from "react";

export function ParentComponent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent name="ayush" age={20} />
    </div>
  );
}

export function ChildComponent(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

