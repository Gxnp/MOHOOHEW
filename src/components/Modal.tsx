import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedFood, setSelectedFood] = useState([] as string[]);
  const [showContent, setShowContent] = useState(false); // State to control content visibility with delay
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000); // Delay time in milliseconds (1000 ms = 1 second)
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isModalOpen]);

  const addSelectedFood = (food: string) => {
    if (selectedFood.includes(food)) {
      setSelectedFood((prevSelectedFood) =>
        prevSelectedFood.filter((item) => item !== food)
      );
      return;
    }
    setSelectedFood((prevSelectedFood) => [...prevSelectedFood, food]);
  };

  const checkIfFoodExist = (food: string) => {
    return selectedFood.includes(food);
  };

  const handleClick = () => {
    navigate('/random', {
      state: {
        data: selectedFood,
      },
    });
  };

  const isAnyFoodSelected = selectedFood.length > 0;

  return (
    <>
      {isModalOpen && showContent ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

          <div className="relative bg-white w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl p-4 sm:p-6 rounded-2xl backdrop-blur-lg drop-shadow-lg shadow-white flex flex-col items-center gap-4 mx-2 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
              เลือกอาหารที่คุณอยากกินได้เลย!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['ไก่', 'ทะเล', 'แป้ง', 'ของหวาน'].map((food) => (
                <div
                  key={food}
                  className={`flex flex-col gap-2 items-center cursor-pointer ${
                    isAnyFoodSelected && !checkIfFoodExist(food) ? 'blur-sm' : ''
                  }`}
                  onClick={() => addSelectedFood(food)}
                >
                  <img
                    src={`/${
                      food === 'ไก่'
                        ? 'bokchoy'
                        : food === 'ทะเล'
                        ? 'oyster'
                        : food === 'แป้ง'
                        ? 'pizza'
                        : 'icecream'
                    }.jpg`}
                    alt={food}
                    className="w-32 h-24 sm:w-40 sm:h-32 md:w-52 md:h-42 drop-shadow-lg rounded-lg"
                  />
                  <p className="text-center">อยากกิน {food}</p>
                  {checkIfFoodExist(food) && (
                    <img src="checkmark.png" alt="selected" className="w-6 h-6" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4 w-full">
              <button
                className="w-full sm:w-32 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                onClick={handleClick}
              >
                Enter Site!
              </button>
              <button
                className="w-full sm:w-32 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
