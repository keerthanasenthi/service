'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="header-title">My Service Records</h2>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
