import "./LogoutBtn.css";

export default function LogoutBtn() {
  const handleClick = () => {
    console.log("Logout Sucessfully!");
  };
  return (
    <div className="logoutButton" onClick={() => handleClick()}>
      Logout
    </div>
  );
}
