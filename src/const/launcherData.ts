import { iternlIcon, flintIcon, laceIcon } from '$lib/assets';

export const WALLET_SIGN_IN_TEXT_DATA = {
  label: 'Welcome!',
  title: 'Wallet Sign-in',
  description: 'Your available Wallets are listed here below. Click one to connect the desired wallet and Sign in',
};

export const WALLETS = [
  { id: 1, name: 'Eternl', icon: iternlIcon },
  { id: 2, name: 'Flint', icon: flintIcon },
  { id: 3, name: 'Lace', icon: laceIcon }
];
