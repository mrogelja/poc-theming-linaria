import { Theme as EmotionTheme } from '@emotion/react'

export class CssVar<T = string> {
  constructor(public name: string, public value: T){}
  
  public asVar(defaultValue?: any) : string {
    return defaultValue ? `var(${this.name}, ${defaultValue})` : `var(${this.name})`;
  }

  public asRule(): string {
    return `${this.name} : ${this.toString()};`; 
  }

  public copy(value?: T): CssVar<T> {
    return new CssVar(this.name, value || this.value);
  }

  public toString(): string {
    if (typeof this.value === "number") {
      return `${this.value}px`;
    }
    
    return `${this.value}`;
  }
}

export interface Theme extends EmotionTheme {
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
