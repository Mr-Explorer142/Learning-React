import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 fw-bold fs-2">
      <div className="spinner-border" role="status"></div>
      <span className="ms-3 fw-bold">Loading Posts...</span>
    </div>
  );
};

export default LoadingSpinner;
