export const sendMessageToRN = ({ type, payload }: MessageType) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type,
        payload,
      }),
    );
  }
};
