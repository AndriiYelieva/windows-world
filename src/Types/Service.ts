import { ServiceType } from "./ServiceType";

export type Service = {
  id: number,
  name: string | string[],
  type: ServiceType | null,
  photo: string | null,
}