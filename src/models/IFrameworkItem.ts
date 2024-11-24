export interface IFrameworkItem {
  readonly id: number;
  title: string;
  description: string;
  image: string;
  direction: "left-to-right" | "right-to-left";
}
