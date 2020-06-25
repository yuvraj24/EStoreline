import React from "react";
import { APP_NAME } from "../utils/constants.js";
import "../css/header.css";
import "../css/common.css";

export const FooterView = () => {
   return (
    <div class="parent bg-dark justify-content-between align-items-center navbar container-fluid">
      <h3 class="nav-brand ml-3 mt-2">{APP_NAME}</h3>
      <ul class="nav justify-content-center">
        <li class="nav-item ml-3 mb-auto mt-auto">
          <a class="nav-link" href="#">
            Home
          </a>
        </li>
        <li class="nav-item ml-3 mb-auto mt-auto">
          <a class="nav-link" href="#">
            Collection
          </a>
        </li>
        <li class="nav-item ml-3 mb-auto mt-auto">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item ml-3 mb-auto mt-auto">
          <a class="nav-link" href="#">
            Blog
          </a>
        </li>
        <li class="nav-item ml-3  mb-auto mt-auto">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item ml-3">
          <a
            href="#"
            class="nav-link nav-item badge badge-pill bg-white text-white p-3"
          >
            <i class="far fa-heart text-dark"></i>
            <p class="badgeCount badge badge-pill rounded-cricle text-white bg-primary p-1">
              00
            </p>
          </a>
        </li>
        <li class="nav-item ml-3">
          <a
            href="#"
            class="nav-link nav-item badge badge-pill bg-white text-white p-3"
          >
            <i class="far fa-heart text-dark"></i>
            <p class="badgeCount badge badge-pill rounded-cricle text-white bg-primary p-1">
              00
            </p>
          </a>
        </li>
        <li class="nav-item ml-2 mr-0">
          <button class="loginBtn btn btn-primary btn-lg m-3 font-weight-bold">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};
