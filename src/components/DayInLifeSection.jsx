import React from "react";

const events = [
    {
        icon: "🌅",
        time: "Morning — Before You Reach the Shop",
        desc: "You check yesterday's sales summary on your phone over chai. The system shows 3 low-stock alerts — your bestselling Banarasi sarees need reorder. You approve a purchase order from your phone. By the time you reach the shop, the order is already placed with your supplier.",
    },
    {
        icon: "☀️",
        time: "Mid-Day — Peak Hours",
        desc: "A walk-in customer buys 5 sarees — billing takes 2 minutes with barcode scanning. A wholesale order comes from a Surat dealer — order created, eWay bill generated, dispatch scheduled. All in one flow. A customer returns a lehenga from last week — credit note generated, stock updated, accounts adjusted. Automatically.",
    },
    {
        icon: "🌙",
        time: "Evening — Closing Time",
        desc: "You open the dashboard on your phone: today's sales ₹4.2L, 47 invoices, 3 returns, net profit ₹68,000. Your CA logs in from home — checks GST summary, downloads GSTR-1 data, reviews outstanding payments. Dead stock report shows 120 pieces haven't moved in 60 days — time for a clearance sale before next season.",
    },
];

const DayInLifeSection = () => {
    return (
        <section className="daylife-section">
            <div className="section-inner">
                <div className="section-label">Imagine This</div>
                <h2 className="section-title">
                    A Day at King Saree — After Implementation
                </h2>
                <p className="section-subtitle">
                    Here's what running your business will feel like with the new system.
                </p>

                <div className="timeline">
                    {events.map((evt, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot">{evt.icon}</div>
                            <div className="timeline-content">
                                <h3>{evt.time}</h3>
                                <p>{evt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DayInLifeSection;
