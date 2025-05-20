import { Link } from "react-router-dom";
import "./Navbar.css";
import * as Icons from "../../assets/icons/Navbar/index";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="montserrat-appname">Payd</h1>
      <div className="navbar-catagory">
        <h2>Payments</h2>
        <Icons.Dropdown />
      </div>
      <div>
        <Link to={"/payments/transactions"} className="navbar_Links">
          <Icons.Transactions />
          <h3>Transactions</h3>
        </Link>
        <Link to={"/payments/customers"} className="navbar_Links">
          <Icons.Customers />
          <h3>Customers</h3>
        </Link>
        <Link to={"/payments/payouts"} className="navbar_Links">
          <Icons.Payouts />
          <h3>Payouts</h3>
        </Link>
        <Link to={"/payments/balances"} className="navbar_Links">
          <Icons.Balances />
          <h3>Balances</h3>
        </Link>
        <Link to={"/payments/subscription"} className="navbar_Links">
          <Icons.Subscriptions />
          <h3>Subscriptions</h3>
        </Link>
        <Link to={"/payments/paymentplans"} className="navbar_Links">
          <Icons.Paymentplans />
          <h3>Payment Plans</h3>
        </Link>
      </div>
    </div>
  );
};
