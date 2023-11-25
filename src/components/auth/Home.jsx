import React from "react";
import Button from "../../common/Button";
import iphone from "../../assets/svgs/iPhone 12 Pro (Wooden Hands).svg";
import { Link } from "react-router-dom";
import { RouteEnum } from "../../constant/RouteConstant";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2">
      <div className="">
        <img src={iphone} alt="iphone" className="mx-auto" />
      </div>

      <div className="mr-5 -mt-60 py-20 space-y-3 bg-Body md:mr-20 md:-mt-0 md:py-0">
        <h1 className=" text-4xl font-bold md:text-6xl">
          Let’s Take Care of You
        </h1>
        <h4>
          Your one-stop solution for getting symptom-based medical advice and
          diagnosis.
        </h4>
        <Button>
          <Link to={RouteEnum.SIGNUP}>Create Account</Link>
        </Button>
        <h6 className="text-center">
          Don’t have an account?{" "}
          <span className=" text-Primary_main hover:cursor-pointer hover:underline">
            <Link to={RouteEnum.SIGNIN}>Login</Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Home;
