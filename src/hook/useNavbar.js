
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const useNavbar = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [dropDown, setDropDown] = useState({
        Payments: true,
        Commerce: false,
    });
    const navbarLinks = t("navbarLinks", { returnObjects: true });
    const [selectedKey, setSelectedKey] = useState(null);

    function toggleCategory(category) {
        setDropDown((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    }

    function selectedPage() {
        for (const [category, links] of Object.entries(navbarLinks)) {
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

    return { t, dropDown, navbarLinks, selectedKey, setSelectedKey, toggleCategory };
}