import React, { Suspense } from "react";

import Categories from "./Categories";
const LeftAsaide = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAsaide;
 