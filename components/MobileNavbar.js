import React from 'react';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';

export default function MobileNavbar({ activeSection, setActiveSection }) {
    const menuItems = [
        { id: 'home', label: 'About', icon: <FaHome /> },
        { id: 'experience', label: 'Experience', icon: <FaUser /> },
        { id: 'projects', label: 'Projects', icon: <FaCode /> },
        { id: 'blogs', label: 'Blogs', icon: <FaBriefcase /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
    ];

    return (
        <div className="mobile-nav">
            <div className="nav-header">
                <img src="/icon.png" alt="Logo" className="nav-logo" />
                <span className="nav-title">Kaushal Nerkar</span>
            </div>
            
            <div className="nav-items-scroll">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <style jsx>{`
                .mobile-nav {
                    display: none;
                    flex-direction: column;
                    background: #1e272e;
                    border-bottom: 1px solid #2d3436;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }

                .nav-header {
                    display: flex;
                    align-items: center;
                    padding: 15px 20px;
                    gap: 15px;
                }

                .nav-logo {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid #0984e3;
                }

                .nav-title {
                    color: white;
                    font-family: Quicksand, sans-serif;
                    font-weight: 600;
                    font-size: 1.1rem;
                }

                .nav-items-scroll {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 10px;
                    width: 100%;
                }
                
                .nav-item {
                    background: transparent;
                    border: none;
                    color: #b2bec3;
                    padding: 10px 0;
                    font-family: Quicksand, sans-serif;
                    font-size: 0.9rem;
                    white-space: nowrap;
                    cursor: pointer;
                    border-bottom: 3px solid transparent;
                    transition: all 0.2s;
                }

                .nav-item.active {
                    color: #0984e3;
                    border-bottom-color: #0984e3;
                    font-weight: 600;
                }

                @media (max-width: 992px) {
                    .mobile-nav {
                        display: flex;
                    }
                }
            `}</style>
        </div>
    );
}

