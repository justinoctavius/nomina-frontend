import { ColumnDef } from '@tanstack/react-table';

export interface Props {
  data: unknown[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<any>[];
  filterPlaceHolder?: string;
  filterColumn: string;
}
