import React from 'react';
import Image from 'next/image';

const platformDefaults = {
  spotify: { label: 'Spotify', icon: 'spotify' },
  youtube: { label: 'YouTube', icon: 'youtube' },
  applemusic: { label: 'Apple Music', icon: 'applemusic' },
  music: { label: 'Listen', icon: 'music' },
  more: { label: 'More...', icon: 'music2' },
  bandcamp: { label: 'Bandcamp', icon: 'bandcamp' }
};

/**
 * Render a repeating showcase pattern for music releases.
 *
 * @param {{
 *   releases: Array<{
 *     id: string;
 *     title: string;
 *     subtitle?: string;
 *     type?: string;
 *     releaseDate?: string;
 *     artwork: { src: string; alt?: string; width?: number; height?: number; credit?: string };
 *     links: Array<{ url: string; platform?: string; label?: string; icon?: string; priority?: number }>;
 *     theme?: 'light' | 'dark';
 *     layout?: 'art-left' | 'art-right';
 *   }>;
 *   startTheme?: 'light' | 'dark';
 * }} props
 */
const ReleaseShowcase = ({ releases, startTheme = 'dark' }) => {
  const getThemeForIndex = (explicitTheme, index) => {
    if (explicitTheme === 'light' || explicitTheme === 'dark') {
      return explicitTheme;
    }

    const startsDark = startTheme === 'dark';
    const isEven = index % 2 === 0;
    return startsDark ? (isEven ? 'dark' : 'light') : (isEven ? 'light' : 'dark');
  };

  const getLayoutForIndex = (explicitLayout, index) => {
    if (explicitLayout === 'art-left' || explicitLayout === 'art-right') {
      return explicitLayout;
    }

    return index % 2 === 0 ? 'art-right' : 'art-left';
  };

  const normaliseLink = (link) => {
    const platformKey = (link.platform || '').toLowerCase();
    const defaults = platformDefaults[platformKey] || {};

    return {
      ...link,
      label: link.label || defaults.label || link.platform || 'Listen',
      icon: link.icon || defaults.icon || platformKey || 'music'
    };
  };

  const sortedLinks = (links = []) =>
    [...links]
      .map(normaliseLink)
      .sort((a, b) => {
        const aPriority = typeof a.priority === 'number' ? a.priority : Number.POSITIVE_INFINITY;
        const bPriority = typeof b.priority === 'number' ? b.priority : Number.POSITIVE_INFINITY;

        if (aPriority !== bPriority) {
          return aPriority - bPriority;
        }

        return a.label.localeCompare(b.label);
      });

  return (
    <div className="release-showcase">
      {releases.map((release, index) => {
        const theme = getThemeForIndex(release.theme, index);
        const layout = getLayoutForIndex(release.layout, index);
        const isDark = theme === 'dark';
        const key = release.id || `${release.title}-${index}`;
        const subtitle = release.subtitle || release.type;
        const artworkAlt = release.artwork.alt || `${release.title} artwork`;

        return (
          <section
            key={key}
            className={[
              'release-section',
              `release-section--${theme}`,
              layout === 'art-left' ? 'release-section--art-left' : 'release-section--art-right'
            ].join(' ')}
          >
            <div className="release-container">
              <div className="release-grid">
                <div className="release-details">
                  <h2 className="release-title">
                    <span>{release.title}</span>
                    {subtitle ? <small className="release-subtitle">{subtitle}</small> : null}
                  </h2>
                  {release.releaseDate ? (
                    <p className="release-meta">
                      Released <time dateTime={release.releaseDate}>{release.releaseDate}</time>
                    </p>
                  ) : null}
                  <div className="release-links">
                    {sortedLinks(release.links).map((link) => (
                      <a
                        key={`${key}-${link.url}`}
                        className={`release-link ${isDark ? 'release-link--light' : 'release-link--dark'}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} link for ${release.title}`}
                      >
                        <span className="release-link__icon" aria-hidden="true">
                          {link.icon}
                        </span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="release-artwork">
                  <figure className="release-artwork__frame">
                    <Image
                      src={release.artwork.src}
                      alt={artworkAlt}
                      width={release.artwork.width || 600}
                      height={release.artwork.height || 600}
                      sizes="(max-width: 768px) 90vw, 520px"
                    />
                    {release.artwork.credit ? (
                      <figcaption className="release-artwork__credit">{release.artwork.credit}</figcaption>
                    ) : null}
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ReleaseShowcase;
