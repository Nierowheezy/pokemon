import React from "react";

const Pagination = ({ gotoNextPage, gotoPrevPage }: any) => {
  return (
    <div>
      {gotoPrevPage && <button className="load-more" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button className="load-more" onClick={gotoNextPage}>Next</button>}
    </div>
  );
}

export default Pagination
