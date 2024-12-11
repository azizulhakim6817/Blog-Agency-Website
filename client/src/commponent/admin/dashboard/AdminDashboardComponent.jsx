import React, { useEffect } from "react";
import { FaServicestack } from "react-icons/fa";
import { RiBloggerLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import TeamStore from "../../../../store/AboutStore";
import ServiceStore from "../../../../store/ServiceStore";
import BlogStore from "./../../../../store/BlogStore";

const AdminDashboardComponent = () => {
  const { TeamsList, TeamsListRequest } = TeamStore();
  const { ServiceList, ServiceRequest } = ServiceStore();
  const { BlogList, BlogListRequest } = BlogStore();

  console.log();

  useEffect(() => {
    (async () => {
      await ServiceRequest();
      await TeamsListRequest();
      await BlogListRequest();
    })();
  }, []);

  return (
    <>
      <div className=" container pt-2 mt-2">
        <div className=" row ">
          <div className=" col-lg-4 ">
            <div className=" bg-white shadow rounded p-2">
              <div>
                <FaServicestack className=" fs-4 " />
              </div>
              <div className=" fs-4 text-end">{ServiceList?.length}</div>
            </div>
          </div>
          <div className=" col-lg-4">
            <div className=" bg-white shadow rounded p-2">
              <div>
                <RiBloggerLine className=" fs-4" />
              </div>
              <div className=" fs-4 text-end">{TeamsList?.length}</div>
            </div>
          </div>
          <div className=" col-lg-4 ">
            <div className=" bg-white shadow rounded p-2">
              <div>
                <FaUsers className=" fs-4" />
              </div>
              <div className=" fs-4 text-end">{BlogList?.length}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardComponent;
