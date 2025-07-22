import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useCaseInfo = () => {
  const { caseInfo } = useContext(AppContext);

  return caseInfo;
};
