import React from "react";
import {StoreType} from "./Redux/store";
export const StoreContext = React.createContext<StoreType | null>(null)