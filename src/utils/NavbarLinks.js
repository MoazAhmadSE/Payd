
import * as Icons from "../assets/icons/Navbar/index";

const paymentLinks = [
  { to: "/payments/transactions", Icon: Icons.Transactions, label: "Transactions" },
  { to: "/payments/customers", Icon: Icons.Customers, label: "Customers" },
  { to: "/payments/payouts", Icon: Icons.Payouts, label: "Payouts" },
  { to: "/payments/balances", Icon: Icons.Balances, label: "Balances" },
  { to: "/payments/subscription", Icon: Icons.Subscriptions, label: "Subscriptions" },
  { to: "/payments/paymentplans", Icon: Icons.Paymentplans, label: "Payment Plans" },
];

// const commerceLinks = [
//   { to: "/commerce/products", Icon: Icons.Transactions, label: "Products" },
//   { to: "/commerce/orders", Icon: Icons.Customers, label: "Orders" },
//   { to: "/commerce/inventory", Icon: Icons.Payouts, label: "Inventory" },
// ];

const otherLinks = [
  { to: "/referrals", Icon: Icons.Referrals, label: "Referrals" },
  { to: "/auditlogs", Icon: Icons.Auditlogs, label: "Audit Logs" },
  { to: "/settings", Icon: Icons.Settings, label: "Settings" },
];

export { paymentLinks, otherLinks }