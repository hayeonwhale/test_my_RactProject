import React from 'react';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-white/20 backdrop-blur-lg border-t border-white/20 text-slate-700">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="md:col-span-1">
                        <h4 className="font-semibold mb-2">Copyright</h4>
                        <p className="text-sm">&copy; {new Date().getFullYear()} 방하연. All rights reserved.</p>
                    </div>
                    <div className="md:col-span-1">
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                            <a href="mailto:hayeonwhale07@gmail.com" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                                <MailIcon className="w-4 h-4" />
                                <span>hayeonwhale07@gmail.com</span>
                            </a>
                        </div>
                         <div className="flex items-center justify-center md:justify-start gap-4 text-sm mt-2">
                            <a href="https://www.instagram.com/rhfoyhb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                                <InstagramIcon className="w-4 h-4" />
                                <span>rhfoyhb</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <h4 className="font-semibold mb-2">Address</h4>
                        <p className="text-sm">경기도 성남시 분당구 하오개로 351번길 4</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;