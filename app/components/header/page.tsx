import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-slate-400 sticky top-0 z-10">
      <div className="row">
        <div className="col-md-4 pb-[16px]">
          <div className=" flex justify-center items-center">
            <Image
              src="https://uattfsec.truefinedge.com/image-pub/original.svg"
              alt="logo"
              width={200}
              height={100}
              priority
            />
          </div>
        </div>
        <div className="col-md-8 flex justify-center items-center">
          <ul className=" flex  gap-9 pt-[20px]">
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Shop</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
