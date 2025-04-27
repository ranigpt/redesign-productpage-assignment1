import React from 'react';
import PatientSignUpPopup from '@/views/auth/PatientSignUp/Popup';
import { BiBot, BiGlobe, BiMessageSquare, BiTrendingUp } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { LuBuilding2 } from 'react-icons/lu';

const ClaimLandingSection = () => {
    const features = [
        { icon: <BiGlobe className="w-6 h-6 text-primary" />, title: 'Online Website With AI Agent', description: 'Intelligent digital presence' },
        { icon: <LuBuilding2 className="w-6 h-6 text-primary" />, title: 'Build Digital Business', description: 'Scale your operations effortlessly' },
        { icon: <BiMessageSquare className="w-6 h-6 text-primary" />, title: 'Patient Conversations', description: 'Seamless communication with patients' },
        { icon: <BiTrendingUp className="w-6 h-6 text-primary" />, title: 'Boost Revenue', description: 'Accelerate your earnings' },
        { icon: <FaUsers className="w-6 h-6 text-primary" />, title: 'Lead Generation Support', description: 'Turn visitors into loyal clients' },
        { icon: <CgLock className="w-6 h-6 text-primary" />, title: '24/7 Patient Support', description: 'Always-on assistance' }
    ];

    return (
        <section className="bg-gradient-to-br from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-lg flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Section */}
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="bg-primary p-5 rounded-full animate-bounce">
                        <BiBot className="w-12 h-12 text-white" />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            Claim Your Digital Front Office
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Harness the power of AI to transform your online presence and automate patient interactions.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4 w-full max-w-md">
                        <input
                            disabled
                            type="text"
                            placeholder="GoGetWell.ai/your_name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-100 cursor-not-allowed"
                        />
                        <PatientSignUpPopup 
                            hcfLogin 
                            popupButtonStatus 
                            buttonChildren={
                                <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                                    Join the Waiting List
                                </button>
                            } 
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClaimLandingSection;
