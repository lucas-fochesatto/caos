
export async function connectPhantom() {
    const provider = getProvider(); // see "Detecting the Provider"
    try {
        const resp = await provider.connect();
        const address = resp.publicKey.toString()
        console.log(address);
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
        return {
          provider,
          address
        }
    } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
    }
}

const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
  
      if (provider?.isPhantom) {
        return provider;
      }
    }
  
    window.open('https://phantom.app/', '_blank');
};