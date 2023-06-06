import vector from "../Images/contactVector.jpg";
function Contact() {
  return (
    <div
      id="contact"
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="border-2 h-3/4 w-10/12 rounded-bl-3xl rounded-br-3xl shadow-lg shadow-purple-600 flex">
        <img src={vector} className="w-7/12" alt="vector" />
        <div className="relative w-5/12 ">
          <form className="m-24 ">
            <div className=" text-purple-700 font-black text-3xl text-center">
              CONTACT ME
            </div>
            <div className=" relative mt-10">
              <input
                type="text"
                required=""
                className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 focus:border-purple-400 peer"
              />
              <label className=" absolute left-0 -top-1 text-white peer-focus:-top-4 peer-focus:text-xs transition-all duration-500 ease-in-out">
                Full Name
              </label>
            </div>
            <div className=" relative mt-10">
              <input
                type="mail"
                required=""
                className="bg-transparent focus:outline-none  w-full border-b-2 border-slate-400 focus:border-purple-400 peer"
              />
              <label className=" absolute left-0 -top-1 text-white peer-focus:-top-4 peer-focus:text-xs transition-all duration-500 ease-in-out">
                Email
              </label>
            </div>
            <div className=" relative mt-10">
              <input
                type="mail"
                required=""
                className="bg-transparent focus:outline-none w-full border-b-2 border-slate-400 focus:border-purple-400 peer"
              />
              <label className=" absolute left-0 -top-1 text-white peer-focus:-top-4 peer-focus:text-xs transition-all duration-500 ease-in-out">
                Message
              </label>
            </div>
          </form>
          <div className="absolute bottom-20 left-40 ">
            <button className=" rounded-full border-2 pl-4 pr-4 pb-1 border-slate-700 text-white bg-purple-500 hover:bg-purple-700 focus:outline focus:outline-2 focus:outline-purple-400">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
