import React, { use } from "react";

const catagoryPromise = fetch("/categories.json").then((res) => res.json());

const Catgory = () => {
  console.log(catagoryPromise);
  const caTagory = use(catagoryPromise);
  return (
    <div>
      <h2 className="font-bold"> All Categories ({caTagory.length}) </h2>
    </div>
  );
};

export default Catgory;
