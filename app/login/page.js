'use client';

import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (role) => {
    if (role === 'user') {
      router.push('/user/dashboard');
    } else if (role === 'admin') {
      router.push('/admin/login');
    }
  };

  return (
    <div className="login-page-bg">
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p>Select your role</p>
          <div className="login-buttons">
            <button onClick={() => handleLogin('user')}>Login as User</button>
            <button onClick={() => handleLogin('admin')}>Login as Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
}
