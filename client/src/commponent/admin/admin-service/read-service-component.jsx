import ServiceStore from "../../../../store/ServiceStore.js";
import { useEffect } from "react";
import NoData from "../../layout/NoData.jsx";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const ReadServiceComponent = () => {
  const { ServiceList, ServiceRequest, DeleteServiceRequest } = ServiceStore();

  useEffect(() => {
    (async () => {
      await ServiceRequest();
    })();
  }, []);

  const DeleteButton = async (id) => {
    await DeleteServiceRequest(id);
    await ServiceRequest();
    toast.success("Service Deleted");
  };

  return (
    <div className="container mt-4 mb-5">
        <div className="text-center mb-4">
        <h1 className="colorText fw-medium">Our Services </h1>
      </div>
      <div className="d-flex gap-3 mb-4">
        <Link to={`/dashboard`} className="btn btn-secondary">
          Dashboard
        </Link>
        <Link to={`/CreateServicePage`} className="btn btn-primary">
          Create Service List
        </Link>
      </div>

      

      {/* Table for Services */}
      <div className="table-responsive">
        {ServiceList && ServiceList?.length > 0 ? (
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ServiceList?.map((item, i) => (
                <tr key={item?._id}>
                  <td>{i + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.description?.slice(0, 60)}...</td>
                  <td>
                    <img
                      src={item?.image}
                      alt={item?.name}
                      style={{ maxWidth: "100px" }}
                      className="img-thumbnail"
                    />
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        to={`/UpdateServicePage/${item?._id}`}
                        className="btn text-info"
                      >
                        <BiEdit className=" fs-3" />
                      </Link>
                      <button
                        className="btn text-danger"
                        onClick={() => DeleteButton(item?._id)}
                      >
                        <MdDeleteForever className=" fs-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <NoData />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadServiceComponent;
