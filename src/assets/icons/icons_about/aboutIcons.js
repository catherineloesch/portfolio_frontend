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
          style={{ stopColor: 'rgb(223, 219, 183)', stopOpacity: 1 }}
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

const github = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
    <path
      fill='currentColor'
      d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
    />
  </svg>
);

const link = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='2em'
    height='2em'
    viewBox='0 0 56 56'
    className='link-icon'
  >
    <path
      fill='currentColor'
      d='M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m10.406-34.804c2.906 2.882 2.649 6.445-.703 9.773l-4.031 4.055c.328-1.125.305-2.438-.07-3.328l2.367-2.368c2.297-2.25 2.554-4.617.726-6.422c-1.804-1.78-4.172-1.5-6.422.75l-3.351 3.305c-2.32 2.344-2.625 4.735-.797 6.516c.539.562 1.336.914 2.367 1.101c-.352.75-1.078 1.618-1.758 2.086c-.703-.117-1.594-.68-2.344-1.453c-2.906-2.883-2.601-6.492.797-9.914l3.422-3.398c3.352-3.352 6.914-3.586 9.797-.703M16.75 38.758c-2.906-2.883-2.649-6.446.727-9.774l4.03-4.054c-.35 1.125-.327 2.437.048 3.328l-2.368 2.367c-2.297 2.227-2.554 4.617-.726 6.422c1.805 1.781 4.195 1.5 6.422-.75l3.351-3.305c2.32-2.344 2.625-4.734.797-6.515c-.539-.563-1.336-.915-2.367-1.102c.351-.75 1.078-1.617 1.758-2.086c.703.117 1.593.68 2.367 1.453c2.883 2.883 2.578 6.469-.82 9.89l-3.422 3.423c-3.352 3.351-6.914 3.586-9.797.703'
    ></path>
  </svg>
);

const blog = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path
      fill='currentColor'
      d='M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-16 0 0 96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l0-224z'
    />
  </svg>
);

const forum = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M7 18q-.425 0-.712-.288T6 17v-2h13V6h2q.425 0 .713.288T22 7v15l-4-4zm-5-1V3q0-.425.288-.712T3 2h13q.425 0 .713.288T17 3v9q0 .425-.288.713T16 13H6z'
    ></path>
  </svg>
);

const youtube = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
  >
    <g fill='none' fillRule='evenodd'>
      <path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
      <path
        fill='currentColor'
        d='M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z'
      ></path>
    </g>
  </svg>
);

const linkedin = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path
      fill='currentColor'
      d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
    />
  </svg>
);

const mastodon = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path
      fill='currentColor'
      d='M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z'
    />
  </svg>
);

const podcast = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path
      fill='currentColor'
      d='M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'
    />
  </svg>
);

