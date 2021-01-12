const Target = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 14a2 2 0 100-4 2 2 0 000 4z"
        stroke="#FF8252"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2l-8 8"
        stroke="#FF8252"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.42 10.664c-.311.25-.45.65-.428 1.05a5 5 0 11-4.874-4.712c.39.008.777-.136 1.019-.442.471-.597.191-1.476-.567-1.537a7 7 0 106.384 6.174c-.084-.742-.95-1-1.533-.533z"
        fill="#FF8252"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.957 8.543a1.127 1.127 0 00-.27 1.095 9 9 0 11-6.845-6.45c.366.077.751-.015 1.021-.272.56-.534.374-1.46-.38-1.634A11.034 11.034 0 0012 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11c0-1.08-.156-2.124-.446-3.11-.206-.702-1.08-.865-1.597-.347z"
        fill="#FF8252"
      />
    </svg>
  );
};

export default Target;
