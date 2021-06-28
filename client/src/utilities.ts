const screen = {
  isSmall: () => window.innerWidth < 640,
  isMedium: () => window.innerWidth < 768,
  isLarge: () => window.innerWidth < 1024,
  isXLarge: () => window.innerWidth < 1280,
}

export { screen }
