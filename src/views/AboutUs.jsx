
export default function AboutUs() {
    return (
      <section className="container mt-5">
        <h2>About Us</h2>
  
        {}
        <section className="mt-4">
          <h3>Our Mission</h3>
          <p>
            At Purrfect Adoption, our mission is to connect adorable cats with loving families. We strive to ensure that every cat finds a forever home, where they can thrive in a caring environment. We are dedicated to improving the lives of both cats and the families that adopt them.
          </p>
        </section>
  
        {}
        <section className="mt-4">
          <h3>Our History</h3>
          <p>
            Founded with the belief that every cat deserves a loving home, Purrfect Adoption began as a small initiative to help stray and abandoned cats. Over the years, we have expanded our efforts, collaborating with various shelters and rescue organizations to bring hope to even more cats in need. Today, we continue our mission to find forever homes for every cat we meet.
          </p>
        </section>
  
        {}
        <section className="mt-4">
          <h3>Our Team</h3>
          <p>
            Meet the passionate individuals who drive the mission of Purrfect Adoption. Our team is dedicated to providing the best care and finding the perfect match for every cat.
          </p>
          <div className="row mt-4">
            {}
            <div className="col-md-4 text-center">
              <img
                src="https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6"
                alt="John Doe"
                className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h5 className="mt-2">John Doe</h5>
              <p>Director</p>
            </div>
  
            {}
            <div className="col-md-4 text-center">
              <img
                src="https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6"
                alt="Bob doe"
                className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h5 className="mt-2">Bob Doe</h5>
              <p>Director</p>
            </div>
  
            {}
            <div className="col-md-4 text-center">
              <img
                src="https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6"
                alt="peter perker"
                className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h5 className="mt-2">Peter </h5>
              <p>Director</p>
            </div>
          </div>
        </section>
      </section>
    );
  }
  