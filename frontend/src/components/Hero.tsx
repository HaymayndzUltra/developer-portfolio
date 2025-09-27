import Link from 'next/link';
import { memo, type CSSProperties, type FC, type ReactElement } from 'react';

const mountainSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
    <rect width="1440" height="900" fill="#0b1220" />
    <g fill="#132035">
      <path d="M0 720L220 500L460 720Z" opacity="0.55" />
      <path d="M160 720L440 420L760 720Z" opacity="0.7" />
      <path d="M520 720L800 360L1100 720Z" opacity="0.65" />
      <path d="M880 720L1160 460L1440 720Z" opacity="0.58" />
    </g>
    <g fill="#192b45">
      <path d="M0 720L140 560L320 720Z" opacity="0.75" />
      <path d="M260 720L520 460L780 720Z" opacity="0.82" />
      <path d="M720 720L980 420L1240 720Z" opacity="0.78" />
      <path d="M1080 720L1280 540L1440 720Z" opacity="0.8" />
    </g>
    <g fill="#eef2f7" opacity="0.4">
      <circle cx="120" cy="120" r="2" />
      <circle cx="280" cy="80" r="1.6" />
      <circle cx="360" cy="160" r="1.8" />
      <circle cx="520" cy="60" r="2.2" />
      <circle cx="640" cy="140" r="1.4" />
      <circle cx="820" cy="100" r="2" />
      <circle cx="920" cy="180" r="1.5" />
      <circle cx="1080" cy="70" r="2.1" />
      <circle cx="1220" cy="150" r="1.7" />
      <circle cx="1340" cy="90" r="2" />
    </g>
  </svg>
`;

const encodedMountains = encodeURIComponent(mountainSvg);

const heroBackgroundStyle: CSSProperties = {
  backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 198, 46, 0.18), transparent 55%), radial-gradient(circle at 80% 15%, rgba(238, 242, 247, 0.12), transparent 45%), linear-gradient(180deg, rgba(11, 18, 32, 0.65), rgba(11, 18, 32, 0.92)), url("data:image/svg+xml,${encodedMountains}")`,
  backgroundSize: '280px 280px, 360px 360px, cover, cover',
  backgroundPosition: '20% 20%, 80% 10%, center, center',
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
};

interface SocialLinkData {
  href: string;
  label: string;
  icon: ReactElement;
}

interface SocialLinkProps extends SocialLinkData {}

const SocialLink: FC<SocialLinkProps> = ({ href, label, icon }) => (
  <Link
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#eef2f7] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFC62E]/70 hover:text-[#FFC62E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC62E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
    prefetch={false}
  >
    {icon}
  </Link>
);

const SOCIAL_LINKS: SocialLinkData[] = [
  {
    href: 'https://facebook.com',
    label: 'Ray on Facebook',
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M22 12.07C22 6.503 17.523 2 12 2S2 6.503 2 12.07C2 17.097 5.657 21.245 10.438 22v-6.992H7.898v-2.938h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.48h-1.26c-1.243 0-1.63.779-1.63 1.576v1.883h2.773l-.443 2.938h-2.33V22C18.343 21.245 22 17.097 22 12.07Z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com',
    label: 'Ray on X (Twitter)',
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M18.244 2.25h3.358l-7.33 8.376 8.631 11.124H17.05l-4.87-6.367-5.57 6.367H3.25l7.73-8.83-8.296-10.67h7.013l4.395 5.777 4.152-5.777Z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com',
    label: 'Ray on GitHub',
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.863 10.938c.575.108.784-.25.784-.556 0-.274-.01-1.157-.016-2.1-3.2.696-3.877-1.542-3.877-1.542-.523-1.326-1.278-1.68-1.278-1.68-1.043-.714.079-.7.079-.7 1.152.081 1.758 1.186 1.758 1.186 1.026 1.757 2.692 1.25 3.349.956.104-.743.402-1.25.732-1.538-2.555-.291-5.238-1.278-5.238-5.686 0-1.256.452-2.283 1.192-3.088-.12-.292-.517-1.464.114-3.053 0 0 .973-.312 3.187 1.18a11.07 11.07 0 0 1 2.9-.39c.984.005 1.975.133 2.9.39 2.213-1.492 3.184-1.18 3.184-1.18.633 1.589.236 2.761.116 3.053.742.805 1.19 1.832 1.19 3.088 0 4.42-2.688 5.392-5.252 5.677.414.36.782 1.067.782 2.15 0 1.553-.014 2.803-.014 3.184 0 .309.206.67.79.555A11.504 11.504 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
      </svg>
    ),
  },
];

const HeroComponent: FC = () => (
  <section className="relative isolate overflow-hidden bg-[#0b1220] text-[#eef2f7]">
    <div className="absolute inset-0 -z-10" style={heroBackgroundStyle} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/20 via-[#0b1220]/75 to-[#0b1220]" />
      <div className="absolute inset-0 mix-blend-screen opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 10% 15%, rgba(255,198,46,0.18) 0, transparent 55%), radial-gradient(circle at 85% 25%, rgba(255,255,255,0.12) 0, transparent 45%)' }} />
    </div>
    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center sm:gap-12 sm:py-32">
      <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-[#FFC62E]/80">
        Full-Stack Systems Builder
      </span>
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        Hi, I am{' '}
        <span className="text-[#FFC62E] drop-shadow-[0_0_18px_rgba(255,198,46,0.45)]">
          Ray
        </span>
      </h1>
      <p className="max-w-3xl text-base leading-relaxed text-[#eef2f7]/80 sm:text-lg">
        “All communication will be handled in writing to give you a clear, time-saving advantage: every detail is fully documented (so nothing is ever missed), every update is accessible anytime (so you don’t waste time repeating discussions), and every step is transparent (so you’re always in control). This structured system isn’t just more efficient—it’s the safest way to protect your project and guarantee smooth delivery from start to finish.”
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  </section>
);

const Hero = memo(HeroComponent);

export default Hero;
