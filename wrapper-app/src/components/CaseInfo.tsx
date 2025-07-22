import { useCaseInfo } from "../hooks/useCaseInfo";

export const CaseInfoComponent = () => {
  const { data, isLoading, error } = useCaseInfo();

  if (isLoading) return <div>Loading case info...</div>;
  if (error) return <div>Error loading case info.</div>;

  return (
    <pre>{data ? JSON.stringify(data, null, 2) : "No data available"}</pre>
  );
};
