import React from 'react'
import smallBG from '@/assets/images/main-bg-small.png'
import { Button } from '@/components/ui'
import HomeNavbar from '@/components/shared/HomeNav'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="w-full relative flex flex-col bg-gradient-to-r from-[#01052f] to-[#020736] overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Hero Main Section */}
            <div className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 md:px-16 lg:px-32 relative z-10 text-white">
                
                {/* Mobile Background Image */}
                <img
                    src={smallBG}
                    alt="background"
                    className="absolute md:hidden top-0 left-0 w-full h-full object-cover z-[-10]"
                />

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]" />

                {/* Content */}
                <div className="text-center md:text-left flex flex-col gap-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <span className="text-primary">AI Front Office</span> <br /> for Healthcare Agents
                    </h1>

                    <p className="text-lg md:text-2xl font-light max-w-xl mx-auto md:mx-0">
                        Create <span className="text-primary font-bold">AI Store</span> in 2 minutes.
                        <br />
                        Scale with <span className="text-primary font-bold">Digital Marketing</span>.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <HcfSignupPopup 
                            popupButtonStatus 
                            buttonChildren={
                                <Button 
                                    variant="solid" 
                                    size="lg" 
                                    className="rounded-full w-[220px] py-3 text-lg font-semibold"
                                >
                                    Get Started
                                </Button>
                            } 
                        />
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="w-full py-10 bg-[#01052f] text-white flex justify-center gap-8 md:gap-16 flex-wrap">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        2100<span className="text-primary">+</span>
                    </h2>
                    <p className="mt-2 text-lg">Qualified Doctors</p>
                </div>
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        1000<span className="text-primary">+</span>
                    </h2>
                    <p className="mt-2 text-lg">Hospitals</p>
                </div>
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        800<span className="text-primary">+</span>
                    </h2>
                    <p className="mt-2 text-lg">Treatment Plans</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
