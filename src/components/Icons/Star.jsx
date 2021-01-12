import { useTheme } from "styled-components";

function Star(props) {
  const theme = useTheme();
  return (
    <svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill={props.filled ? theme.primary : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1.167l3.348 6.781 7.486 1.094-5.417 5.276 1.278 7.454L12 18.25l-6.695 3.52 1.279-7.453-5.417-5.276 7.486-1.094L12 1.166z"
        stroke={props.filled ? "none" : "#B8B9BB"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Star;
