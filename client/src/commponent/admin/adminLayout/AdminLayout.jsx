import AdminHeader from "./AdminHeader";

const AdminLayout = (props) => {
  return (
    <div className=" d-lg-flex d-md-block d-sm-block gap-3">
      <div className="col-lg-2 col-md-12 col-sm-12 col-12 fixed-top navFixed ">
        <AdminHeader />
      </div>
      <div className=" col-lg-10 col-md-12 col-sm-12 col-12 ms-lg-auto">
        {props.children}
      </div>
    </div>
  );
};

export default AdminLayout;
