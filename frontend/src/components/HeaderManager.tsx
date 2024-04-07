// Importing the `useNavigate` hook from `react-router-dom` to navigate between routes programmatically
import { useNavigate } from 'react-router-dom';
// Importing the logo image
import logo from '../assets/logoCaos.png';
import './Header.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { MetaMaskButton } from '@metamask/sdk-react-ui';

// Defining the Header component responsible for rendering the header section of the application
export default function HeaderManager() {
    // Using the `useNavigate` hook to get the navigate function for routing
    const navigate = useNavigate();

    // Rendering the header section with logo, site name, and navigation links
    return (
        <header className="bg-darkColor text-sky-100 py-4 px-20 shadow-lg sticky w-full top-0 z-20 backdrop-blur-lg">
            {/* Div containing header content */}
            <div className="flex justify-between items-center">
                {/* Button with logo and site name */}
                <button className="flex items-center space-x-6"
                    // Navigate to the home page when the button is clicked
                    onClick={() => navigate('/')}
                >
                    {/* Displaying the logo */}
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="h-8" 
                    />
                    {/* Displaying the site name */}
                    <h1 className="text-white font-light">dao your building</h1>
                </button>
                <nav>
                    {/* Unordered list of navigation links */}
                    <ul className="flex space-x-4 gap-8">
                            {/* Navigation link for the About page */}
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/manager/overview')}
                            >
                                Overview
                            </button>
                        </li>
                        {/* Navigation link for the Service Requests page */}
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the Home page when the button is clicked
                                onClick={() => navigate('/requests')}
                            >
                                Requests
                            </button>
                        </li>
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/manager/reports')}
                            >
                                Reports
                            </button>
                        </li>                        
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/events')}
                            >
                                Events
                            </button>
                        </li>
                    </ul>
                </nav>
                <MetaMaskButton/>
            </div>
        </header>
    );
}