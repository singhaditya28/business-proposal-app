import React from "react";

const CostCallout = () => {
    return (
        <section className="cost-callout">
            <div className="section-inner">
                <h2>
                    Intact isn't saving you money.<br />
                    <em>It's costing you money every single day.</em>
                </h2>
                <p>
                    Think about the hours wasted on manual eWay bills, the stock "missing"
                    because barcode scanning failed, the lakhs sitting in dead inventory
                    you can't even identify.
                </p>
                <div className="cost-stats">
                    <div className="cost-stat">
                        <div className="big">20+</div>
                        <div className="desc">Hours wasted weekly</div>
                    </div>
                    <div className="cost-stat">
                        <div className="big">₹ ?</div>
                        <div className="desc">Lakhs in dead stock</div>
                    </div>
                    <div className="cost-stat">
                        <div className="big">0</div>
                        <div className="desc">Reports available on mobile</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCallout;
