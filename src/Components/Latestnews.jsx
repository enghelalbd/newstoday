import React from "react";
import Marquee from "react-fast-marquee";

const Latestnews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 ">
      <p className="text-base-100 bg-secondary py-3 pt-2"> Latest </p>

      <Marquee className="flex gap-5 " pauseOnHover={true} speed={50}>
        <p className="font-bold">
          শরিফ ওসমান হাদি সংগঠন ইনকিলাব মঞ্চের মুখপাত্র
        </p>
        <p className="font-bold">শরিফ ওসমান হাদি মঞ্চের মুখপাত্র</p>
      </Marquee>
    </div>
  );
};

export default Latestnews;
