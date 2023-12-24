import React from "react";
import "./style.css";
import { Input } from "antd";
import Button from "antd/es/button";

const FormJob = () => {
  return (
    <div className="formjob-wrapper">
      <div className="form-job">
        <div className="form-field">
          <img
            style={{ width: "20px" }}
            src="/images/search.svg"
            alt="Search"
          />
          <Input className="input-custom" placeholder="Job title or keyword" />
        </div>
        <div className="form-field">
          <img
            style={{ width: "20px" }}
            src="/images/location.svg"
            alt="Search"
          />
          <Input className="input-custom" placeholder="Job title or keyword" />
        </div>
        <Button className="button-search" type="primary">
          Search my Job
        </Button>
      </div>
      <div className="form-job-description">Popular : UI Designer, UX Researcher, Android, Admin</div>
    </div>
  );
};

export default FormJob;
