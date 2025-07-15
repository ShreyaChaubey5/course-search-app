import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Logo and Description */}
        <div style={styles.column}>
          <h2 style={styles.logo}>Logo</h2>
          <p style={styles.text}>
            Inspiring kids to build, code, and create through hands-on STEM learning experiences. Join the future of fun learning!
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/courses" style={styles.link}>Courses</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/faqs" style={styles.link}>FAQs</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Policies</h4>
          <ul style={styles.list}>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
            <li><a href="/refund" style={styles.link}>Refund Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Stay Updated</h4>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <button style={styles.button}>Subscribe</button>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>🔗</a>
            <a href="#" style={styles.icon}>🐦</a>
            <a href="#" style={styles.icon}>📘</a>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        © 2025 YourCompanyName. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    borderTop: '1px solid #ddd',
    fontFamily: 'sans-serif'
  },
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px'
  },
  column: {
    flex: '1 1 250px'
  },
  logo: {
    fontWeight: '700',
    fontSize: '24px'
  },
  heading: {
    marginBottom: '15px'
  },
  text: {
    fontSize: '14px',
    color: '#666'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '14px',
    color: '#333'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    marginBottom: '8px'
  },
  input: {
    padding: '10px',
    width: '100%',
    maxWidth: '250px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    background: '#6c47ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  socialIcons: {
    marginTop: '15px',
    fontSize: '18px'
  },
  icon: {
    marginRight: '10px',
    textDecoration: 'none'
  },
  bottom: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '12px',
    color: '#999'
  }
};

export default Footer;
