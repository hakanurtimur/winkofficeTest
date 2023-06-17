import Link from "next/link";
import React from "react";

const MainNavigation = () => {
  return (
    <header>
      <h1>Next Auth</h1>
      <nav>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
