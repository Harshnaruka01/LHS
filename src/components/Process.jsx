import designImage from '../Photos/design.jpg';
import testingImage from '../Photos/testing.jpg';

function Process() {
  return (
    <section id="process" className="section">
      <h2>My Development Process</h2>

      <div className="cards">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400" alt="Requirement Discussion" />
          <h3>1. Requirement Discussion</h3>
          <p>I talk with the client and understand their business needs.</p>
        </div>

        <div className="card">
          <img src={designImage} alt="Planning & Design" />
          <h3>2. Planning & Design</h3>
          <p>I create wireframes and choose design based on brand.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" alt="Development" />
          <h3>3. Development</h3>
          <p>I develop website using React, Vite and modern tools.</p>
        </div>

        <div className="card">
          <img src={testingImage} alt="Testing & Delivery" />
          <h3>4. Testing & Delivery</h3>
          <p>After testing, I deploy and deliver the final product.</p>
        </div>
      </div>
    </section>
  );
}

export default Process;
