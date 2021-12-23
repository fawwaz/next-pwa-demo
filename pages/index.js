import axios from "axios";
import React, { useState } from "react";

const IndexPage = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setResult(null);
    axios
      .get("https://60a3771d7c6e8b0017e26fe5.mockapi.io/todo")
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <button onClick={handleRefresh}>Refresh api</button>
      {isLoading ? "Loading ..." : <pre>{JSON.stringify(result, null, 2)}</pre>}
    </>
  );
};

export default IndexPage;
