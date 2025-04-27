import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LinkItem {
    text: string;
    path: string;
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
];

const MainFooter: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 py-4 bg-white">
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
                {/* Copyright Section */}
                <h1 className="text-xs text-black md:text-sm text-center w-full">
                    © {new Date().getFullYear()} gogetwell.ai
                </h1>

                {/* Footer Links */}
                <ul className="mt-4 md:mt-0 flex gap-x-3 flex-wrap gap-y-3 mx-auto text-xs text-black text-center">
                    {links.map((item, i) => (
                        <li key={i} className="hover:underline hover:text-blue-500">
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Social Icons Section */}
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <Link
                        to="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <FaTwitter size={25} className="text-primary" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <FaLinkedinIn size={25} className="text-primary" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
