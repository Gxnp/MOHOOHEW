import React from "react";

interface resultProp {
  title: string;
  img: string;
  catagory?: string[];
  mixed: string[];
  detail?: string;
}

function RandomModal({
  result,
  isModalOpen,
  setIsModalOpen,
}: {
  result: resultProp;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-[Prompt]">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

          <div className="relative bg-white w-1/2 p-6 rounded-2xl bg-opacity-50 backdrop-blur drop-shadow-lg shadow-white flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold mb-4">
              เอาล่ะ งั้นวันนี้คุณควรกินสิ่งนี้!
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <img src={result.img} alt="" className="w-1/2 h-1/2 rounded-lg drop-shadow-lg" />
            </div>
            <button
              className="w-32 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RandomModal;
