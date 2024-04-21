import { UrlSearchParams } from '../types/urlSearchParams.ts';

export const convertSearchParamsToStrings = (
  params: UrlSearchParams,
): Record<string, string> => {
  const stringParams: Record<string, string> = {};

  Object.keys(params).forEach((key) => {
    stringParams[key] = String(params[key]);
  });

  return stringParams;
};
