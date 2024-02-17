import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="mx-auto border border-black py-3 hover:border-white bg-[#bbbbbb]   hover:bg-[#555555]  hover:text-white test__Shadow"
      >
        <span className="py-2.5 mx-2 ">I want to join!</span>
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center lg:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-[#bbbbbb] drop-shadow-[7px_8px_0_black]  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-[#aa00aa] text-[#bbbbbb] pl-2 py-1">
                Wanna join us?
              </div>
              <div className="bg-[#bbbbbb] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <p>
                    Nobitex Labs is one of the very few research groups in Iran
                    who are working on world-class products in blockchain
                    technology!
                  </p>

                  <p className="mt-4">
                    Get yourself an interview by calculating the keccak256 hash
                    of this web page and sending it, along a copy of your CV, to
                    <u>labs [at] nobitex [dot] ir</u>!
                  </p>
                </div>
              </div>
              <div className="bg-[#bbbbbb] px-4 py-3 sm:px-6 flex flex-row-reverse">
                <button
                  type="button"
                  className="mb-3 p-0.5 bg-white hover:bg-black ml-3 hover:text-white drop-shadow-[7px_8px_0_black]"
                  onClick={toggleModal}
                >
                  close
                </button>
                <a
                  href="mailto:labs@nobitex.ir"
                  type="button"
                  className="mb-3 p-1 bg-white hover:bg-black hover:text-white drop-shadow-[7px_8px_0_black]"
                >
                  I'm in!
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
