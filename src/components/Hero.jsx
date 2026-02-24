import React from "react";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-badge">Exclusive Proposal for King Saree</div>
                <h1>
                    Your Business Deserves<br />
                    <em>Modern System</em>
                </h1>
                <p className="hero-subtitle">
                    A complete ERP solution built for textile retail and wholesale —
                    designed to replace Intact and give King Saree the power of cloud,
                    mobile, and real-time analytics.
                </p>
                <div className="hero-meta">
                    <div className="hero-meta-item">
                        <div className="number">25+</div>
                        <div className="label">Employees</div>
                    </div>
                    <div className="hero-meta-item">
                        <div className="number">6-8</div>
                        <div className="label">Week Timeline</div>
                    </div>
                    <div className="hero-meta-item">
                        <div className="number">8</div>
                        <div className="label">Modules</div>
                    </div>
                    <div className="hero-meta-item">
                        <div className="number">1</div>
                        <div className="label">Complete System</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
