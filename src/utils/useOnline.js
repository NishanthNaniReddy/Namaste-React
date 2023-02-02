import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const handelOnline = () => {
    setIsOnline(true);
  };
  const handelOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    addEventListener("online", handelOnline);
    addEventListener("offline", handelOffline);

    return () => {
      removeEventListener("online", handelOnline);
      removeEventListener("offline", handelOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
