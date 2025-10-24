import ReleaseShowcase from '../components/ReleaseShowcase';
import releases from '../data/releases.json';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'King of Caravans',
  description:
    'Discover the latest King of Caravans releases.'
};

const HomePage = () => (
  <>
    <section className="hero">
      <Image
        src="/images/king-of-caravans-damned-if-you-understand.png"
        alt="King of Caravans artwork collage"
        fill
        priority
        className="hero__image"
        sizes="100vw"
      />
      <div className="hero__content">
        <span className="hero__eyebrow">King of Caravans</span>
        <h1 className="hero__headline">"Found a Ballroom" is out now.</h1>
        <p className="page-description">
          Featuring Maddie Blair and available everywhere you stream—tap below and explore the full catalog.
        </p>
        <Link href="/releases" className="hero__cta">
          <span className="release-link__icon" aria-hidden="true">
            music2
          </span>
          Explore Releases
        </Link>
      </div>
    </section>

    <ReleaseShowcase releases={releases} startTheme="dark" />
  </>
);

export default HomePage;
