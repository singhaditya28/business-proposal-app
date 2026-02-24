import React from "react";

const roadmapData = [
    { num: "01", week: "Week 0", title: "Kickoff Meeting", desc: "We sit with you and your CA to map out every process, understand your workflow, and plan the implementation." },
    { num: "02", week: "Week 1-2", title: "System Setup", desc: "Configure the ERP for King Saree — items, categories, warehouses, pricing rules, user accounts, and permissions." },
    { num: "03", week: "Week 2-3", title: "Data Migration", desc: "Move your essential data from Intact — items, suppliers, customers, and opening balances." },
    { num: "04", week: "Week 3-5", title: "Staff Training", desc: "Hands-on training for all 25+ employees in batches. Simple guides they'll actually understand and use." },
    { num: "05", week: "Week 5-6", title: "Parallel Run", desc: "Run both Intact and the new system side by side. Zero risk. Full confidence." },
    { num: "06", week: "Week 6-8", title: "Go-Live", desc: "Switch fully to the new system. We're on-site with your team to handle any issues." },
    { num: "07", week: "Week 8-10", title: "Post Go-Live", desc: "Dedicated support period. We fix, adjust, and fine-tune until everything runs perfectly." },
    { num: "08", week: "Ongoing", title: "AMC Support", desc: "Monthly support plan keeps the system healthy, updated, and evolving with your business." },
];

const RoadmapSection = () => {
    return (
        <section className="roadmap-section">
            <div className="section-inner">
                <div className="section-label">Implementation Plan</div>
                <h2 className="section-title">From Today to Go-Live in 6-8 Weeks</h2>
                <p className="section-subtitle">
                    A structured, low-risk approach. You're never left guessing.
                </p>

                <div className="roadmap-steps">
                    {roadmapData.map((step, idx) => (
                        <div className="roadmap-step" key={idx}>
                            <div className="step-num">{step.num}</div>
                            <div className="step-week">{step.week}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
