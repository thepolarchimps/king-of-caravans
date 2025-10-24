import './globals.css';
import '../styles/release-showcase.css';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Script from 'next/script';

const siteUrl = 'https://kingofcaravans.co.uk';
const siteName = 'King of Caravans';
const siteDescription =
  'Official home of King of Caravans — explore releases, connect on socials, and keep up with new music.';
const coverImage = '/images/FacingTheStrange7.1001.jpg';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    'King of Caravans',
    'music releases',
    'alternative rock',
    'indie music',
    'UK artists'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/images/favicon.png',
    apple: '/images/webclip.png'
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: coverImage,
        width: 1200,
        height: 1200,
        alt: 'King of Caravans cover art'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [coverImage],
    creator: '@kingofcaravans'
  },
  themeColor: '#000000',
  alternates: {
    canonical: '/'
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  genre: ['Alternative Rock', 'Indie Rock'],
  image: `${siteUrl}${coverImage}`,
  sameAs: [
    'https://open.spotify.com/artist/6qRAjPR9U1FVLtZL1NVr7f',
    'https://www.youtube.com/channel/UCZr5EDuJeayQMZT6X0hgWAQ',
    'https://music.apple.com/us/artist/king-of-caravans/1492008098',
    'https://soundcloud.com/kingofcaravans'
  ],
  member: [
    {
      '@type': 'Person',
      name: 'King of Caravans'
    }
  ]
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
        <Script
          id="music-group-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
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
