"use client"
import {Hydrate as HydrateOnClient, HydrateProps} from "@tanstack/react-query";


const ReactQueryHydrate = (props: HydrateProps) => {
  return <HydrateOnClient {...props} />
};

export default ReactQueryHydrate;
