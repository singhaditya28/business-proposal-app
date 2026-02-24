import React from "react";

const whyData = [
    {
        icon: "🧵",
        title: "Built for Textile",
        desc: "We understand the saree/lehenga business — SKU complexity, seasonal patterns, wholesale dynamics. This isn't a generic system forced to fit.",
    },
    {
        icon: "🗣️",
        title: "We Speak Your Language",
        desc: "No tech jargon. We explain things simply and train your staff in a way they actually understand and use daily.",
    },
    {
        icon: "🤝",
        title: "We Don't Disappear",
        desc: "Post go-live support, AMC plans, and a long-term relationship. We're a phone call away — not a faceless helpdesk.",
    },
    {
        icon: "💎",
        title: "One-Time Investment",
        desc: "Unlike subscriptions where you pay lakhs over time, this is a one-time cost. You own the system. Period.",
    },
    {
        icon: "🔐",
        title: "Your Data, Your Control",
        desc: "Your business data lives under your control. Not on someone else's platform where they can hold it hostage.",
    },
    {
        icon: "⚡",
        title: "Proven Expertise",
        desc: "We've implemented ERP for businesses like yours and we know what works. No experiments — just results.",
    },
];

const WhySection = () => {
    return (
        <section className="why-section">
            <div className="section-inner">
                <div className="section-label">Why Holani Group</div>
                <h2 className="section-title">
                    We Don't Just Sell Software.<br />
                    We Build Partnerships.
                </h2>

                <div className="why-grid">
                    {whyData.map((item, index) => (
                        <div className="why-card" key={index}>
                            <div className="why-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySection;
