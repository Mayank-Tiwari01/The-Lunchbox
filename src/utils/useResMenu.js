import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

export const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchApi = async () => {
    try {
      let data = await fetch(RES_MENU_API + resId);
      data = await data.json();
      setResInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [resId]); // Added resId as dependency to re-fetch if it changes

  return resInfo;
};

export default useResMenu;
