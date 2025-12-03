
export interface ITier {
  id: string;
  amount: string;
  ada: string;
  apiCalls: string;
};

export enum FlowStep {
  WalletSignIn = 'WALLET_SIGN_IN',
};
