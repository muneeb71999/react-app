import { useTheme } from "styled-components";

const Heart = (props) => {
  const theme = useTheme();
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill={props.filled ? theme.primary : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.577 4.994a5.959 5.959 0 00-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 10-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 000-8.428v0z"
        stroke={props.filled ? theme.primary : "#B8B9BB"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;
