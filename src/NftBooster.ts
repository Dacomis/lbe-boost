// provided by Minswap at: https://gist.github.com/longngn/a9766049a978b7459d460f489ef0dc23

const getBoosterRate = (nftName: string): number => {
  let sum = 0;
  // only the first 30 chars of NFT name is tied to the wallet
  // we calculate booster rate from the first 30 chars
  for (let i = 0; i < 30; i++) {
    sum += nftName.charCodeAt(i);
  }
  return 110 + (sum % 10) * 10;
};

export default getBoosterRate;
