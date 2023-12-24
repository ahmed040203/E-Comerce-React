import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">About Our E-commerce Website</h2>
          <p>
            Welcome to our e-commerce platform! We strive to provide a diverse range of high-quality products
            to meet all your needs. Whether you're looking for the latest tech gadgets, fashionable clothing,
            or home essentials, we've got you covered.
          </p>
          <p>
            Our mission is to make online shopping a seamless and enjoyable experience for our customers.
            With a user-friendly interface and secure payment options, you can shop with confidence.
          </p>
          <h3 className="mt-4">What Sets Us Apart?</h3>
          <p>
            At our e-commerce store, we pride ourselves on offering a curated selection of products from
            various categories. From electronics and fashion to jewelry, we collaborate with
            trusted brands to ensure that you receive only the best.
          </p>
          <h3 className="mt-4">Explore Our Categories</h3>
          <ul className="list-unstyled">
            <li>
              <strong>Electronics:</strong> Discover the latest gadgets and technology trends.
            </li>
            <li>
              <strong>Fashion:</strong> Stay stylish with our collection of trendy clothing and accessories.
            </li>
            <li>
              <strong>Jewelry:</strong> Find all you need about jewels.
            </li>
          </ul>
          <p>
            Start exploring our website and enjoy the convenience of online shopping. Thank you for choosing
            us for all your shopping needs!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
