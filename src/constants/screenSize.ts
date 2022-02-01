enum ScreenSize {
  XXS = "xxs",
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

type ScreenSizeType = ScreenSize;

const screenSize: Record<ScreenSizeType, number> = {
  [ScreenSize.XXS]: 360,
  [ScreenSize.XS]: 576,
  [ScreenSize.SM]: 768,
  [ScreenSize.MD]: 992,
  [ScreenSize.LG]: 1200,
  [ScreenSize.XL]: 1400,
};

export { ScreenSize, screenSize };
export type { ScreenSizeType };
