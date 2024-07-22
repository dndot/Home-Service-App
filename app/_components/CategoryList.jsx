import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategorySideBar from "../(routes)/search/_components/CategorySideBar";

function CategoryList({ categoryList, isLoading }) {
  if (isLoading) {
    // Skeleton UI while loading
    return (
      <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
           // href={"/search/"+Category.name}
            key={index}
            className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 rounded-lg animate-pulse"
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for image */}
            <div className="w-20 h-4 bg-gray-300 rounded-md"></div>{" "}
            {/* Placeholder for text */}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categoryList?.map((Category, index) => (
        <Link
        href={"/search/"+Category.name}
          key={index}
          className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out"
        >
          <Image
            src={Category?.icon[0].url}
            alt="icon"
            width={40}
            height={40}
          />
          <h2 className="text-primary">{Category.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
