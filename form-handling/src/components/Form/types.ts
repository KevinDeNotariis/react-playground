type mustContain = {
  chars: RegExp;
  atLeast: number;
};

type Validation = {
  maxChar?: number;
  type: string;
  minChar?: number;
  mustContain?: Array<mustContain>;
  mustNotContain?: Array<RegExp>;
  mustMatch?: RegExp;
};

type ValidationResult = {
  valid: boolean;
  errors: Array<string>;
};

export type { Validation, ValidationResult };
