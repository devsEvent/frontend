import { createContext } from "react";

export const EventsFilterContext = createContext({
  maxCost: 150000,
  MaxCostHandler: (e: any) => {},
  maxCostFilter: 0,
  locationFilter: "تهران",
  typeHandler: (e: any) => {},
  locationHandler: (location: string) => {},
  maxCostFilterHandler: (maxCost: number) => {},
});
