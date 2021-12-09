function Form() {
  return (
    <div className="container bg-brandWhite-back py-52 px-auto  h-auto">
      <div className="bg-white mx-auto h-96 w-96 shadow-sha rounded-2xl">
        <form className=" h-auto pb-11 mx-auto pt-10">
          <div className="grid grid-rows-1">
            <div className="mb-5 justify-self-center grid grid-rows-1">
              <img src="img/logo.jpg" alt="logo" className="mb-4" />
              <div></div>
              <label className=" mb-2 ">UserName:</label>
              <input
                className="border-2 border-opacity-25 border-black w-72 rounded-md  px-3 py-1"
                type="email"
                size="30"
                placeholder="Enter your email"
                required
              ></input>
            </div>
            <div className="mb-5 justify-self-center grid grid-rows-1">
              <label className=" mb-2">Password:</label>
              <input
                className="border-2 border-opacity-25 border-black w-72 rounded-md  px-3 py-1"
                type="password"
                required
                minLength="8"
                placeholder="Enter your password"
              ></input>
            </div>
          </div>
          <div className="grid justify-end pr-5">
            <button className="border-black border-2 rounded-md  p-2 hover:bg-black hover:text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
