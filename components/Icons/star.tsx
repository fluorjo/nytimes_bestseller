const StarIcon = ({ gradientId, startColor, stopColor, fillColor, ...props }) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--fxemoji"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={startColor} />
        <stop offset="100%" stopColor={stopColor} />
      </linearGradient>
    </defs>
    <path
      fill={`url(#${gradientId})`} 
      d="M252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1z"
    />
    <path
      fill={fillColor} 
      d="M456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5c-1.6.2-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4z"
    />
    <path
      fill={fillColor} 
      d="M149.1 95.2l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4c.2 1.6 1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4z"
    />
    <path
      fill={fillColor} 
      d="M289.8 505.2l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6c1 1.3 2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7z"
    />
  </svg>
);

export const GoldIcon = (props) => (
  <StarIcon
    gradientId="gold-gradient"
    startColor="#fffd97"
    stopColor="#ffc400"
    fillColor="#fff6ca"
    {...props}
  />
);

export const SilverIcon = (props) => (
  <StarIcon
    gradientId="silver-gradient"
    startColor="#D7D8D4"
    stopColor="#868B96"
    fillColor="#bdbdbd"
    {...props}
  />
);
export const BronzeIcon = (props) => (
  <StarIcon
    gradientId="bronze-gradient"
    startColor="#CD7F32"
    stopColor="#8C7853"
    fillColor="#dc8752"
    {...props}
  />
);
export const DefaultIcon = (props) => (
  <StarIcon
    gradientId="dafault-gradient"
    startColor="#89786d"
    stopColor="#aeaeae89"
    fillColor="none"
    {...props}
  />
);

export default StarIcon;
