let CurrentTime = () => {
  let time = new Date();

  return <p className="lead mt-3">This is the Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;
};

export default CurrentTime;
