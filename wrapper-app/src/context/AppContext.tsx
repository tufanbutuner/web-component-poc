import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
  caseInfo: { data: undefined, isLoading: true, error: undefined },
});

export const AppContextProvider = ({ children }) => {
  const [caseInfo, setCaseInfo] = useState({
    data: undefined,
    isLoading: true,
    error: undefined,
  });

  useEffect(() => {
    const fetchCaseInfo = async () => {
      try {
        const res = await fetch("https://localhost:7104/api/case-info", {
          credentials: "include",
        });
        const data = await res.json();
        setCaseInfo({ data, isLoading: false, error: undefined });
      } catch (error) {
        setCaseInfo({ data: undefined, isLoading: false, error: undefined });
      }
    };

    fetchCaseInfo();
  }, []);

  console.log("AppContext caseInfo:", caseInfo);

  return (
    <AppContext.Provider value={{ caseInfo }}>{children}</AppContext.Provider>
  );
};
