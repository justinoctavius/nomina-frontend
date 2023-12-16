import { httpClient } from '../../utils/http-client';
import { CreatePositionDto, Position } from './types';

export const getPosition = async (): Promise<Position[]> => {
  const response = await httpClient.get('/positions');
  return response.data;
};

export const createPosition = async (position: CreatePositionDto) => {
  const response = await httpClient.post('/positions', position);
  return response.data;
};

export const deletePosition = async (id: string) => {
  const response = await httpClient.delete(`/positions/${id}`);
  return response.data;
};
