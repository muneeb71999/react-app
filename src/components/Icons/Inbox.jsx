const Inbox = (props) => {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.833 13h-6.5l-2.166 3.25h-4.334L8.666 13h-6.5"
        stroke="#B8B9BB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.904 5.536L2.167 13v6.5a2.167 2.167 0 002.166 2.167h17.334a2.167 2.167 0 002.166-2.167V13l-3.737-7.464a2.167 2.167 0 00-1.94-1.202H7.844a2.167 2.167 0 00-1.939 1.202v0z"
        stroke="#B8B9BB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Inbox;
