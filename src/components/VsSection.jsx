import React from "react";
import { COMPANY_NAME } from "../constants";

const VsSection = () => {
    return (
        <section className="vs-section">
            <div className="section-inner">
                <div className="section-label">Comparison</div>
                <h2 className="section-title">Why Not MyBillBook?</h2>
                <p className="section-subtitle">
                    You might be evaluating other options. Here's the honest comparison.
                </p>

                <div className="vs-grid">
                    <div className="vs-card theirs">
                        <div className="vs-badge">MyBillBook</div>
                        <h3>The Rental Approach</h3>
                        <ul className="vs-list">
                            <li>You rent the software — they can raise prices anytime</li>
                            <li>Stop paying = lose access to your own data</li>
                            <li>Very limited customization — take it or leave it</li>
                            <li>Designed for small businesses, you'll outgrow it</li>
                            <li>Primarily billing + inventory, no full ERP</li>
                            <li>Their servers, their rules, their data</li>
                            <li>Monthly fees add up to ₹5-8 lakhs over 3-5 years</li>
                            <li>Very expensive for full implementation</li>
                            <li>Generic DIY setup — you figure it out</li>
                        </ul>
                    </div>
                    <div className="vs-card ours">
                        <div className="vs-badge">Holani Group ERP</div>
                        <h3>The Ownership Approach</h3>
                        <ul className="vs-list">
                            <li>You own the system forever — one-time investment</li>
                            <li>Your data lives on your server, always accessible</li>
                            <li>Fully customizable to {COMPANY_NAME}'s exact workflow</li>
                            <li>Grows with you — 1 store or 10 stores</li>
                            <li>
                                Complete ERP — purchase, sales, inventory, accounting, HR, analytics
                            </li>
                            <li>Your server, your rules, your data</li>
                            <li>₹5.5L one-time + affordable AMC</li>
                            <li>All-inclusive with training & data migration</li>
                            <li>We set it up, train your team, and stay with you</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VsSection;
