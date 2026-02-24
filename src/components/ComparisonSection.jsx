import React from "react";

const comparisonData = [
    { feature: "Cloud Access", intact: "✕ Not Available", intactStatus: "status-no", holani: "✓ Anywhere, Anytime", holaniStatus: "status-yes" },
    { feature: "Mobile App", intact: "✕ Not Available", intactStatus: "status-no", holani: "✓ Full Mobile Access", holaniStatus: "status-yes" },
    { feature: "Barcode Scanning", intact: "⚠ Unreliable", intactStatus: "status-warn", holani: "✓ Reliable + Batch Tracking", holaniStatus: "status-yes" },
    { feature: "eWay Bill", intact: "✕ Manual Entry", intactStatus: "status-no", holani: "✓ Auto from Invoice", holaniStatus: "status-yes" },
    { feature: "GST Compliance", intact: "⚠ Basic", intactStatus: "status-warn", holani: "✓ Full GST + e-Invoicing", holaniStatus: "status-yes" },
    { feature: "Live Dashboards", intact: "✕ Not Available", intactStatus: "status-no", holani: "✓ Real-time Analytics", holaniStatus: "status-yes" },
    { feature: "Returns Management", intact: "⚠ Manual", intactStatus: "status-warn", holani: "✓ Automated Credit Notes", holaniStatus: "status-yes" },
    { feature: "Custom Reports", intact: "✕ Very Limited", intactStatus: "status-no", holani: "✓ 10 Custom + Unlimited", holaniStatus: "status-yes" },
    { feature: "Multi-User + Roles", intact: "⚠ Limited", intactStatus: "status-warn", holani: "✓ Role-Based, Unlimited", holaniStatus: "status-yes" },
    { feature: "Software Updates", intact: "✕ Dead Software", intactStatus: "status-no", holani: "✓ Regular Updates", holaniStatus: "status-yes" },
    { feature: "Support", intact: "✕ No Support", intactStatus: "status-no", holani: "✓ Dedicated Holani Team", holaniStatus: "status-yes" },
];

const ComparisonSection = () => {
    return (
        <section className="comparison-section">
            <div className="section-inner">
                <div className="section-label">Side by Side</div>
                <h2 className="section-title">Intact vs Our Platform</h2>
                <p className="section-subtitle">
                    A clear comparison of where you are today vs where you'll be after
                    implementation.
                </p>

                <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Intact (Current)</th>
                                <th>Holani ERP (Proposed)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.feature}</td>
                                    <td className={row.intactStatus}>{row.intact}</td>
                                    <td className={row.holaniStatus}>{row.holani}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
