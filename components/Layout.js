import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import MobileNavbar from './MobileNavbar';

export default function Layout({ activeSection, setActiveSection, children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeSection]);

    return (
        <div className="app-container">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <MobileNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
            
            <main className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </main>

            <style jsx>{`
                .app-container {
                    display: flex;
                    min-height: 100vh;
                    background-color: #2d3436;
                }

                .main-content {
                    flex: 1;
                    margin-left: 320px; /* Width of sidebar */
                    background-color: #2d3436;
                    min-height: 100vh;
                    position: relative;
                }

                .content-wrapper {
                    padding: 3rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    min-height: 100vh;
                    box-sizing: border-box;
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 992px) {
                    .main-content {
                        margin-left: 0;
                        padding-top: 80px; /* Height of mobile nav */
                    }

                    .content-wrapper {
                        padding: 2rem 1.5rem;
                        min-height: auto;
                    }
                }
            `}</style>
        </div>
    );
}
