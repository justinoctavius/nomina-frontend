export interface Props {
  data: Data[];
  onSelect: (value: string) => void;
  selected: string;
  label: string;
  searchPlaceholder: string;
}

export interface Data {
  value: string;
  label: string;
}
