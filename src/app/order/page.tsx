//
import React from "react";
import Link from "next/link";

const OrderPage: React.FC = () => {
  return (
    <div className="flex">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe66hovqQKy2Masteq8khTYPfcndJCi2Rh5MlgUQHchly0S4Q/viewform?fbclid=IwAR2u5buaRoCzGW3JDnxesKFWYHhVD4XlKVLOlcqwa9WeyoQLOFqZ9cPjEuI/viewform?embedded=true"
        frameBorder="0"
        className="lg:w-[700px] w-screen h-screen"
      >
        Loading…
      </iframe>
    </div>
  );
};
export default OrderPage;
