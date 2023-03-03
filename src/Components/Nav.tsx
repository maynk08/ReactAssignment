import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
          className="fluimg-thumbnail"
          alt="logo-icon"
          height="50"
          width="30"
        />

        <strong>Quick Shop</strong>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline ml-4 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item active mr-5">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
          </ul>

          <ButtonGroup variant="outline" spacing="6">
            <Button
              leftIcon={<FaShoppingCart size={20} />}
              variant="link"
              colorScheme="black"
            >
              Cart
            </Button>
            <Button
              leftIcon={<FaUser size={20} />}
              variant="link"
              colorScheme="black"
            >
              Sign up
            </Button>
          </ButtonGroup>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
