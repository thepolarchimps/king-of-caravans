import './globals.css';
import '../styles/release-showcase.css';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'King of Caravans',
  description: 'The official home for King of Caravans releases, updates, and connections.',
  icons: {
    icon: '/images/favicon.ico'
  }
};

const RootLayout = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head />
      <body>
        <Script src="https://use.typekit.net/wmp7jky.js" strategy="beforeInteractive" />
        <Script id="adobe-typekit" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
        <div className="app-shell">
          <header className="site-header">
            <div className="site-header__inner">
              <Link href="/" className="site-title">
                King of Caravans
              </Link>
              <Navigation />
            </div>
          </header>

          <main className="app-content">{children}</main>

          <footer className="site-footer">
            © {currentYear} King of Caravans. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
