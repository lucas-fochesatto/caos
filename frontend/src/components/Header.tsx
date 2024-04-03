// Importing the `useNavigate` hook from `react-router-dom` to navigate between routes programmatically
import { useNavigate } from 'react-router-dom';
// Importing the logo image
import logo from '../assets/logoCaos.png';

// Defining the Header component responsible for rendering the header section of the application
export default function Header({connectWallet, account}: {connectWallet: any; account: string | null;}) {
    // Using the `useNavigate` hook to get the navigate function for routing
    const navigate = useNavigate();

    // Rendering the header section with logo, site name, and navigation links
    return (
        <header className="bg-darkColor text-sky-100 py-4 px-6 shadow-lg sticky w-full top-0 z-20 backdrop-blur-lg">
            {/* Div containing header content */}
            <div className="flex justify-between items-center">
                {/* Button with logo and site name */}
                <button className="ml-20 flex items-center space-x-2"
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
                    <h1 className=" text-white font-light">DAO your building</h1>
                </button>
                {/* Navigation links */}
                <nav>
                    {/* Unordered list of navigation links */}
                    <ul className="flex space-x-4 gap-8">
                        {/* Navigation link for the OR page */}
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the Home page when the button is clicked
                                onClick={() => navigate('/or')}
                            >
                                Owner Relations
                            </button>
                        </li>
                        {/* Navigation link for the Service Requests page */}
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the Home page when the button is clicked
                                onClick={() => navigate('/sr')}
                            >
                                Service Requests
                            </button>
                        </li>
                        {/* Navigation link for the About page */}
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/dashboards')}
                            >
                                Dashboards
                            </button>
                        </li>
                        <li>
                            <button className="text-lg text-mainColor hover:text-secondColor"
                                // Navigate to the About page when the button is clicked
                                onClick={() => navigate('/reports')}
                            >
                                Reports
                            </button>
                        </li>
                    </ul>
                </nav>
                <button
                    className="mr-20 px-4 py-2 bg-mainColor text-white rounded shadow hover:bg-secondColor"
                    onClick={connectWallet}
                >
                    {account ? "Connected: " + account?.substring(0,5) + "..." + account?.substring(38, 42) : "Connect Wallet"}
                </button>
            </div>
        </header>
    );
}