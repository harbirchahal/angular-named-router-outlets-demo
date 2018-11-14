export interface Country {
  id?: number;
  name?: string;
  nativeName?: string;
  flag?: string;
  capital?: string;
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  currencies?: {
    code?: string;
    name?: string;
    symbol?: string;
  }[];
  region?: string;
  subregion?: string;
  area?: number;
  latlng?: number[];
  _lookup?: string;
}