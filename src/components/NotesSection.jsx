import React from "react";

const NotesSection = () => {
    return (
        <section className="notes-section">
            <div className="section-inner">
                <h3>Notes & Assumptions</h3>
                <ul className="notes-list">
                    <li>
                        Price valid for single-location implementation (King Saree, Chandni Chowk)
                    </li>
                    <li>
                        Hosting/server cost not included — we will recommend the best option for
                        your budget
                    </li>
                    <li>Government API credentials (eWay/GST) to be provided by King Saree</li>
                    <li>
                        Online selling integration (Meesho/Myntra) not included in this scope —
                        can be added later
                    </li>
                    <li>All prices are exclusive of applicable taxes</li>
                    <li>
                        Timeline assumes timely availability of King Saree team for training and
                        feedback sessions
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default NotesSection;
