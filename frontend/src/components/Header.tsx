// Importing the `useNavigate` hook from `react-router-dom` to navigate between routes programmatically
import { useNavigate } from 'react-router-dom';
// Importing the logo image
import logo from '../assets/react.svg';

// Defining the Header component responsible for rendering the header section of the application
export default function Header({connectWallet, account}: {connectWallet: any; account: string | null;}) {
    // Using the `useNavigate` hook to get the navigate function for routing
    const navigate = useNavigate();

    // Rendering the header section with logo, site name, and navigation links
    return (
        <header className="bg-sky-500 text-sky-100 py-4 px-6 shadow-lg sticky w-full top-0 z-20 backdrop-blur-lg">
            {/* Div containing header content */}
            <div className="flex justify-between items-center">
                {/* Button with logo and site name */}
                <button className="flex items-center space-x-2"
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
                    <h1 className="text-lg font-semibold">Cool Name</h1>
                </button>
                {/* Navigation links */}
                <nav>
                    {/* Unordered list of navigation links */}
                    <ul className="flex space-x-4">
                        {/* Navigation link for the Home page */}
                        <li>
                            <button className="hover:text-gray-300"
                                // Navigate to the Home page when the button is clicked
                                onClick={() => navigate('/')}
                            >
                                Home
                            </button>
                        </li>
                        {/* Navigation link for the About page */}
                        <li>
                            <button className="hover:text-gray-300"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/about')}
                            >
                                About
                            </button>
                        </li>
                    </ul>
                </nav>
                <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-primary-600"
                    onClick={connectWallet}
                >
                    {account ? "Connected: " + account?.substring(0,5) + "..." + account?.substring(38, 42) : "Connect Wallet"}
                </button>
            </div>
        </header>
    );
}