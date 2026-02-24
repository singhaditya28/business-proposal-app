import React from "react";
import { COMPANY_NAME } from "../constants";

const CtaSection = () => {
    return (
        <section className="cta-section" id="contact">
            <div className="section-inner">
                <h2>
                    Let's Move {COMPANY_NAME}<br />
                    Into the <em>Next 20 Years</em>
                </h2>
                <p className="cta-tagline">"Purana hisaab naye tarike se"</p>
                <div className="cta-brand">
                    HOLANI <span>GROUP SOLUTIONS</span>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
