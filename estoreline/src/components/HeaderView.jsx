import React, { useState, useRef, useEffect } from "react";
import { APP_NAME } from "../utils/constants.js";
import "../css/header.css";
import "../css/common.css";

export const HeaderView = () => {
  const [isSticky, setSticky] = useState(true);
  const element = useRef(null);

  const handleScroll = () => {
    window.pageYOffset > element.current.getBoundingClientRect().bottom
      ? setSticky(false)
      : setSticky(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={element}
      class={
        isSticky
          ? "bg-white parent bg-light navbar navBar"
          : "bg-white parent bg-light navbar navBar floatingNav"
      }
    >
      <h3 class="nav-brand ml-3">{APP_NAME}</h3>
      <ul class="nav justify-content-center">
        <li class="nav-item ml-3">
          <a class="nav-link text-dark" href="/">
            Home
          </a>
        </li>
        <li class="nav-item ml-3">
          <div class="dropdown">
            <a
              class="nav-link text-dark dropdown-toggle"
              data-toggle="dropdown"
            >
              Collection
            </a>
            <div class="dropdown-menu">
              <a class="nav-link text-dark dropdown-item" href="/collection/1">
                Men
              </a>
              <a class="nav-link text-dark dropdown-item" href="/collection/2">
                Women
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link text-dark" href="/about">
            About
          </a>
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link text-dark" href="#">
            Blog
          </a>
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link text-dark" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item ml-3">
          <a
            href="#"
            class="nav-link nav-item badge badge-pill bg-white text-white p-2"
          >
            <i class="far fas fa-heart text-danger"></i>
            <p class="badgeCount badge badge-pill rounded-cricle text-white bg-primary p-2 align-middle">
              0
            </p>
          </a>
        </li>
        <li class="nav-item ml-3">
          <a
            href="#"
            class="nav-link nav-item badge badge-pill bg-white text-white p-2"
          >
            <i class="far fas fa-shopping-cart text-success"></i>
            <p class="badgeCount badge badge-pill rounded-cricle text-white bg-primary p-2 align-middle">
              0
            </p>
          </a>
        </li>
        <li class="nav-item ml-3 mr-3">
          <button class="loginBtn btn btn-primary btn-lg m-2 pl-4 pr-4">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};
