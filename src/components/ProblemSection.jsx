import React from "react";

const problemData = [
    {
        icon: "📵",
        title: "No Cloud. No Mobile.",
        desc: "You can't check sales, stock, or reports from your phone. To know anything, you have to be physically in the shop. In 2025, that's unacceptable.",
    },
    {
        icon: "📝",
        title: "Manual eWay Bills",
        desc: "Every wholesale shipment means manual data entry for eWay bills. Extra time, risk of errors, and potential penalties. One mistake can cost you thousands.",
    },
    {
        icon: "🔴",
        title: "Broken Barcode Scanning",
        desc: "With thousands of sarees and lehengas, you need reliable barcode tracking. When scanning fails, your inventory records go wrong — and you lose money.",
    },
    {
        icon: "📊",
        title: "Zero Analytics",
        desc: "Which sarees are bestsellers? Where's dead stock sitting? What are your real margins? Intact can't tell you. You're making decisions blind.",
    },
    {
        icon: "🔄",
        title: "Returns are a Nightmare",
        desc: "Returns and exchanges happen daily in the saree business. Without a proper system, tracking them is messy, error-prone, and eats into your margins.",
    },
    {
        icon: "⚠️",
        title: "No Support. No Updates.",
        desc: "Intact is dead software. No new features, no bug fixes, no GST updates. If something breaks tomorrow, who will you call?",
    },
];

const ProblemSection = () => {
    return (
        <section className="problem-section" id="problem">
            <div className="section-inner">
                <div className="section-label">The Problem</div>
                <h2 className="section-title">
                    Intact is 20 Years Old.<br />
                    Your Business Has Outgrown It.
                </h2>
                <p className="section-subtitle">
                    You're running a 2025 business on 2005 technology. Here's what it's
                    costing you every single day.
                </p>

                <div className="problem-grid">
                    {problemData.map((problem, index) => (
                        <div className="problem-card" key={index}>
                            <div className="problem-icon">{problem.icon}</div>
                            <h3>{problem.title}</h3>
                            <p>{problem.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
