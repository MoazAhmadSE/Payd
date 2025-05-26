import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Transactions } from "../pages/payments/Transactions";
import { Customers } from "../pages/payments/Customers";
import { Payouts } from "../pages/payments/Payouts";
import { Balances } from "../pages/payments/Balances";
import { Subscriptions } from "../pages/payments/Subscriptions";
import { PaymentPlan } from "../pages/Payments/PaymentPlan";
import { Referrals } from "../pages/Referrals";
import { AuditLogs } from "../pages/AuditLogs";
import { Settings } from "../pages/Settings";
import { NotFound } from "../pages/NotFound";
import HomePage from "../pages/HomePage";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments/transactions" element={<Transactions />} />
        <Route path="/payments/customers" element={<Customers />} />
        <Route path="/payments/payouts" element={<Payouts />} />
        <Route path="/payments/balances" element={<Balances />} />
        <Route path="/payments/subscription" element={<Subscriptions />} />
        <Route path="/payments/paymentplans" element={<PaymentPlan />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/auditlogs" element={<AuditLogs />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
