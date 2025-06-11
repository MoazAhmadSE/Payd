import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";

import Dashboard from "../pages/Dashboard";
const Transactions = lazy(() => import("../pages/payments/Transactions"));
const Customers = lazy(() => import("../pages/payments/Customers"));
const Payouts = lazy(() => import("../pages/payments/Payouts"));
const Balances = lazy(() => import("../pages/payments/Balances"));
const Subscriptions = lazy(() => import("../pages/payments/Subscriptions"));
const PaymentPlan = lazy(() => import("../pages/payments/PaymentPlan"));
const Referrals = lazy(() => import("../pages/others/Referrals"));
const AuditLogs = lazy(() => import("../pages/others/AuditLogs"));
const Settings = lazy(() => import("../pages/others/Settings"));
const NotFound = lazy(() => import("../pages/others/NotFound"));
const HomePage = lazy(() => import("../pages/HomePage"));

export default function AppRouters() {
  return (
    // <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomePage />} />
        <Route path="payments/transactions" element={<Transactions />} />
        <Route path="payments/customers" element={<Customers />} />
        <Route path="payments/payouts" element={<Payouts />} />
        <Route path="payments/balances" element={<Balances />} />
        <Route path="payments/subscriptions" element={<Subscriptions />} />
        <Route path="payments/paymentplans" element={<PaymentPlan />} />
        <Route path="referrals" element={<Referrals />} />
        <Route path="auditlogs" element={<AuditLogs />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </Suspense>
  );
}
