"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

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
      <Hero />

    
      <CategoryList categoryList={categoryList} isLoading={isLoading} />

    </div>
  );
}
