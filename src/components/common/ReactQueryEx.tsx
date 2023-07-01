"use client"

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getSandwich} from "@/api/getData";

const ReactQueryEx = () => {
  const { data, isLoading } = useQuery(["sandwich"], getSandwich)
  const { data: sandwich, isLoading: loading } = useQuery(["sandwich111"], getSandwich)
  console.log(isLoading)
  return (
    <div>
      {data?.map((item: any) => <div>{item.id}</div>)}
      {sandwich?.map((item: any) => <div>{item.name}</div>)}
    </div>
  );
};

export default ReactQueryEx;