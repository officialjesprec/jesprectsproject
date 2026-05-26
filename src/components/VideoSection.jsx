

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video width="100%" autoPlay muted loop playsInline>
          <source
            src="https://assets.mixkit.co/videos/29351/29351-720.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="video-content">
        <h2 className="section-title">How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{' '}
          <span className="highlight-keyword">mass</span>,{' '}
          <span className="highlight-keyword">diameter</span>,{' '}
          <span className="highlight-keyword">gravity</span>, and{' '}
          <span className="highlight-keyword">density</span>, we gain insight into how planets form,
          behave, and interact within the solar system.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
