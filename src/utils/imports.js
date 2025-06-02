import { lazy } from "react";

const Dashboard = {
    Chatbar: lazy(() => import("../components/Chatbar/Chatbar")),
    Navbar: lazy(() => import("../components/Navbar/Navbar")),
    Topbar: lazy(() => import("../components/Topbar/Topbar")),
    Outlet: lazy(() => import("../css/Dashboard.css")),
    Suspense: lazy(() => import("../assets/icons/Dashboard/index")),
    useState: lazy(() => import("react-router-dom")),
    motion: lazy(() => import("react")),
    AnimatePresence: lazy(() => import("framer-motion")),
    useUser: lazy(() => import("../context/UserInfo")),
    Loading: lazy(() => import("../components/Loading")),
}
import { Chatbar } from "../components/Chatbar/Chatbar";
import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import "../css/Dashboard.css";
import * as Icon from "../assets/icons/Dashboard/index";
import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "../context/UserInfo";
import Loading from "../components/Loading";