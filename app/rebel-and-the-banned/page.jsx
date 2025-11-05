import ReleaseShowcase from '../../components/ReleaseShowcase';
import RebelBandGallery from '../../components/RebelBandGallery';
import releases from '../../data/rebel-and-the-banned.json';

export const metadata = {
  title: 'Rebel and the Banned',
  description:
    'Explore the Rebel and the Banned project where King Of Caravans leads the songwriting, complete with gallery and discography.'
};

const RebelAndTheBannedPage = () => (
  <>
    <section className="project-hero">
      <div className="project-hero__content">
        <p className="project-hero__eyebrow">Band Project</p>
        <h1 className="project-hero__title">Rebel and the Banned</h1>
        <p className="project-hero__lead">
          Conceived by King Of Caravans, Rebel and the Banned is a collaborative outlet where the songwriting pen
          stays firmly in-house while the live band fractures the edges of alt-pop, post-punk, and cinematic rock.
        </p>
        <p className="project-hero__body">
          The project celebrates restless storytelling, towering hooks, and widescreen arrangements shaped for glow-lit
          clubs and midnight drives alike. Dig into the latest release below, revisit earlier transmissions, and get a
          feel for the energy with photos straight from the sessions.
        </p>
      </div>

      <RebelBandGallery />
    </section>

    <ReleaseShowcase releases={releases} startTheme="dark" />
  </>
);

export default RebelAndTheBannedPage;
