"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory()
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Hero />

      <CategoryList />
    </div>
  );
}
