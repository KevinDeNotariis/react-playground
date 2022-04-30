export type StepType = {
  name: string;
};

interface IObjectKeys {
  [key: string]: string | number;
}

export type StepBarState = IObjectKeys & {
  selected: number;
  username: string;
  password: string;
  email: string;
  additionalNotes: string;
};
