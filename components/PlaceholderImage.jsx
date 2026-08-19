const iconPaths = {
  photo:
    'M4 16l4.5-5.5a2 2 0 0 1 3.1 0L16 16M14 13.5l1.4-1.7a2 2 0 0 1 3.1 0L21 15M4 6.5h16A1.5 1.5 0 0 1 21.5 8v9A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17V8A1.5 1.5 0 0 1 4 6.5Z',

  people:
    'M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 12.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM2.5 20c.6-3.4 3.1-5.5 5.9-5.5s5.3 2.1 5.9 5.5M14.5 20c.4-2.5 2-4.4 4-5.1a5 5 0 0 1 3 0',

  map:
    'M9 4.5 3.5 6.5v13L9 17.5m0-13 6 2m-6-2v13m6-11 5.5-2v13L15 19.5m0-13v13m0-13-6 2',
};

export default function PlaceholderImage({
  icon = 'photo',
  file,
  className = '',
  tone = 'light',
}) {
  const tones = {
    light: 'from-navy-50 via-navy-100 to-navy-200 text-navy-300',
    dark: 'from-navy-600 via-navy-700 to-navy-800 text-navy-500',
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      {file ? (
        <img
          src={file}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-10 w-10 opacity-70"
          aria-hidden="true"
        >
          <path
            d={iconPaths[icon]}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}