// import React from 'react'

// const Education = () => {
//   return (
//     <div>index</div>
//   )
// }

// export default Education

import { education } from '../../data/constants'; // Adjust path if needed

const Education = () => {
  return (
    <section
      id="education"
      style={{
        scrollMarginTop: '100px',
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        color: '#fff',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '40px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Education
      </h2>

      {education.map((edu, index) => (
        <div
          key={index}
          style={{
            marginBottom: '25px',
            padding: '25px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            maxWidth: '800px',
            marginInline: 'auto',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{edu.degree}</h3>
          <p><strong>Institution:</strong> {edu.institution}</p>
          <p><strong>Specialization:</strong> {edu.specialization}</p>
          <p><strong>Duration:</strong> {edu.duration}</p>
          <p><strong>Location:</strong> {edu.location}</p>
          {edu.board && <p><strong>Board:</strong> {edu.board}</p>}
        </div>
      ))}
    </section>
  );
};

export default Education;
