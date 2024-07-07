import { useState, useEffect } from "react";

export const useInternetStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setStatus(true);
    const handleOffline = () => setStatus(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return status;
};

export default useInternetStatus;
