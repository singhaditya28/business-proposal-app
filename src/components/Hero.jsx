import React from "react";
import { COMPANY_NAME } from "../constants";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">Exclusive Proposal for {COMPANY_NAME}</div>
                    <h1>
                        Your Business Deserves<br />
                        <em>Modern System</em>
                    </h1>
                    <p className="hero-subtitle">
                        A complete ERP solution built for textile retail and wholesale —
                        designed to replace Intact and give {COMPANY_NAME} the power of cloud,
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
                <div className="hero-image">
                    <img src="/src/assets/logo.png" alt={`${COMPANY_NAME} Logo`} className="hero-logo" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
