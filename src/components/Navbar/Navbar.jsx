"use client";
import { useState, useRef } from "react";
import Logo from "@/ui/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import MobileMenuBtn from "@/ui/MobileMenuBtn/MobileMenuBtn";
import { useClickOutside } from "@/hooks/useClickOutside";
import css from "./Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    // закриття мобільного меню по кліку за межами меню
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setIsOpen(false), 50);
    });

    //закриття меню після кліку по пункту меню
    const handleSetActiveMenu = () => {
        setIsOpen(false);
    };

    // зміна класів стилів при скролі десктоп
    const changeNavbarStylesOnScroll = () => {
        if (window.scrollY > 350) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeNavbarStylesOnScroll);
    }

    return (
        <section className={navbar ? css.scrolled : css.navbar} ref={menuRef}>
            <div className="container">
                <div className={css.navbarWrapper}>
                    <a href="/">
                        <Logo />
                    </a>
                    <Navigation
                        isOpen={isOpen}
                        handleSetActiveMenu={handleSetActiveMenu}
                    />
                    <MobileMenuBtn
                        isActive={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
        </section>
    );
};

export default Navbar;
