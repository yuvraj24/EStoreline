import React from "react";
import { HOME, CONTACT_US, ABOUT_US } from "../utils/constants";
import ContactUs from "../assets/img/banner/contact.jpg";
import AboutUs from "../assets/img/banner/about.jpg";
import "../css/common.css";

export const PageBannerView = ({ pageType }) => {
  let image = "";
  let pageName = "";

  switch (pageType) {
    case HOME:
      break;

    case CONTACT_US:
      image = ContactUs;
      pageName = CONTACT_US
      break;

    case ABOUT_US:
      image = AboutUs;
      pageName = ABOUT_US
      break;

    default:
      break;
  }

  return (
    <div class="parent banner jumbotron-fluid align-items-center">
      <h1 class="overlay container-fluid align-middle text-white mx-auto">
        {pageName}
      </h1>
      <img class="parent banner container-fluid" src={image} alt={ContactUs} />
    </div>
  );
};
