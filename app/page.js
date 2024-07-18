"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { Suspense, useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
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

  /**
   * Used to get all business list
   */

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList()
      .then((resp) => {
        // console.log(resp);
        setBusinessList(resp.businessLists);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Hero />

      <CategoryList categoryList={categoryList} isLoading={isLoading} />

      <BusinessList
        businessList={businessList}
        isLoading={isLoading}
        title={"Popular Business"}
      />
    </div>
  );
}
