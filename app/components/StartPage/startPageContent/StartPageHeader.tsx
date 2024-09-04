"use client"
import React from "react";
import { 
    Navbar, 
    NavbarContent, 
    NavbarItem, 
    Button,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
     } from "@nextui-org/react";
import { Link } from 'react-scroll'
import MediaQuery from "react-responsive";

const StartPageHeader = () => {
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Navbar 
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen} 
            shouldHideOnScroll 
            className="h-[81px] w-full bg-[#999999]"
        >
            <MediaQuery maxWidth={699}>
                <NavbarContent justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>
            </MediaQuery>
            <MediaQuery minWidth={700}>
                <NavbarContent
                    justify="center"
                    className="gap-8"
                >
                    <NavbarItem>
                        <Link 
                            activeClass="active" 
                            to="launchpad" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            className="text-[24px] hover:underline cursor-pointer" 
                            color="foreground"
                        >
                            Launchpad
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link 
                            activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            className="text-[24px] hover:underline cursor-pointer" 
                            color="foreground"
                        >
                            About Project
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                        activeClass="active" 
                        to="newsletter" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        className="text-[24px] hover:underline cursor-pointer" 
                        color="foreground"
                        >
                            Newsletter
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </MediaQuery>
            <NavbarContent justify="end">
                <Button
                    style={{
                        width: '154px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: '#D6DA1D',
                        color: '#000',
                        fontSize: '20px',
                    }}
                >
                    <a target="blank" href='/app'>
                        Start App
                    </a>
                </Button>
            </NavbarContent>
            <MediaQuery maxWidth={699}>
                <NavbarMenu>
                    <NavbarMenuItem>
                            <Link 
                                activeClass="active" 
                                to="launchpad" 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                className="text-[24px] hover:underline cursor-pointer" 
                                color="foreground"
                                onClick={closeMenu}
                            >
                                Launchpad
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link 
                                activeClass="active" 
                                to="about" 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                className="text-[24px] hover:underline cursor-pointer" 
                                color="foreground"
                                onClick={closeMenu}
                            >
                                About Project
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link
                            activeClass="active" 
                            to="newsletter" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            className="text-[24px] hover:underline cursor-pointer" 
                            color="foreground"
                            onClick={closeMenu}
                            >
                                Newsletter
                            </Link>
                        </NavbarMenuItem>
                </NavbarMenu>
            </MediaQuery>
        </Navbar>
    )
}

export default StartPageHeader