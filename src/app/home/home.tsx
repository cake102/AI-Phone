export default function Home() {
    return (
      <div className="home-container">
        <h1 className="home-title">
          Bring Your <span style={{ color: '#7d28c5' }}>Voice</span> to Life!
        </h1>
        <p className="home-description">
          Transform your conversation into smart AI solutions in seconds. No technical skills required.
        </p>
        <button className="home-button">
          <img src="/phone.png" alt="Phone Icon" />
          Let’s try Call Voice
        </button>
        {/* Tambahkan gambar PNG di bagian bawah */}
        <img 
          src="/home.png" 
          alt="Footer Image" 
          className="home-footer-image"
        />
      </div>
    );
  }