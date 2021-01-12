import React from "react";

const Logo = (props) => {
  return (
    <svg
      width={23}
      height={42}
      viewBox="0 0 23 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y={0.014}
        width={22.821}
        height={41.758}
        rx={11.411}
        fill="#FF8252"
      />
      <rect
        x={6.846}
        y={17.91}
        width={9.129}
        height={17.151}
        rx={4.564}
        fill="#fff"
      />
      <rect
        x={6.846}
        y={6.725}
        width={9.129}
        height={6.711}
        rx={3.356}
        fill="#fff"
      />
    </svg>
  );
};

export default Logo;
