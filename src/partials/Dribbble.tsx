import * as React from "react";

const Dribbble = () => {
  return (
    <div className="grid sm:grid-cols-6 sm:grid-rows-8 sm:grid-row gap-5 mt-6">
      <div className="relative sm:col-start-1 sm:col-end-5 sm:row-start-1 sm:row-end-4 pb-56 sm:pb-64 lg:pb-112">
        <img className="absolute object-cover w-full h-full" src="https://images.unsplash.com/photo-1563288181-3584b59503f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEysmd9&auto=format" />
      </div>
      <div className="relative sm:col-start-5 sm:col-end-7 sm:row-start-1 sm:row-end-2 pb-56 sm:pb-32 lg:pb-56">
        <img className="absolute object-cover w-full h-full" src="https://images.unsplash.com/photo-1563288181-3584b59503f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEysmd9&auto=format" />
      </div>
      <div className="relative sm:col-start-5 sm:col-end-7 sm:row-start-2 sm:row-end-4 pb-56 sm:pb-32 lg:pb-56">
        <img className="absolute object-cover w-full h-full" src="https://images.unsplash.com/photo-1563288181-3584b59503f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEysmd9&auto=format" />
      </div>
      <div className="hidden relative sm:block sm:col-start-1 sm:col-end-4 sm:row-start-4 sm:row-end-5 pb-56 sm:pb-36 lg:pb-56">
        <img className="absolute object-cover w-full h-full" src="https://images.unsplash.com/photo-1563288181-3584b59503f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEysmd9&auto=format" />
      </div>
      <div className="hidden relative sm:block sm:col-start-4 sm:col-end-7 sm:row-start-4 sm:row-end-5 pb-56 sm:pb-36 lg:pb-56">
        <img className="absolute object-cover w-full h-full" src="https://images.unsplash.com/photo-1563288181-3584b59503f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format" />
      </div>
    </div>
  );
};

export default Dribbble;
