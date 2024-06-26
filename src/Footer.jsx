import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-300 w-full py-5 text-center">
      <p className="text-black">
        Copyright © 2024 - All rights reserved by{" "}
        <Link to="https://t.me/azikodev/" target="_blank" className="link">
         Azizbek Ahmadjonov
        </Link>
      </p>
    </div>
  );
}

export default Footer;
