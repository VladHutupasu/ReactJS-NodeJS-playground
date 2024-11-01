export default function SwapIcon({
  color,
  height = 20,
}: {
  color: string;
  height?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g clipPath="url(#clip0_429_11110)">
          {" "}
          <path
            d="M11 8L7 4M7 4L3 8M7 4L7 20"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
          <path
            d="M13 16L17 20M17 20L21 16M17 20L17 4"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0_429_11110">
            {" "}
            <rect width="24" height="24" fill="white"></rect>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
}
