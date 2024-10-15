import { useEffect, useState } from "react";
import Enter from "./components/Enter";

function Home() {
  const [pageLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {pageLoading ? (
        <div className="flex flex-col h-screen w-full items-center justify-center overflow-hidden bg-black">
          <img
            src="itlogo.png"
            className="animate-spin w-1/2 h-auto max-w-full max-h-full"
            alt="Loading"
          />
        </div>
      ) : (
        <Enter />
      )}
    </>
  );
}

export default Home;
