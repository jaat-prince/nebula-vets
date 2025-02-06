import React from "react";

function Button({ btnclass, btn }) {
  return (
    <>
      <button
        className={`text-base md:text-lg font-medium text-[var(--Brown,#494336)] uppercase leading-[137.222%] px-[38px] py-3 bg-var rounded-[27.917px] transition-all duration-500 ease-in-out ${btnclass} ro`}
      >
        {btn}
      </button>
    </>
  );
}

export default Button;
