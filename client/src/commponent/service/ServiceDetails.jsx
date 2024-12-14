import React, { useEffect } from "react";
import ServiceStore from "../../../store/ServiceStore";
import { Link, useParams } from "react-router-dom";
import NoData from "../layout/NoData";
import { convertToLocalTime } from "../../../utility/TimeStamps";

const ServiceDetails = () => {
  const { ServiceDetails, ServiceList, ServiceDetailsRequest, ServiceRequest } =
    ServiceStore();

  const { serviceID } = useParams();

  useEffect(() => {
    (async () => {
      await ServiceDetailsRequest(serviceID);
      await ServiceRequest();
    })();
  }, [serviceID]);

  return (
    <div className="container my-5">
      {ServiceDetails?.map((item, i) => (
        <div
          key={i}
          className="col-12 col-sm-12 col-md-12 col-lg-10 mt-5 mb-5 mx-auto cardHover"
        >
          <div className=" text-center">
            <img
              className=" rounded w-100 mx-auto imageWH"
              src={item?.image}
              alt="Blog"
            />
            <div className="d-flex gap-3  my-3 text-secondary p-0 m-0">
              <p>{item?.user?.fullName || "Unknow user"}</p>
              <p>{convertToLocalTime(item?.createdAt)}</p>
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div className="md-5 w-75">
                <h4 className=" fw-semibold">{item?.name}</h4>
                <p className="mt-3 fs-5 text-secondary">{item?.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Blog List */}
      <h3 className="colorText  mb-4">More Services :</h3>
      <hr className=" w-100 pt-0 "></hr>
      <div className="row">
        {ServiceList && ServiceList.length > 0 ? (
          ServiceList.map((item, i) => (
            <div key={i} className="col-12 col-md-3 mb-4 p-2 mt-4 ">
              <div className="card shadow-lg cardHover">
                <img src={item.image} className="card-img-top " alt="blogs" />
                <div className="d-flex justify-content-between  text-secondary   px-3 pb-1 m-0 p-0">
                  <p className="CartDate m-0 p-0 fs-6 ">
                    {item?.user?.fullName || "Unknown user"}
                  </p>
                  <p className="CartDate m-0 p-0 fs-6">
                    {convertToLocalTime(item?.createdAt)}
                  </p>
                </div>
                <div className="card-body px-3  m-0 p-2">
                  <h5 className="card-title fw-bold">
                    {item.name.slice(0, 20)}
                  </h5>

                  <p className="card-text text-secondary">
                    {item.description.slice(0, 60)}
                  </p>
                  <div className="d-flex justify-content-start">
                    <Link
                      to={`/serviceDetails/${item?._id}`}
                      type="button"
                      className="btn cardBtn p-1 m-1"
                    >
                      Read more
                    </Link>
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

export default ServiceDetails;
