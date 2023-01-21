import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h1>{status}</h1>
      <h1>{statusText}</h1>
    </>
  );
};

export default Error;
