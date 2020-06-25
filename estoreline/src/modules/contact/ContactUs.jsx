import React from "react";
import { PageBannerView } from "../../components/PageBannerView";
import { CONTACT_US } from "../../utils/constants";
import "../../css/common.css";

export default function ContactUs() {
  return (
    <div class="container-fluid pl-0 pr-0 ml-0">
      {/* <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav> */}
      <PageBannerView pageType={CONTACT_US} />
      <div class="row pl-5 pr-5">
        <div class="col m-5">
          <h4 class="text-black mt-5">Leave a Comment</h4>
          <form action="/" class="cols-xl-6 mt-5" method="post">
            <div class="row">
              <input
                class="col inputBorder border ml-3 textSize14"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                class="col ml-4 inputBorder border rounded mr-3 textSize14"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              name="message"
              id="message"
              class="container-fluid mt-4 textArea border rounded textSize14"
              rows="8"
              placeholder="Type your message here"
            ></textarea>
            <button
              type="button"
              class="bg-primary text-white mt-4 pl-5 pr-5 pt-2 pb-2 font-weight-bold rounded textSize14"
            >
              SEND
            </button>
          </form>
        </div>
        <div class="col p-5 m-5 justify-content-between align-items-center mx-auto">
          <div class="row pl-5 mt-5">
            <div class="col-1 mt-2"> 
                <i class="fas fa-map-marker-alt fa-xl contact_us_icons"></i> 
            </div>
            <span class="col-11">
              <label class="textSize14 font-weight-bold ml-0 mt-0">
                Address
              </label>
              <br />
              <label class="ml-0 text-secondary">
                EStoreline 8th floor, 379 Hudson St, New York, NY 10018 US
              </label>
            </span>
          </div>

          <div class="row pl-5 mt-4">
            <div class="col-1 mt-2"> 
              <i class="fas fa-phone-alt fa-2x contact_us_icons"></i>
            </div>
            <span class="col-11">
              <label class="textSize14 font-weight-bold ml-0 mt-0">
                Lets Talk
              </label>
              <br />
              <label class="ml-0 text-secondary">+1 800 1236879</label>
            </span>
          </div>

          <div class="row pl-5 mt-4">
            <div class="col-1 mt-2">
              <i class="fas fa-envelope fa-2x contact_us_icons"></i>
            </div>
            <span class="col-11">
              <label class="textSize14 font-weight-bold ml-0 mt-0">
                Sale Support
              </label>
              <br />
              <label class="ml-0 text-secondary">contact@example.com</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
