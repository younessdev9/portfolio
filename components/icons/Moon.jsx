export default function MoonIcon({ fillColor = '#000', ...props }) {
  return (
    <svg
      className="prefix__w-8 prefix__h-8 prefix__text-black prefix__cursor-pointer"
      fill={fillColor}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.35 15.35a9 9 0 01-11.7-11.7A9 9 0 0012 21a9 9 0 008.35-5.65z"
      />
    </svg>
  );
}
