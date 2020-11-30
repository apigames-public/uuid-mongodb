import { Binary } from "mongodb";

export type MUUID = Binary;

export const v1: () => MUUID;
export const v4: () => MUUID;
export const from: (uuid: string | Binary) => MUUID;
export const mode: (mode: 'canonical'| 'relaxed') => { v1, v4, from, mode};
