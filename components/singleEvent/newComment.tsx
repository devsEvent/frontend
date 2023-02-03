import React from "react";

function NewComment() {
  return (
    <form className="relative mt-8 border rounded-xl w-full ">
      <textarea
        placeholder="نظر خودتون رو در مورد این برنامه بنویسید ..."
        className="p-4 w-full min-h-[15rem] max-h-[25rem] text-sm md:text-base text-dim-dark outline-none"
      />

      <button className="py-2 md:py-3 px-6 md:px-8 absolute bottom-5 left-4 text-sm lg:text-base bg-primary text-white rounded-xl outline">
        ثبت نظر
      </button>
    </form>
  );
}

export default NewComment;
