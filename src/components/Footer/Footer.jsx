import React from "react";

const Footer = () => {
  return (
    <div className="space-y-10 bg-black rounded-xl py-10">
      <img className="mx-auto" src="/src/assets/logo-footer.png" alt="footer image" />
      <div className="flex justify-around text-left">
        <section>
          <h6 className="text-xl font-bold">About Us</h6>
          <p className="text-gray-400">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
        </section>
        <section>
          <h6 className="text-xl font-bold">Quick Links</h6>
          <div className="flex flex-col text-gray-400">
            <a className="link link-hover hover:text-lime-400">Home</a>
            <a className="link link-hover hover:text-lime-400">Services</a>
            <a className="link link-hover hover:text-lime-400">About</a>
            <a className="link link-hover hover:text-lime-400">Contact</a>
          </div>
        </section>
        <section>
          <h6 className="text-xl font-bold">Subscribe</h6>
          <div className="flex flex-col text-gray-400">
            <p>Subscribe to our newsletter for the latest updates.</p>
          </div>
        </section>
      </div>
      <hr className="opacity-30" />
      <h1>&copy;2026 Riad Ahmed All Right Reserved</h1>
    </div>
  );
};

export default Footer;
