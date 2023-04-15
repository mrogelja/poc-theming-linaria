interface CssVar<T = string>{
  value: T,
  name: string
}

interface Theme {
  backgroundColor: {
    z0: CssVar;
    z1: CssVar;
    z2: CssVar;
  };
  color: {
    primary: CssVar;
    primaryText: CssVar;
    active: CssVar;
    activeText: CssVar;
    disabled: CssVar;
    disabledText: CssVar;
  };
  typography: {
    fontSize: CssVar<number>;
  };
}

export const theme: Theme = {
  backgroundColor: {
    z0: {
      name: "--background-color-z0",
      value: "#2C444C",
    },
    z1: {
      name: "--background-color-z1",
      value: "#243C44",
    },
    z2: {
      name: "--background-color-z2",
      value: "#1C343B"
    }
  },
  color: {
    primary: {
      name: "--color-primary",
      value: "#496b76"
    },
    primaryText: {
      name: "--color-primary-text",
      value: "white"
    },
    active: {
      name: "--color-active",
      value: "#c5edfb"
    },
    activeText: {
      name: "--color-active-text",
      value: "#496b76"
    },
    disabled: {
      name: "--color-disabled",
      value: "#e4e4e4"
    },
    disabledText: {
      name: "--color-disabled-text",
      value: "#cbcbcb"
    },
  },
  typography: {
    fontSize: {
      value: 12,
      name: "--font-size"
    },
  },
};
