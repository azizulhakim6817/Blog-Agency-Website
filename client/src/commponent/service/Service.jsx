import React, { useEffect } from "react";
import NoData from "./../layout/NoData";
import ServiceStore from "../../../store/ServiceStore";

const Service = () => {
  const { ServiceList, ServiceRequest } = ServiceStore(); // Destructure state and API call function

  useEffect(() => {
    ServiceRequest(); // Fetch the service list when the component mounts
  }, [ServiceRequest]);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Blog contains................................ */}
        <div className=" my-3">
          <div className=" mt-3">
            <div className=" d-flex flex-column align-items-center justify-content-center text-center">
              <h1 className=" colorText fw-medium ">Our Services</h1>
              <h3 className=" text-secondary fs-5 ">
                Your journey starts here
              </h3>
            </div>
          </div>
        </div>
        {/* api called blogs ................................................. */}
        {ServiceList && ServiceList.length > 0 ? (
          ServiceList.map((item, i) => (
            <div key={item._id || i} className="col-12 col-md-3 mb-4">
              <div className="card shadow-lg h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="card-text">{item.description.slice(0, 60)}</p>
                  <div className="mt-auto">
                    <button
                      type="button"
                      className="btn btn-link text-primary p-0"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 d-flex justify-content-center">
            <NoData />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
