const FoodInput = ({ handleOnKey }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Item Name (What is lifting up state and pulling up state?)"
        className="form-control w-50 my-4 mx-auto"
        onKeyDown={handleOnKey}
      ></input>
    </>
  );
};

export default FoodInput;
