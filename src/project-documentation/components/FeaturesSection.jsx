import React from "react";

export default function FeaturesSection({ features }) {
  return (
    <>
      <section className="feature-grid">
        {features.map((feature) => (
          <article
            key={feature.id}
            className={`feature-card ${feature.size || "small"}`}
          >
            {feature.image && <img src={feature.image} alt={feature.title} />}
            <h3>{feature.title}</h3>
            {feature.description && <p>{feature.description}</p>}
          </article>
        ))}
      </section>

      <style>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          grid-auto-rows: 150px;
          gap: 15px;
          padding: 40px 20px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background-color: var(--glass-bg);
          color: var(--primary-color);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
        }

        .feature-card img {
          max-width: 100%;
          max-height: 70px;
          object-fit: contain;
          margin-bottom: 10px;
          pointer-events: none;
          user-select: none;
        }

        .feature-card h3 {
          font-size: 1rem;
          margin: 6px 0 4px;
        }

        .feature-card p {
          font-size: 0.85rem;
          opacity: 0.85;
          margin: 0;
        }

        .feature-card.small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .feature-card.medium {
          grid-column: span 2;
          grid-row: span 1;
        }

        .feature-card.square {
          grid-column: span 2;
          grid-row: span 2;
        }

        .feature-card.tall {
          grid-column: span 1;
          grid-row: span 2;
        }

        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            grid-auto-rows: 130px;
            gap: 10px;
          }

          .feature-card h3 {
            font-size: 0.9rem;
          }

          .feature-card p {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .feature-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            grid-auto-rows: 110px;
          }
        }

      `}</style>
    </>
  );
}