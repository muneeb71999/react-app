function GridIcon(props) {
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
        d="M10.833 3.25H3.25v7.583h7.583V3.25zM22.75 3.25h-7.583v7.583h7.583V3.25zM22.75 15.167h-7.583v7.583h7.583v-7.583zM10.833 15.167H3.25v7.583h7.583v-7.583z"
        stroke={props.color ? props.color : "#B8B9BB"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GridIcon;
