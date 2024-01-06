export interface ClockData {
  id: string;
  name: string;
  timezone: string;
  offset: number;
}

export interface ClockProps extends ClockData {
  onDelete: (id: string) => void;
}