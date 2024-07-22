"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CategorySideBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

  /**
   * Used to get all Categorie List
   */

  const getCategoryList = () => {
    GlobalApi.getCategory()
      .then((resp) => {
        setCategoryList(resp.categories);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link href={"/search/"+category.name}
            key={index}
            className="flex gap-2 p-2 border rounded-lg mb-3 md:mr-10 cursor-pointer
            hover:bg-purple-50
            hover:shadow-md
            items-center
            hover:text-primary hover:border-primary"
          >
            <Image
              src={category?.icon[0].url}
              alt="icon"
              width={30}
              height={30}
            />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySideBar;
