"use client";
import Image from "next/image";
import "./globals.css";
import { useState, useEffect } from "react";

export default function Home() {
  
  const slides = [
    "/images/strawberry-yogurt.jpg",
    "/images/blueberry-yogurt.jpg",
    "/images/vanilla-yogurt.jpg",
    "/images/yogurt.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-text">PatFarm</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/flavors">Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <Image
            key={current}
            src={slides[current]}
            alt="PatFarm Yogurt"
            fill
            priority
            className="hero-image fade"
          />
          <div className="hero-text">
            <h1>PatFarm Yogurt</h1>
            <p>“Spoonfuls of Freshness — Naturally Sweet, Farm Fresh & Creamy!”</p>
            <button className="hero-btn">Order Now</button>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <h2>Our Best-Selling Yogurts</h2>
        <div className="gallery-grid">
          <div className="gallery-card">
            <Image src="/images/strawberry-yogurt.jpg" alt="Strawberry" width={400} height={300} />
            <h3>Strawberry Yogurt</h3>
          </div>
          <div className="gallery-card">
            <Image src="/images/blueberry-yogurt.jpg" alt="Blueberry" width={400} height={300} />
            <h3>Blueberry Yogurt</h3>
          </div>
          <div className="gallery-card">
            <Image src="/images/vanilla-yogurt.jpg" alt="Vanilla" width={400} height={300} />
            <h3>Vanilla Yogurt</h3>
          </div>
          <div className="gallery-card">
            <Image src="/images/yogurt.jpg" alt="Plain Yogurt" width={400} height={300} />
            <h3>Plain Yogurt</h3>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Absolutely love PatFarm Yogurt — it’s smooth, creamy, and tastes so fresh!”</p>
            <span>— Sarah M.</span>
          </div>
          <div className="testimonial-card">
            <p>“The strawberry flavor is my favorite! You can taste the real fruit.”</p>
            <span>— Brian K.</span>
          </div>
          <div className="testimonial-card">
            <p>“Healthy and delicious — my kids can’t get enough of it!”</p>
            <span>— Anita W.</span>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer>
        <h3>PatFarm Yogurt</h3>
        <p>Email: joymonica924@gmail.com | Phone: 0726 588 450</p>
        <p>© 2025 PatFarm. All rights reserved.</p>
      </footer>
    </>
  );
}
