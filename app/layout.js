import './globals.css';
import Header from './components/Header';
import { RecordProvider } from '../context/RecordContext';

export const metadata = {
  title: 'Service Record Logger',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecordProvider>
          <Header />
          {/* You can wrap children in a main if needed */}
          {children}
        </RecordProvider>
      </body>
    </html>
  );
}
