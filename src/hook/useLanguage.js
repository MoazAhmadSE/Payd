
import { useEffect, useRef, useState } from "react";
import { LanguageAPI } from "../api/Topbar";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
    const { t, i18n } = useTranslation();
    const languages = t("languages", { returnObjects: true });
    const dropdownRef = useRef();

    const storedLang = localStorage.getItem("i18nextLng") || "en";
    const initialLang = storedLang;

    const [dropDown, setDropDown] = useState({
        selectedLanguage: initialLang,
        isLanguageSelecterOpen: false,
    });

    function handleClickOutside(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropDown((prev) => ({
                ...prev,
                isLanguageSelecterOpen: false,
            }));
        }
    }

    function changeLanguage(language) {
        i18n.changeLanguage(language);
        localStorage.setItem("i18nextLng", language);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const code = dropDown.selectedLanguage;
        changeLanguage(code);
        LanguageAPI(code);
    }, [dropDown.selectedLanguage]);

    return {
        dropdownRef,
        dropDown,
        setDropDown,
        languages,
    };
};
