import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container flex flex-col md:flex-row items-center gap-10 py-12">
        {/* Text Content */}
        <div className="banner flex-1">
          <div className="top mb-4">
            <h1 className="heading text-4xl font-bold mb-2">About Us</h1>
            <p className="text-lg text-gray-600">
              Celebrating South Indian flavours, committed to authenticity.
            </p>
          </div>
          <p className="mid text-base text-gray-700 leading-relaxed mb-6">
            At Anna Poorna Bhavan, we believe great food brings people together. Based in South India, we specialise in classic dishes from Tamil Nadu, Kerala, Karnataka and Andhra–Telangana — from tiffin items to hearty homely meals.
            <br />
            Whether you're craving crispy dosas, fluffy idlis or a full festive feast, our kitchen is dedicated to serving you the comforting flavours of the South.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium transition duration-300"
          >
            Explore Menu{" "}
            <span className="ml-2 text-xl">
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>

        {/* Image Section */}
        <div className="banner flex-1">
          <img
            src="/meals.png.jpg"
            alt="South Indian dishes served in our restaurant"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
