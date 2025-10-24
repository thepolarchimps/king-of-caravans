const connectLinks = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/6qRAjPR9U1FVLtZL1NVr7f',
    icon: 'spotify'
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCZr5EDuJeayQMZT6X0hgWAQ',
    icon: 'youtube'
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/king-of-caravans/1492008098',
    icon: 'applemusic'
  },
  {
    label: 'Email',
    href: 'mailto:hello@kingofcaravans.com',
    icon: 'envelope'
  },
  {
    label: 'SoundCloud',
    href: 'https://soundcloud.com/kingofcaravans',
    icon: 'soundcloud'
  }
];

const ConnectPage = () => (
  <div className="page-wrapper">
    <h1>Connect</h1>
    <p className="page-description">
      Follow along, drop us a line, and be first to know about upcoming shows, releases, and collaborations.
    </p>
    <div className="connect-links">
      {connectLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="connect-link"
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <span className="connect-link__label">
            <span className="connect-link__icon" aria-hidden="true">
              {link.icon}
            </span>
            {link.label}
          </span>
          <span aria-hidden="true">{link.href.startsWith('http') ? '>' : ''}</span>
        </a>
      ))}
    </div>
  </div>
);

export default ConnectPage;