const newsletter = (
  <svg x='0px' y='0px' viewBox='0 0 512 512'>
    <path
      fill='currentColor'
      d='M494.4,169.3c-12-9.8-28.5-23.2-46.4-37.7v41.1c11.1,8.9,20.3,16.4,26.1,21.2c3.7,3,5.9,7.6,5.9,12.4V464
	c0,8.8-7.2,16-16,16h0H48c-8.8,0-16-7.2-16-16V206.2c0-4.8,2.2-9.4,5.9-12.4c5.8-4.8,15-12.2,26.1-21.2v-41
	c-17.9,14.5-34.4,27.9-46.4,37.7C6.5,178.4,0,192,0,206.4V464c0,26.5,21.5,48,48,48h416c26.5,0,48-21.5,48-48V206.4
	C512,192,505.5,178.4,494.4,169.3z'
    />
    <path
      fill='currentColor'
      d='M400,49.9H112c-26.5,0-48,21.5-48,48v157.5c4.3-3.2,10.3-3.2,14.6,0.3c5.2,4.2,11,8.9,17.4,14v-8V97.9c0-8.8,7.2-16,16-16
	h288c8.8,0,16,7.2,16,16v171.8c6.3-5.1,12.1-9.7,17.4-14c4.3-3.5,10.4-3.5,14.6-0.3V97.9C448,71.4,426.5,49.9,400,49.9z'
    />
    <path
      fill='currentColor'
      d='M256,32c12.1,0,26.3,8.1,39.7,17.9h50.7C325.1,32.4,291.3,0,256,0c-35.1,0-68.4,31.8-90.4,49.9h50.7
	C229.7,40.1,244,32,256,32z'
    />
    <path
      fill='currentColor'
      d='M455.2,263.7c4.2,5.2,3.4,12.7-1.8,16.9c-22.8,18.4-55.1,44.2-104.2,83.1c-21,16.8-56.9,52.5-93.3,52.3
	c-36.6,0.3-72.8-35.9-93.3-52.3c-49-38.9-81.3-64.7-104.1-83.1c-5.2-4.2-6-11.7-1.8-16.9l5-6.2c4.2-5.1,11.7-5.9,16.8-1.8
	c22.8,18.4,55,44.1,103.9,83c16.9,13.4,50.2,45.7,73.4,45.3c23.2,0.4,56.6-31.9,73.4-45.3c48.9-38.8,81.2-64.6,103.9-83
	c5.1-4.2,12.7-3.4,16.8,1.8L455.2,263.7z'
    />
    <path
      fill='currentColor'
      d='M160,269.9v-8c0-6.6,5.4-12,12-12h168c6.6,0,12,5.4,12,12v8c0,6.6-5.4,12-12,12H172C165.4,281.9,160,276.5,160,269.9z'
    />
    <path
      fill='currentColor'
      d='M160,205.9v-8c0-6.6,5.4-12,12-12h168c6.6,0,12,5.4,12,12v8c0,6.6-5.4,12-12,12H172C165.4,217.9,160,212.5,160,205.9z'
    />
    <path
      fill='currentColor'
      d='M160,141.9v-8c0-6.6,5.4-12,12-12h168c6.6,0,12,5.4,12,12v8c0,6.6-5.4,12-12,12H172C165.4,153.9,160,148.5,160,141.9z'
    />
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
  github: {
    src: github,
    className: 'github',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/github?f=brands&s=solid',
    alt: 'github icon, source: FontAwesome - https://fontawesome.com/icons/github?f=brands&s=solid, licence: https://fontawesome.com/license/free',
    title:
      '"github" by FontAwesome, available at: https://fontawesome.com/icons/github?f=brands&s=solid, licence: https://fontawesome.com/license/free',
  },
  website: {
    src: link,
    className: 'website',
    author: 'iconify.design',
    license: 'https://github.com/iconify/iconify/blob/main/license.txt',
    url: 'https://icon-sets.iconify.design/f7/link-circle-fill/',
    alt: 'link icon, source: iconify.design - https://icon-sets.iconify.design/f7/link-circle-fill/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
    title:
      '"link-circle-fill" by iconify.design, available at: https://icon-sets.iconify.design/f7/link-circle-fill/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
  },
  blog: {
    src: blog,
    className: 'blog',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/blog?f=classic&s=solid',
    alt: 'blog icon, source: FontAwesome - https://fontawesome.com/icons/blog?f=classic&s=solid, licence: https://fontawesome.com/license/free',
    title:
      '"blog" by FontAwesome, available at: https://fontawesome.com/icons/blog?f=classic&s=solid, licence: https://fontawesome.com/license/free',
  },
  forum: {
    src: forum,
    className: 'forum',
    author: 'iconify.design',
    license: 'https://github.com/iconify/iconify/blob/main/license.txt',
    url: 'https://icon-sets.iconify.design/material-symbols/forum/',
    alt: 'link icon, source: iconify.design - https://icon-sets.iconify.design/material-symbols/forum/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
    title:
      '"material-symbols:forum" by iconify.design, available at: https://icon-sets.iconify.design/material-symbols/forum/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
  },
  youtube: {
    src: youtube,
    className: 'youtube',
    author: 'iconify.design',
    license: 'https://github.com/iconify/iconify/blob/main/license.txt',
    url: 'https://icon-sets.iconify.design/mingcute/youtube-fill/',
    alt: 'youtube icon, source: iconify.design -https://icon-sets.iconify.design/mingcute/youtube-fill/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
    title:
      '"youtube" by iconify.design, available at: https://icon-sets.iconify.design/mingcute/youtube-fill/, licence: https://github.com/iconify/iconify/blob/main/license.txt',
  },
  linkedin: {
    src: linkedin,
    className: 'linkedin',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/linkedin?f=brands&s=solid',
    alt: 'linkedin icon, source: FontAwesome - https://fontawesome.com/icons/linkedin?f=brands&s=solid, licence: https://fontawesome.com/license/free',
    title:
      '"linkedin" by FontAwesome, available at: https://fontawesome.com/icons/linkedin?f=brands&s=solid, licence: https://fontawesome.com/license/free',
  },
  mastodon: {
    src: mastodon,
    className: 'mastodon',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/mastodon?f=brands&s=solid',
    alt: 'mastodon icon, source: FontAwesome - https://fontawesome.com/icons/mastodon?f=brands&s=solid, licence: https://fontawesome.com/license/free',
    title:
      '"mastodon" by FontAwesome, available at: https://fontawesome.com/icons/mastodon?f=brands&s=solid, licence: https://fontawesome.com/license/free',
  },
  podcast: {
    src: podcast,
    className: 'podcast',
    author: 'FontAwesome',
    license: 'https://fontawesome.com/license/free',
    url: 'https://fontawesome.com/icons/podcast?f=classic&s=solid',
    alt: 'podcast icon, source: FontAwesome - https://fontawesome.com/icons/podcast?f=classic&s=solid, licence: https://fontawesome.com/license/free',
    title:
      '"podcast" by FontAwesome, available at: https://fontawesome.com/icons/podcast?f=classic&s=solid, licence: https://fontawesome.com/license/free',
  },
  newsletter: {
    src: newsletter,
    className: 'newsletter',
    author: 'https://github.com/quadrifolia',
    url: 'https://github.com/FortAwesome/Font-Awesome/issues/8277',
    alt: 'newsletter icon, source: https://github.com/quadrifolia - https://github.com/FortAwesome/Font-Awesome/issues/8277',
    title:
      '"light newsletter icon" by https://github.com/quadrifolia, available at: https://github.com/FortAwesome/Font-Awesome/issues/8277',
  },
};

export default aboutIcons;
