import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="info-section1">
        <h2 >Care for Your Pets</h2>
        <div className="pet-care-container">
          <div className="pet-care-text">
            <p>Our pets are our family. They give us love, loyalty, and comfort—it's our job to return the favor.</p>
            <p>Good nutrition, playtime, vet visits, and affection are pillars of a pet’s happy life.</p>
            <p>Each animal has different needs. Dogs need walks, cats love cozy spaces, and parrots need mental stimulation.</p>
            <p>Building trust with your pet strengthens the bond and leads to a more fulfilling life—for both of you.</p>
            <p>At Pawtopia, we’re passionate about promoting responsible and joyful pet parenting through quality products and expert advice.</p>
          </div>

          <div className="pet-care-images">
            <img src={require("../assets/dog1.jpeg")} alt="Happy Dog" />
            <img src={require("../assets/cat1.jpeg")} alt="Cute Cat" />
            <img src={require("../assets/parrot1.webp")} alt="Colorful Parrot" />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="info-section2">
        <h2>About Us</h2>
        <div className="info-box">
          <p>
            Pawtopia is more than just a store — it’s a community of pet lovers. We aim to bring the best food, toys, accessories, and care solutions to every pet home.
            Our products are hand-picked and our service is driven by compassion and trust. Join us in making the world a better place for our furry, feathered, and finned friends.
          </p>
        </div>
      </section>

    
      <section id="contact" className="info-section3">
        <h2>Contact Us</h2>
        <div className="info-box">
          <p>📧 Email: pawtopia@gmail.com</p>
          <p>📞 Phone: +91 9099098899</p>
          <p>📍 Location: Banglore, India</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
