import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6, padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1f2937' }}>ClearView Glass Installation</h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>Professional, Affordable, and Fast Glass Solutions</p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937' }}>Our Services</h2>
        <ul>
          <li>✅ Home window installation & replacement</li>
          <li>✅ Commercial glass storefronts</li>
          <li>✅ Shower enclosures & glass railings</li>
          <li>✅ Emergency glass repair (24/7)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937' }}>Why Choose ClearView?</h2>
        <p>
          With over 20 years of experience, ClearView provides premium glass installation services for residential and
          commercial clients. We're licensed, insured, and dedicated to making your project hassle-free.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937' }}>Contact Us</h2>
        <p>📞 Call: (555) 987-6543</p>
        <p>📧 Email: info@clearviewglass.com</p>
        <p>📍 Location: 123 Glass Street, Window City, USA</p>
      </section>

      <footer style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', paddingTop: '2rem' }}>
        &copy; 2025 ClearView Glass. All rights reserved.
      </footer>
    </div>
  );
}
