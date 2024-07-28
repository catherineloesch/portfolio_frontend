const code = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
  >
    <defs>
      <linearGradient id='grad1' x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop
          offset='0%'
          style={{ stopColor: 'rgb(248, 237, 144)', stopOpacity: 1 }}
        />
        <stop offset='100%' style={{ stopColor: '#72f586', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g fill='none' stroke='url(#grad1)' strokeWidth={1.5}>
      <path d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'></path>
      <path
        strokeLinecap='round'
        d='M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305c0 .703-.64 1.237-1.923 2.305L7 15'
      ></path>
    </g>
  </svg>
);

const code2 = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
    <path
      fill='currentColor'
      d='M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z'
    />
  </svg>
);

const code3 = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
    <path
      fill='currentColor'
      d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
    />
  </svg>
);

const dna = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='0.99em'
    height='1em'
    viewBox='0 0 506 512'
  >
    <defs>
      <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop
          offset='0%'
          style={{ stopColor: 'rgb(254, 240, 113)', stopOpacity: 1 }}
        />
        <stop offset='100%' style={{ stopColor: '#72f586', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill='url(#grad1)'
      d='M336.742.004c-5.732-.12-12.481 2.453-19.86 9.18c-46.533 64.308-24.742 112.637.669 195.094c27.589 89.525 3.311 151.023-96.922 122.124l13.974 45.02C356.01 389.67 380.316 301.64 363.98 225.555c-22.331-104.015-54.152-129.427-9.84-196.19c5.233-11.154-2.753-29.053-17.4-29.36M377.2 45.64c-8.08 4.781-10.91 11.338-11.192 25.867c32.625 27.345 60.36 65.991 82.18 93.208c-8.074 4.809-18.18 9.25-29.263 7.892c-10.334-14.493-37.847-47.05-58.236-66.709c1.662 17.845 6.535 31.115 8.014 46.572c31.968 35.89 33.665 54.176 33.665 54.176c41.241 2.092 76.028-15.901 99.24-36.808c12.519-10.748-4.996-39.884-27.34-19.885c-30.184-37.486-61.414-73.664-97.068-104.313m-135.397 90.39c-64.648-.737-110.817 48.596-107.626 112.728c5.05 56.142 30.399 92.912 34.463 138.263l-27.758-31.354c-10.855-1.19-20.37-2.676-32.085 3.792l58.532 61.95c-1.583 9.517-4.242 19.559-8.264 30.318c-22.906-22.013-49.869-55.033-79.44-87.009c-17.09 3.793-26.497 13.47-26.672 13.76l93.326 100.594c-24.194 26.779 17.503 44.953 36.45 23.433c65.193-75.952 14.961-165.88-6.389-252.319l47.519 51.681c16.752 9.187 39.172 8.919 47.482 3.836l-91.225-94.87c4.713-10.523 9.684-13.146 21.044-18.759l88.982 92.74c5.634-10.584 14.017-20.687 3.397-43.3l-57.92-64.106c9.893-3.314 31.811 3.576 48.981 8.943l-14.05-46.836c-9.899-2.252-19.512-3.379-28.747-3.484M98.745 300.054c-45.42-.472-70.368 18.213-91.777 37.05c-19.17 16.978 5.015 47.966 26.71 32.057c27.197-24.263 50.117-37.07 93.589-33.961l-7.754-33.715c-7.374-.905-14.28-1.363-20.768-1.43'
    ></path>
  </svg>
);

const ufo = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
  >
    <defs>
      <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop
          offset='0%'
          style={{ stopColor: 'rgb(254, 240, 113)', stopOpacity: 1 }}
        />
        <stop offset='100%' style={{ stopColor: '#72f586', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill='url(#grad1)'
      fillRule='evenodd'
      d='M5.675 7.593C3.432 8.36 2 9.523 2 10.826C2 13.131 6.477 15 12 15s10-1.869 10-4.174c0-1.303-1.432-2.467-3.675-3.233c-.124.29-.331.584-.668.819C16.869 8.96 15.3 9.5 12 9.5s-4.868-.54-5.657-1.088a1.893 1.893 0 0 1-.668-.819M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m9 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2'
      clipRule='evenodd'
    ></path>
    <path
      fill='url(#grad1)'
      d='M7.055 7.005A4.73 4.73 0 0 1 11.729 3h.542a4.73 4.73 0 0 1 4.674 4.005a.429.429 0 0 1-.145.175c-.414.288-1.61.82-4.8.82c-3.19 0-4.386-.532-4.8-.82a.429.429 0 0 1-.145-.175M6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m12.75.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-6.75.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75'
    ></path>
  </svg>
);

const aboutIcons = {
  codingJourney: {
    src: code,
    className: 'code',
    author: 'iconify.design',
    license: 'https://github.com/iconify/iconify/blob/main/license.txt',
    url: 'https://icon-sets.iconify.design/solar/programming-linear/',
    alt: 'terminal icon, source: iconify - https://icon-sets.iconify.design/solar/programming-linear/, license: https://github.com/iconify/iconify/blob/main/license.txt',
    title:
      '"programming-linear" by iconify.design, available at https://icon-sets.iconify.design/solar/programming-linear/, license: https://github.com/iconify/iconify/blob/main/license.txt',
  },
  codingJourney2: {
    src: code2,
    className: 'code',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/laptop-code?f=classic&s=solid',
    alt: 'laptop icon with code on screen, source: FontAwesome - https://fontawesome.com/icons/laptop-code?f=classic&s=solid, license: https://fontawesome.com/license/free',
    title:
      '"laptop code classic solid" by FontAwesome, available at https://fontawesome.com/icons/laptop-code?f=classic&s=solid, license: https://fontawesome.com/license/free',
  },
  codingJourney3: {
    src: code3,
    name: 'code',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/code?f=classic&s=solid',
    alt: 'html code icon, source: FontAwesome - https://fontawesome.com/icons/code?f=classic&s=solid, licencense: https://fontawesome.com/license/free',
    title:
      '"code classic solid" by FontAwesome, available at:  https://fontawesome.com/icons/code?f=classic&s=solid, licence: https://fontawesome.com/license/free',
  },
  background: {
    src: dna,
    className: 'dna',
    author: 'iconify.design',
    license: 'https://github.com/iconify/iconify/blob/main/license.txt',
    url: 'https://icon-sets.iconify.design/file-icons/dna/',
    alt: 'dna molecule icon, source: iconify.design - https://icon-sets.iconify.design/file-icons/dna/, license: https://github.com/iconify/iconify/blob/main/license.txt',
    title:
      '"solar:programming-linear" by iconify.design, available at https://icon-sets.iconify.design/file-icons/dna/, license: https://github.com/iconify/iconify/blob/main/license.txt',
  },
  interests: {
    src: ufo,
    className: 'ufo',
    author: 'iconify.design',
    license: 'https://github.com/iconify/iconify/blob/main/license.txt',
    url: 'https://icon-sets.iconify.design/solar/ufo-2-bold/',
    alt: 'ufo icon, source: iconify.design - https://icon-sets.iconify.design/solar/ufo-2-bold/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
    title:
      '"solar:ufo-2-bold" by iconify.design, available at: https://icon-sets.iconify.design/solar/ufo-2-bold/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
  },
};

export default aboutIcons;
