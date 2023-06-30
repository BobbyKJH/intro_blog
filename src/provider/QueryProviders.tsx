"use client"
/** React */
import React, { useState } from 'react';
/** React-Query */
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props{
  children: React.ReactNode
}

const QueryProviders = (props: Props) => {
  const [client] = useState(() => new QueryClient())
  
  return (
    <QueryClientProvider client={client}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};

export default QueryProviders;