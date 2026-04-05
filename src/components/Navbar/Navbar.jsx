"use client";
import { useState, useRef, useEffect } from "react";
import Logo from "@/ui/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import MobileMenuBtn from "@/ui/MobileMenuBtn/MobileMenuBtn";
import { useClickOutside } from "@/hooks/useClickOutside";
import css from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // закриття мобільного меню по кліку за межами меню
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setIsOpen(false), 50);
    });
    //закриття меню після кліку по пункту меню
    const handleSetActiveMenu = () => {
        setIsOpen(false);
    };

    return (
        <section className={css.navbar} ref={menuRef}>
            <div className="container">
                <div className={css.navbarWrapper}>
                    <Logo />
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
