import Image from "next/image";

type Props = {
  /** LCP: set on the main header instance only */
  priority?: boolean;
};

/**
 * Idle: EZEVIO bar mark (ezevio-logo-2). Hover/focus: crossfades to
 * ezevio-logo-transition (full wordmark), both kept at full white — no dimming.
 */
export function HeaderLogoMark({ priority = false }: Props) {
  return (
    <span className="header__logo-mark">
      <Image
        className="header__logo-default"
        src="/ezevio-logo-2.svg"
        alt="EZEVIO"
        width={226}
        height={59}
        priority={priority}
        unoptimized
      />
      <Image
        className="header__logo-transition"
        src="/ezevio-logo-transition.svg"
        alt=""
        width={308}
        height={72}
        aria-hidden
        unoptimized
      />
    </span>
  );
}
