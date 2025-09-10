import React from "react";

function ContactSection() {
  const styles = {
    wrapper: {
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      color: "#0a0202ff",
      padding: "3rem 1rem",
      textAlign: "center",
      borderRadius: "12px",
      maxWidth: "800px",
      margin: "2rem auto",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
    infoItem: {
      fontSize: "1.1rem",
      margin: "0.5rem 0",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.heading}><strong>Company:</strong> Revatix </p>
      <p style={styles.infoItem}><strong>Email:</strong> info@revatix.com</p>
      <p style={styles.infoItem}><strong>Phone:</strong> +91 98765 43210</p>
      <p style={styles.infoItem}><strong>Address:</strong> 123 Tech Park, Bengaluru, India</p>
      <p style={styles.infoItem}><strong>Website:</strong> www.revatix.com</p>
    </div>
  );
}

export default ContactSection;
