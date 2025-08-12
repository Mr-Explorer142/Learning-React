const ErrorMessage = ({items}) => {

  let conditionalMessage = items.length === 0 && (
    <h3 className="text-danger my-3 text-center">I am still hungry😭!</h3>
  );

  return <>{conditionalMessage}</>;
};

export default ErrorMessage;
