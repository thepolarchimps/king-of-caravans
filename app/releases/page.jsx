import ReleaseShowcase from '../../components/ReleaseShowcase';
import releases from '../../data/releases.json';

const ReleasesPage = () => (
  <>
    <div className="page-wrapper">
      <h1>Releases</h1>
      <p className="page-description">
        Every King of Caravans drop in one place. Tap a platform to listen or follow for the next
        transmission.
      </p>
    </div>
    <ReleaseShowcase releases={releases} startTheme="dark" />
  </>
);

export default ReleasesPage;
