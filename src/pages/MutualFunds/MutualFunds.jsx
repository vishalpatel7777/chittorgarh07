import { useEffect } from "react";

export default function MutualFunds() {
  useEffect(() => {
    window.location.replace("https://mf.chittorgarh.com/");
  }, []);

  return null;
}
