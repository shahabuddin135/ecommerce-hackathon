import React from "react";

const Pagination = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-4">
      {/* Page 1 - Active */}
      <button className="w-[60px] h-[60px] flex items-center justify-center bg-[#F9F1E7] text-black font-medium rounded-lg hover:bg-gray-200 focus:bg-[#B88A39] focus:text-white">
        1
      </button>

      {/* Page 2 */}
      <button className="w-[60px] h-[60px] flex items-center justify-center bg-[#F9F1E7] text-black font-medium rounded-lg hover:bg-gray-200 focus:bg-[#B88A39] focus:text-white">
        2
      </button>

      {/* Page 3 */}
      <button className="w-[60px] h-[60px] flex items-center justify-center bg-[#F9F1E7] text-black font-medium rounded-lg hover:bg-gray-200 focus:bg-[#B88A39] focus:text-white">
        3
      </button>

      {/* Next Button */}
      <button className="w-auto px-4 h-[60px] flex items-center justify-center bg-[#F9F1E7] text-black font-medium rounded-lg hover:bg-gray-200 focus:bg-[#B88A39] focus:text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
