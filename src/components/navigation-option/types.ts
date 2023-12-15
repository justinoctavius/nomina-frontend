export interface Props {
  title: React.ReactNode | string;
  icon: React.ReactNode;
  onClick: () => void;
  selected: boolean;
}
