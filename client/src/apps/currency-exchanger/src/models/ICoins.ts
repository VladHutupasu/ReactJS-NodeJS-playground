export interface ICoin {
  0: string; //code
  1: string; //description
}

export interface ICoins {
  supportedCodes: ICoin[];
}
