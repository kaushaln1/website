import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaMapMarkerAlt, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar({ activeSection, setActiveSection }) {
    const menuItems = [
        { id: 'home', label: 'About', icon: <FaHome /> },
        { id: 'experience', label: 'Experience', icon: <FaUser /> },
        { id: 'projects', label: 'Projects', icon: <FaCode /> },
        { id: 'blogs', label: 'Blogs', icon: <FaBriefcase /> },
        { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* Sidebar Container */}
            <aside className="sidebar">
                <div className="profile-section">
                    <img src="/icon.png" alt="Profile" className="profile-img" />
                    <h2 className="profile-name">Kaushal Nerkar</h2>
                    <p className="profile-role">MLOps & ML Engineer</p>
                    
                    <div className="profile-details">
                        <div className="detail-item">
                           <a href="mailto:kaushalvnerkar@gmail.com" className="email-link">kaushalvnerkar@gmail.com</a>
                        </div>
                        <div className="detail-item">
                            <FaMapMarkerAlt className="detail-icon" /> USA
                        </div>
                        <div className="detail-item status">
                            <span className="status-dot"></span> Open to Work
                        </div>
                        <div className="social-row">
                             <a href="https://github.com/kaushaln1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                             <a href="https://www.linkedin.com/in/kaushalnerkar/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                        <a href="/Kaushal_resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">
                            <FaFileDownload /> Download CV
                        </a>
                    </div>
                </div>

                <div className="divider"></div>

                <nav className="nav-menu">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <p>© {new Date().getFullYear()} Kaushal</p>
                    <a href="https://uptime.kaushalnerkar.tech" target="_blank" rel="noopener noreferrer" className="uptime-link">
                         Status: Uptime
                    </a>
                </div>
            </aside>

            <style jsx>{`
                .uptime-link {
                    color: #00b894;
                    font-size: 0.8rem;
                    text-decoration: none;
                    display: block;
                    margin-top: 5px;
                    transition: color 0.3s;
                }

                .uptime-link:hover {
                    color: #55efc4;
                    text-decoration: underline;
                }

                .sidebar {
                    width: 320px;
                    height: 100vh;
                    background: #1e272e;
                    display: flex;
                    flex-direction: column;
                    padding: 2rem;
                    border-right: 1px solid #2d3436;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 100;
                    transition: transform 0.3s ease;
                    overflow-y: auto;
                }

                .profile-section {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }

                .profile-img {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 1rem;
                    border: 2px solid #0984e3;
                    padding: 3px;
                }

                .profile-name {
                    color: white;
                    font-size: 1.4rem;
                    margin-bottom: 0.2rem;
                    font-family: Quicksand, sans-serif;
                    font-weight: 600;
                }

                .profile-role {
                    color: #b2bec3;
                    font-size: 0.9rem;
                    font-family: Quicksand, sans-serif;
                    margin-bottom: 1.2rem;
                }

                .profile-details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    align-items: center;
                    font-size: 0.9rem;
                    color: #dfe6e9;
                }

                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: Quicksand, sans-serif;
                }
                
                .email-link {
                    color: #dfe6e9;
                    text-decoration: none;
                    font-size: 0.85rem;
                }
                
                .email-link:hover {
                    color: #74b9ff;
                }

                .detail-icon {
                    color: #74b9ff;
                }
                
                .status {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.85rem;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #00b894; /* Green for available */
                    border-radius: 50%;
                    box-shadow: 0 0 5px #00b894;
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(0, 184, 148, 0.7); }
                    70% { box-shadow: 0 0 0 6px rgba(0, 184, 148, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 184, 148, 0); }
                }
                
                .social-row {
                    display: flex;
                    gap: 15px;
                    margin: 10px 0;
                }
                
                .social-row a {
                    color: #b2bec3;
                    font-size: 1.2rem;
                    transition: color 0.3s;
                }
                
                .social-row a:hover {
                    color: #0984e3;
                }

                .cv-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: transparent;
                    border: 1px solid #74b9ff;
                    color: #74b9ff;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    text-decoration: none;
                    transition: all 0.3s;
                    margin-top: 5px;
                }

                .cv-btn:hover {
                    background: #74b9ff;
                    color: #1e272e;
                }

                .divider {
                    height: 1px;
                    background: #2d3436;
                    margin: 0 0 1.5rem 0;
                    width: 100%;
                }

                .nav-menu {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    flex: 1;
                }

                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.8rem 1rem;
                    border: none;
                    background: transparent;
                    color: #b2bec3;
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    font-family: Quicksand, sans-serif;
                    font-size: 1rem;
                    text-align: left;
                    width: 100%;
                }

                .nav-item:hover {
                    background: #2d3436;
                    color: white;
                }

                .nav-item.active {
                    background: #0984e3;
                    color: white;
                    box-shadow: 0 4px 10px rgba(9, 132, 227, 0.3);
                }

                .nav-icon {
                    display: flex;
                    align-items: center;
                }

                .sidebar-footer {
                    margin-top: 2rem;
                    color: #636e72;
                    font-size: 0.8rem;
                    text-align: center;
                    font-family: Quicksand, sans-serif;
                }

                @media (max-width: 992px) {
                    .sidebar {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
