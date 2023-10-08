const CommonBtn = ({ buttonText }) => {
  return (
    <div>
      <a
        href="#_"
        class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-orange-800 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span class="text-xl absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          {buttonText}
        </span>
        <span class="relative invisible">{buttonText}</span>
      </a>
    </div>
  );
};

export default CommonBtn;
