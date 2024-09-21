import { INCREASE_REQUEST, INCREASE_REQUEST_FAILED, INCREASE_REQUEST_SUCCESS } from "./Types";

export const increaseRequest = (data: number) => ({
  type: INCREASE_REQUEST,
  payload: data,
});

export const increaseSuccess = (data: number) => ({
  type: INCREASE_REQUEST_SUCCESS,
  payload: data,
});

export const increaseFailed = () => ({
  type: INCREASE_REQUEST_FAILED,
});