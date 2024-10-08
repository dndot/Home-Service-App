"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";
import BusinessDiscription from "../_components/BusinessDiscription";

function BusinessDetail({ params }) {
  const { data, status } = useSession();
  const[business,setBusiness]=useState([]);

  useEffect(() => {
    params && getbusinessById();
  }, [params]);

  const getbusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then((resp) => {
      setBusiness(resp.businessList);
    });
  };

  useEffect(() => {
    chekUserAuth();
  }, []);

  const chekUserAuth = () => {
    if (status == "loading") {
      return <p>loading....</p>;
    }
    if (status == "unauthenticated") {
      signIn("descope");
    }
  };

  return status == "authenticated" &&business&& (
  <div className="py-8 md:py-20 px-10 md:px-36">
    <BusinessInfo business={business}/>

    <div className="flex grid-cols-3 mt-16 ">
        <div className="col-span-3 md:grid-span-2 order-last md:order-first">
            <BusinessDiscription business={business}/>
        </div>
        <div className="">
            <SuggestedBusinessList business={business}/>
        </div>
    </div>

  </div>)
}

export default BusinessDetail;
