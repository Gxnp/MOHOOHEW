import { useState } from "react";
import Modal from "./Modal";

function Enter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateSharedState = () => {
    setIsOpen(!isOpen);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex relative items-center justify-center w-full h-screen max-h-screen overflow-hidden bg-black font-[Prompt]">
      <div className="w-full h-20 bg-black absolute z-30 top-0 black-drop"></div>
      <div className="w-full h-20 bg-black absolute z-30 bottom-0 black-up"></div>
      <div className="flex flex-col relative items-center py-20 z-50 w-full h-screen -top-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold title skew-x-3 sm:skew-x-4 md:skew-x-5 lg:skew-x-6 drop-shadow-xl">
          MOHO HEW
        </h1>

        <h1 className="absolute z-20 text-white font-semibold bg-yellow-500 translate-y-[-10px] translate-x-[460px] p-2 aboutus w-full max-w-44 -skew-x-6">
          <p className="text-xs">SPONSORED BY.</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <img
              src="IT_logo.jpg"
              alt="it"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="lactasoy_logo.png"
              alt="lactasoy"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="borntoddev.jpg"
              alt="borntodev"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="swf.jpg"
              alt="swf"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="useful.png"
              alt="usefulfood"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="advice.png"
              alt="advice"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
          </div>
        </h1>
      </div>

      <img
        src="/background.png"
        alt="bg"
        className="absolute w-full h-screen inset-0 object-cover z-20 pointer-events-none"
      />

      <button
        className=" h-[20rem] w-[15rem] text-transparent absolute z-50 translate-x-[-200px]"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setIsOpen(!isOpen);
        }}
      >
        Invisible
      </button>

      <img
        src="/door_new.png"
        alt="door"
        className={`absolute w-full h-screen inset-0 object-cover z-10 transition-all duration-1000 scale-[1.01] translate-x-[3px] translate-y-[6px] ${
          isOpen ? "[transform:_perspective(100px)_rotateY(-90deg)]" : ""
        }`}
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={updateSharedState} />
    </div>
  );
}

export default Enter;
