const FieldIcon = (props) => {
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
        d="M21.667 5.167H4.333c-1.196 0-2.166.97-2.166 2.166v10.834c0 1.196.97 2.166 2.166 2.166h17.334c1.196 0 2.166-.97 2.166-2.166V7.333c0-1.196-.97-2.166-2.166-2.166z"
        stroke={props.color ? props.color : "#B8B9BB"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.042 9.5h-2.459a2.167 2.167 0 00-2.166 2.167v2.166A2.166 2.166 0 0020.583 16h2.459M2.958 16h2.459a2.167 2.167 0 002.166-2.167v-2.166A2.167 2.167 0 005.417 9.5H2.958M13 5.167v15.166"
        stroke={props.color ? props.color : "#B8B9BB"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FieldIcon;
