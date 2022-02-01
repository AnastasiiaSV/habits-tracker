import { createBreakpoint } from "react-use";
import { ScreenSizeType, screenSize } from "../constants";

const useBreakpoint = createBreakpoint(
  screenSize
) as unknown as () => ScreenSizeType;

export { useBreakpoint };
