const Icon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 16a7 7 0 100-14 7 7 0 000 14z" fill="#00AF9C" />
      <path
        d="M8.877 13.01L7.46 19.889c-.176.853.747 1.507 1.494 1.059L12 19.12l3.047 1.828c.747.448 1.67-.206 1.494-1.059L15.123 13"
        fill="#00AF9C"
        fillOpacity={0.6}
      />
      <path
        d="M12 13a4 4 0 100-8 4 4 0 000 8z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
