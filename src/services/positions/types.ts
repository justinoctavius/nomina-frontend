export interface CreatePositionDto {
  name: string;
  description?: string;
  salaryPerHour: number;
}

export interface Position {
  id: string;
  name: string;
  description?: string;
  salaryPerHour: number;
}
