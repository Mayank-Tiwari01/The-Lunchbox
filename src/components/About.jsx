import React from 'react';
import '../styles/about.css';
import Header from './Header';

const About = () => {
  return (
    <>
    <div className="about-container">
      <section className="about-intro">
        <h1>About The LunchBox</h1>
        <p>
          Welcome to The LunchBox, your go-to destination for delicious meals delivered straight to your doorstep. We are dedicated to providing you with the best culinary experience, offering a wide range of dishes crafted with the finest ingredients.
        </p>
      </section>
      
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At The LunchBox, our mission is to make food delivery convenient, reliable, and delightful. We strive to bring you a variety of high-quality meals, ensuring that every order is prepared with care and delivered with speed.
        </p>
      </section>
      
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-profiles">
          <div className="profile-card">
            <img src="https://img.freepik.com/premium-photo/indian-male-chef-with-warm-smile-isolated-green-background_176841-17924.jpg" alt="Chef John Doe" />
            <h3>Chef Mayank Tiwari</h3>
            <h4>Head Chef</h4>
            <p>Mayank is the mastermind behind our exquisite menu. With over 20 years of experience, he brings a touch of magic to every dish.</p>
          </div>
          <div className="profile-card">
            <img src="https://img.freepik.com/premium-photo/young-chef-girl-isolated-green-background-indian-pakistani-model_561639-4505.jpg" alt="Chef Jane Smith" />
            <h3>Chef Kiran</h3>
            <h4>Pastry Chef</h4>
            <p>Kiran is known for her delectable desserts. Her creativity and passion for baking make every sweet treat irresistible.</p>
          </div>
          {/* will add more in future, if needed */}
        </div>
      </section>
      
      <section className="about-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"The LunchBox always delivers on time with the most delicious meals. Highly recommended!"</p>
            <h4>- Ronak Raut</h4>
          </div>
          <div className="testimonial-card">
            <p>"A wonderful service! The food is fantastic, and the delivery is fast and reliable."</p>
            <h4>- Bhavesh Lohar</h4>
          </div>
          {/* will add more in future, if needed */}
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
