"use client"

/** redux */
import { Provider } from "react-redux"
import { store } from "@/store/store";

const Providers = ( props: { children: React.ReactNode } ) => {
  return <Provider store={store}>{props.children}</Provider>
}

export default Providers;