import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 136 28" {...props}>
      <image
        href="data:image/png;base64,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"
        width="136"
      ></image>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
