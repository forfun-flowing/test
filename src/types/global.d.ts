declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage(message: string): void;
    };
    kakao: any;
  }
}

export {};
