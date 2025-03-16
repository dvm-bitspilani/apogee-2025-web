export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("safari") && !ua.includes("chrome");
};

export function detectInstagramBrowser() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isInstagram = ua.indexOf("Instagram") > -1;

  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isAndroid = /android/i.test(ua);

  return {
    isInstagram,
    platform: isIOS ? "iOS" : isAndroid ? "Android" : "unknown",
  };
}
