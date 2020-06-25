import React from "react";
import { PageBannerView } from "../../components/PageBannerView";
import { ABOUT_US } from "../../utils/constants";
import ABOUT_US_VIDEO_THUMB from "../../assets/img/about_us_video.png";
import "../../css/common.css";
import "../../css/about.css";

export const AboutUs = () => {
  return (
    <div>
      <PageBannerView pageType={ABOUT_US} />

      <div class="ml-5 mr-5 mt-3 p-5 ">
        <h4 class="text-primary d-block mx-auto w-75 font-weight-bold">
          Our Story
        </h4>
        <h5 class="font-weight text-secondary font-italic w-75 d-block mx-auto">
          Welcome to EStoreLine, your number one source for all product, ie:
          shoes, bags, dog treats. We're dedicated to giving you the very best
          of product, with a focus on three characteristics, ie: dependability,
          customer service and uniqueness. Founded in 2020 by Yuvraj Pandey,
          EStoreLine has come a long way from its beginnings in a starting
          location, ie: home office, toolshed, Houston, TX. When Yuvraj Pandey
          first started out, his passion for helping other parents be more
          eco-friendly, providing the best equipment for his fellow musicians
          drove him to do intense research, quit her day job, and gave him the
          impetus to turn hard work and inspiration into to a booming online
          store. We now serve customers all over place, ie: the US, the world,
          the Austin area, and are thrilled to be a part of the quirky,
          eco-friendly, fair trade wing of the fashion, baked goods, watches
          industry. We hope you enjoy our products as much as we enjoy offering
          them to you. If you have any questions or comments, please don't
          hesitate to contact us.
        </h5>
      </div>

      <div class="container-fluid d-flex align-items-center justify-content-center">
        <img
          class="mx-auto d-block"
          src={ABOUT_US_VIDEO_THUMB}
          style={{ width: "35%" }}
        ></img>
        <a
          class="about_video_icon img-fluid bg-primary text-center"
          href="#"
          data-toggle="modal"
          data-target="#modal1"
        >
          <i class="fas fa-play text-white"></i>
        </a>

        <div
          class="modal fade"
          id="modal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-body m-0 p-0">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/DWHB6nTyKDI"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ml-5 mr-5 mt-3 p-5 ">
        <h4 class="text-primary d-block mx-auto w-75 font-weight-bolder">
          Our Mission
        </h4>
        <h5 class="font-weight text-secondary font-italic w-75 d-block mx-auto">
          Money is a by-product of value. So, to thrive in the long run,
          businesses must remain focused on producing value. However, it’s easy
          to lose sight of value creation and get sidetracked by other things
          like profit margins, expanding your product catalogs, or competitors.
          To become a runaway success, businesses must have a purpose that
          unites and inspires people – “make more money” won’t do the trick. As
          the author Simon Sinek said, “People don’t buy what you do, they buy
          why you do it.” This is why organizations create mission and vision
          statements. These statements unify the organization and keep everyone
          focused on what really matters – because if you get these things
          right, the profits will follow.
        </h5>
      </div>

      {/* <div
        id="carouselExampleControls"
        class="carousel slide mt-5 pt-5 pb-5 bg-secondary container-fluid" 
        data-ride="carousel"
      >
        <div class="carousel-inner carousalView">
          <div class="carousel-item active">
            <img
              class="d-block mx-auto"
              src={ABOUT_US_VIDEO_THUMB}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block mx-auto"
              src={ABOUT_US_VIDEO_THUMB}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block mx-auto"
              src={ABOUT_US_VIDEO_THUMB}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}
    </div>
  );
};
