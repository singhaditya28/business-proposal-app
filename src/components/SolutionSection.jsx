import React from "react";

const solutionData = [
    {
        icon: "☁️",
        title: "Cloud-Based",
        desc: "Access from anywhere — shop, home, or travelling",
    },
    {
        icon: "📱",
        title: "Mobile-First",
        desc: "Full ERP access from your smartphone",
    },
    {
        icon: "🇮🇳",
        title: "GST-Ready",
        desc: "Built for India — GST, e-invoicing, TDS all included",
    },
    {
        icon: "🔒",
        title: "You Own It",
        desc: "One-time investment. No monthly software rental.",
    },
];

const SolutionSection = () => {
    return (
        <section className="solution-section" id="solution">
            <div className="section-inner">
                <div className="section-label">The Solution</div>
                <h2 className="section-title">
                    A Complete ERP Built for<br />
                    Textile Retail & Wholesale
                </h2>
                <p className="section-subtitle">
                    Our platform has been developed specifically for Indian textile
                    businesses. It's not a generic billing app — it's a complete enterprise
                    system.
                </p>

                <div className="solution-features">
                    {solutionData.map((feature, idx) => (
                        <div className="solution-feature" key={idx}>
                            <div className="icon">{feature.icon}</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
