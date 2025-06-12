
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const useNavbar = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [dropDown, setDropDown] = useState({});
    const navbarLinks = useMemo(() => t("navbarLinks", { returnObjects: true }), [t]);
    const [selectedKey, setSelectedKey] = useState(null);

    function toggleCategory(category) {
        setDropDown((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    }

    function selectedPage() {
        for (const [, links] of Object.entries(navbarLinks)) {
            for (const [key, item] of Object.entries(links)) {
                if (item.to === location.pathname) {
                    setSelectedKey(key);
                    return;
                }
            }
        }
        setSelectedKey(null);
    }


    useEffect(() => {
        selectedPage();
    }, [location.pathname, navbarLinks]);

    useEffect(() => {
        const initialDropdown = {};
        const keys = Object.keys(navbarLinks).filter(k => k);
        keys.forEach((key, index) => {
            initialDropdown[key] = index === 0;
        });
        setDropDown(initialDropdown);
    }, [navbarLinks]);  

    return { t, dropDown, navbarLinks, selectedKey, setSelectedKey, toggleCategory };
}