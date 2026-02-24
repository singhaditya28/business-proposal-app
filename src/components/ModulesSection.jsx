import React from "react";

const modulesData = [
    {
        num: "Module 01",
        title: "Purchase Cycle",
        hindi: "Kharidari",
        desc: "Everything from supplier management to purchase orders to goods received. No more verbal orders or billing disputes. Track what was ordered, from whom, at what rate — and match every invoice to its GRN automatically.",
        features: [
            "Supplier Master",
            "Purchase Orders",
            "Goods Receipt (GRN)",
            "Invoice Matching",
            "Rate Comparison",
        ],
        imageUrl: "https://frappe.io/files/purchase-order7e3ee7.png",
        reverse: false,
    },
    {
        num: "Module 02",
        title: "Inventory & Stock",
        hindi: "Maal ka Hisaab",
        desc: "The heart of a saree business. Every saree and lehenga gets a barcode. Scan to sell, scan to move, scan to count. Track by lot, batch, or individual piece. Get alerts when bestsellers are running low and identify dead stock instantly.",
        features: [
            "Barcode Scanning",
            "Batch Tracking",
            "Serial Numbers",
            "Low Stock Alerts",
            "Dead Stock Report",
            "Stock Reconciliation",
        ],
        imageUrl: "https://frappe.io/files/item%20master.png",
        reverse: true,
    },
    {
        num: "Module 03",
        title: "Sales",
        hindi: "Bikri",
        desc: "Fast POS billing for walk-ins, structured wholesale order management, automatic price calculation based on customer type, and one-click eWay bill generation. Returns and exchanges handled properly with credit notes and automatic stock updates.",
        features: [
            "Retail POS Billing",
            "Wholesale Orders",
            "Auto Pricing Rules",
            "eWay Bill Integration",
            "Returns & Exchanges",
            "Customer History",
        ],
        imageUrl: "https://frappe.io/files/erpnext%20crm%20sales.png",
        reverse: false,
    },
    {
        num: "Module 04",
        title: "Accounting",
        hindi: "Hisaab-Kitaab",
        desc: "Your CA will love this. Complete chart of accounts, real-time P&L, balance sheet, GST-ready reports (GSTR-1, GSTR-3B), payment tracking across cash/cheque/UPI, and bank reconciliation. Everything connected — sales flows to accounts automatically.",
        features: [
            "Chart of Accounts",
            "GST Compliance",
            "Profit & Loss",
            "Balance Sheet",
            "Payment Tracking",
            "Bank Reconciliation",
        ],
        imageUrl: "https://frappe.io/files/P&L%20V16%201ab954d.webp",
        reverse: true,
    },
    {
        num: "Module 05",
        title: "Mobile Access & Reports",
        hindi: "Phone pe sab kuch",
        desc: "Full ERP access from your smartphone, plus 10 custom reports designed specifically for King Saree — daily sales, stock by category, customer outstandings, dead stock, profit margins, GST summaries, and more.",
        features: [
            "Daily Sales Summary",
            "Stock by Category",
            "Customer Outstanding",
            "Dead Stock (30/60/90 days)",
            "Profit Margin Report",
            "Top Selling Items",
        ],
        imageUrl: "https://frappe.io/files/request-panel748ac0.webp",
        reverse: false,
    },
    {
        num: "Module 06",
        title: "HRM & Employee Management",
        hindi: "Staff ka Hisaab",
        desc: "All 25+ employees in one system. Attendance tracking, payroll with PF and ESI, leave management, and most importantly — role-based access. Your billing staff sees only billing. Your accountant sees only accounts. The owner sees everything.",
        features: [
            "Employee Records",
            "Attendance",
            "Payroll (PF/ESI)",
            "Leave Management",
            "Role-Based Access",
        ],
        imageUrl: "https://frappe.io/files/attendance-sheet.webp",
        reverse: true,
    },
    {
        num: "Module 07",
        title: "Analytics & Dashboards",
        hindi: "Business ki X-Ray",
        desc: "See your business like never before. Live sales dashboards, inventory movement analysis, item-wise and customer-wise profit insights, and custom KPI tracking. Compare this month vs last month, this Diwali vs last year.",
        features: [
            "Sales Dashboard",
            "Inventory Analysis",
            "P&L Insights",
            "Custom KPIs",
            "Comparison Reports",
        ],
        imageUrl: "https://frappe.io/files/website-dashboard-builder.png",
        reverse: false,
    },
    {
        num: "Module 08",
        title: "Implementation & Training",
        hindi: "Setup se Go-Live tak",
        desc: "We don't install and leave. Complete system setup, data migration from Intact, hands-on training for all 25+ employees in batches, user manuals, and 2 weeks of go-live support. We run both systems in parallel before you fully switch — zero risk.",
        features: [
            "System Configuration",
            "Data Migration",
            "Staff Training",
            "User Manuals",
            "Parallel Run",
            "Go-Live Support",
        ],
        imageUrl: "https://frappe.io/files/task-gantt.png",
        reverse: true,
    },
    {
        num: "Module 09",
        title: "WhatsApp Integration",
        hindi: "Direct Messaging",
        desc: "Stay connected with your customers without lifting a finger. Automatically send invoices, payment reminders, promotional messages, and order updates directly to their WhatsApp.",
        features: [
            "Automated Invoices",
            "Payment Reminders",
            "Order Updates",
            "Bulk Promotions",
            "Customer Support",
        ],
        imageUrl: "https://frappe.io/files/Whatsappa4b3c0.webp",
        reverse: false,
    },
    {
        num: "Module 10",
        title: "Multi-Store Management",
        hindi: "Ek System Sab Dukaano Ke Liye",
        desc: "Running multiple branches? Manage pricing, promotions, and inventory across all your stores from one centralized dashboard. Seamlessly transfer stock between locations to meet customer demand instantly.",
        features: [
            "Centralized Stock",
            "Inter-branch Transfers",
            "Combined Reporting",
            "Store-specific Pricing",
            "Unified Controls",
        ],
        imageUrl: "https://frappe.io/files/Screenshot%202023-04-26%20at%2016.51.30.png",
        reverse: true,
    },
    {
        num: "Module 11",
        title: "B2B/B2C eCommerce",
        hindi: "Aapki Online Dukaan",
        desc: "Expand your reach by taking your saree and lehenga catalog online. A gorgeous web storefront that automatically syncs with your physical stock, allowing wholesale and retail customers to place orders 24/7.",
        features: [
            "Web Storefront",
            "Live Inventory Sync",
            "Online Orders",
            "Wholesale Portals",
            "Digital Payments",
        ],
        imageUrl: "https://frappe.io/files/image2d15d7.png",
        reverse: false,
    },
];

const ModulesSection = () => {
    return (
        <section className="modules-section" id="modules">
            <div className="section-inner">
                <div className="section-label">What We'll Build for You</div>
                <h2 className="section-title">11 Modules. One Complete System.</h2>
                <p className="section-subtitle">
                    Every module is configured specifically for King Saree — your
                    products, your workflow, your team.
                </p>

                {modulesData.map((item, idx) => (
                    <div
                        className={`module-block ${item.reverse ? "reverse" : ""}`}
                        key={idx}
                    >
                        <div className="module-content">
                            <div className="module-number">{item.num}</div>
                            <h3>{item.title}</h3>
                            <div className="hindi-subtitle">{item.hindi}</div>
                            <p>{item.desc}</p>
                            <ul className="module-features-list">
                                {item.features.map((feature, fIdx) => (
                                    <li key={fIdx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="module-screenshot">
                            <img src={item.imageUrl} alt={item.title} className="module-img-actual" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ModulesSection;
