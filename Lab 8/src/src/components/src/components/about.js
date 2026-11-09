function About() {
  return (
    <main>
      <section className="page-header">
        <h1>About PulseFit</h1>
        <p>Healthy living, together.</p>
      </section>

      <section className="section about">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
          alt="Gym interior with equipment"
          className="about-img"
        />
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2015, PulseFit began as a small neighborhood gym with a
            big goal: make fitness welcoming to everyone. Today we serve
            thousands of members with certified trainers and a supportive
            community.
          </p>
          <h2>Our Mission</h2>
          <p>
            To inspire and empower people to live healthier, stronger, and
            happier lives through accessible, high-quality fitness programs.
          </p>
          <ul className="facts">
            <li>🏋️ 50+ weekly classes</li>
            <li>👨‍🏫 20 certified trainers</li>
            <li>🕔 Open 5 AM – 11 PM daily</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;