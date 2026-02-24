import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-inner">
                <div className="nav-logo">
                    HOLANI <span>GROUP</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#problem">The Problem</a>
                    </li>
                    <li>
                        <a href="#solution">Solution</a>
                    </li>
                    <li>
                        <a href="#modules">Modules</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-cta">
                            Let's Talk
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
