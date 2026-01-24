import React from "react";

export default function CoursesSection() {
  return (
    <section className="comparison-wrapper">
      <h2 className="title">Wavemind vs Others</h2>

      <div className="table-wrapper">
        <div className="table">
          {/* Features */}
          <div className="col features">
            <div className="header">Features</div>
            <div className="cell">Batch Size</div>
            <div className="cell">Result Focus For Each Student</div>
            <div className="cell">Video and Audio For Students</div>
            <div className="cell">Guided Practice</div>
            <div className="cell">Real Personalized Attention</div>
            <div className="cell">Understand Physics deeply</div>
            <div className="cell">Doubt Solving in Class</div>
            <div className="cell">Highly Trained Faculties</div>
          </div>

          {/* Wavemind */}
          <div className="col wavemind">
            <div className="header highlight">Wavemind</div>
            <div className="cell">Very Small</div>
            <div className="cell check">✓</div>
            <div className="cell check">✓</div>
            <div className="cell check">✓</div>
            <div className="cell check">✓</div>
            <div className="cell check">✓</div>
            <div className="cell check">✓</div>
            <div className="cell check">✓</div>
          </div>

          {/* Offline Institutes */}
          <div className="col offline">
            <div className="header">Offline Institutes</div>
            <div className="cell">Large</div>
            <div className="cell cross">✕</div>
            <div className="cell muted">--</div>
            <div className="cell cross">✕</div>
            <div className="cell cross">✕</div>
            <div className="cell muted">Rarely</div>
            <div className="cell muted">Rarely</div>
            <div className="cell muted">Limited Centers</div>
          </div>

          {/* Online Institutes */}
          <div className="col online">
            <div className="header">Online Institutes</div>
            <div className="cell">Very Large</div>
            <div className="cell cross">✕</div>
            <div className="cell cross">✕</div>
            <div className="cell cross">✕</div>
            <div className="cell cross">✕</div>
            <div className="cell muted">Junior Faculty</div>
            <div className="cell muted">Rarely</div>
            <div className="cell check">✓</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison-wrapper {
          padding: 30px 10px;
          background: radial-gradient(circle at top, #2a0f2e, #0b0c18);
          color: #fff;
          font-family: "Inter", sans-serif;
        }

        .title {
          text-align: center;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 40px;
        }

        /* Scrollable table wrapper */
        .table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        .table {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 18px;
          min-width: 600px; /* ensures scroll if screen is smaller */
        }

        .col {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          color: #1a1a1a;
        }

        .features {
          background: #f3f3f3;
        }

        .header {
          padding: 18px;
          font-weight: 600;
          text-align: center;
          background: #a9a9a9;
          color: #fff;
          font-size: 16px;
        }

        .highlight {
          background: #ffb703;
          color: #fff;
        }

        .cell {
          padding: 16px 18px;
          border-bottom: 1px dashed #e5e5e5;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .features .cell {
          font-weight: 500;
        }

        .check {
          color: #6a5acd;
          font-size: 18px;
          font-weight: 700;
        }

        .cross {
          color: #ff4d6d;
          font-size: 18px;
          font-weight: 700;
        }

        .muted {
          color: #555;
          font-size: 13px;
        }

        /* Mobile adjustments */
        @media (max-width: 900px) {
          .table {
            gap: 8px; /* smaller gap on mobile */
            grid-template-columns: repeat(4, minmax(140px, 1fr)); 
          }
        }
      `}</style>
    </section>
  );
}
