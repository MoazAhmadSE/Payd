import { useEffect, useMemo, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useT } from "../context/TranslationContext";
export const useNavbar = () => {
    const location = useLocation();
    const t = useT();
    const [dropDown, setDropDown] = useState({});
    const navbarLinks = useMemo(() => t("navbarLinks", { returnObjects: true }), [t]);
    const [selectedKey, setSelectedKey] = useState(null);

    const toggleCategory = (category) => {
        setDropDown((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const selectedPage = useCallback(() => {
        const found = Object.entries(navbarLinks).find(([, links]) =>
            Object.entries(links).find(([, item]) => item.to === location.pathname)
        );

        if (found) {
            const [, links] = found;
            const [key] = Object.entries(links).find(([, item]) => item.to === location.pathname);
            setSelectedKey(key);
        } else {
            setSelectedKey(null);
        }
    }, [location.pathname, navbarLinks]);

    useEffect(() => {
        selectedPage();
    }, [selectedPage]);

    useEffect(() => {
        const initialDropdown = {};
        const keys = Object.keys(navbarLinks).filter((k) => k);
        keys.forEach((key, index) => {
            initialDropdown[key] = index === 0;
        });
        setDropDown(initialDropdown);
    }, [t, navbarLinks]);

    return { t, dropDown, navbarLinks, selectedKey, setSelectedKey, toggleCategory };
}