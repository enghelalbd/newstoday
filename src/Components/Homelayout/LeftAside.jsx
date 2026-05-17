import React, { Suspense } from "react";
import Catgory from "../Catgory";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Catgory></Catgory>
      </Suspense>
    </div>
  );
};

export default LeftAside;
