import { useState } from "react";
import useGetLpList from "../hooks/queries/useGetLpList";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const { data, isPending, isError } = useGetLpList({
    search,
    limit: 30,
  });

  if (isPending) {
    return <div className="mt-20">Loading...</div>;
  }
    
  if (isError) {
    return <div className="mt-20">Error!</div>;
  }
    
  return (
    <div className="mt-10">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {data?.map((lp) => (
        <h1>{lp.title}</h1>
      ))}
    </div>
  );
};

export default HomePage;
