import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RandomModal from "../components/RandomModal";
import foods from "../assets/foods.json";

interface resultProp {
  title: string;
  img: string;
  catagory?: string[];
  mixed: string[];
  detail?: string;
}

function Random() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalResult, setFinalResult] = useState([] as resultProp[]);
  const [mixedFilter, setMixedFilter] = useState([] as string[]);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  console.log("Passed Data: ", data);

  if (!data) {
    navigate("/");
  }

  const updateSharedState = () => {
    setIsModalOpen(!isModalOpen);
  };

  // let all_mixed = ["ไก่", "ทะเล", "แป้ง", "ของหวาน"];
  // const mixed_filter: string[] = [];
  // let result: resultProp[] = [];

  const cal = () => {
    const mixed_filtered = foods.filter((item) =>
      item.mixed.some((mixed) => mixedFilter.includes(mixed))
    );
    // const countries_filtered = mixed_filtered.filter(e => e.category.some((mixed) => mixed_filter.includes(mixed)))
    // console.log(countries_filtered);
    setFinalResult(mixed_filtered);
    console.log("Result: ", finalResult);
    console.log("Mixed Filter: ", mixed_filtered);
  };

  useEffect(() => {
    data.forEach((wanted: string) => {
      if (!mixedFilter.find((e) => e === wanted)) {
        setMixedFilter([...mixedFilter, wanted]);
      } else {
        const index = mixedFilter.findIndex((e) => e === wanted);
        setMixedFilter(mixedFilter.filter((_, i) => i !== index));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    cal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mixedFilter]); // Added mixedFilter as a dependency

  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center overflow-auto font-[Prompt]">
      <button
        onClick={() => navigate("/")}
        className="absolute bg-red-500 rounded-2xl w-52 h-12 z-50 top-10 left-10 backdrop-blur-lg shadow-lg border-2 text-white font-bold text-2xl"
      >
        GO BACK
      </button>
      <img
        src="/bg-2.png"
        alt="background of page 2"
        className="fixed top-0 left-0 w-full h-full object-cover hidden custom-md:block"
      />
      <img
        src="/bg_3.png"
        alt="background 3"
        className="fixed top-0 left-0 w-full h-full object-cover custom-md:hidden"
      />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center group">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="relative z-40"
          >
            <img
              src="/box.png"
              alt="Box1"
              className="ml-12 mt-32 cursor-pointer drop-shadow-lg overflow-x-hidden z-50 custom-md:block custom-md:mt-44"
            />
          </button>
          <img
            src="/light.png"
            alt="light"
            className="absolute mb-60 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 z-20 hidden group-hover:block"
          />
        </div>
        
      </div>
      <RandomModal
        result={finalResult[Math.floor(Math.random() * finalResult.length)]}
        isModalOpen={isModalOpen}
        setIsModalOpen={updateSharedState}
      />
    </div>
  );
}

export default Random;
