import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const listHeader = ["Login", "signup", "Home"];

    return (
    <div className="bg-yellow-600 py-4">
        <div className="container mx-auto">
            <a href="#">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
                <span>Aluve Calendar</span>
            </a>
              {listHeader.map((item) => {
                return (
                  <div className="float-right">
                    <Link to={`/${item}`} key={item}>
                      <div className="px-4 float-right">
                        <p className="text-white capitalize float-right">{item}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
    </div>
  );
};

export default Header;