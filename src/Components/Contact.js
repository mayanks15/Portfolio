import axios from "axios";
import vector from "../Images/contactVector.jpg";
import { AiOutlineLoading } from "react-icons/ai";
import { useState } from "react";
function Contact() {

  let UserData = { name: "", email: "", message: "" };
  
  const handleName = (event) => {
    UserData.name = event.target.value;
  };
  
  const handleEmail = (event) => {
    UserData.email = event.target.value;
  };
  
  const handleMessage = (event) => {
    UserData.message = event.target.value;
  };
  
  const [isLoading,setLoading] = useState(false);
  const [isSuccess,setSuccess] = useState(false);
   
  const handleSubmit = async () => {
    try{await axios.post("http://localhost:3001/UserData", {
      name: UserData.name,
      email: UserData.email,
      message: UserData.message,
    });
  }
  catch(error) {
    console.log("Error: ",error)
  }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };
  return (
    <div
      id="contact"
      className="h-screen flex justify-center items-center"
    >
      <div className="border-2 h-3/4 w-10/12 rounded-bl-3xl rounded-br-3xl shadow-lg shadow-purple-600 flex">
        <img src={vector} className="w-7/12" alt="vector" />
        <div className="relative w-5/12">
          <form className="p-24  h-full" onSubmit={handleSubmit}>
            <div className=" text-purple-700 font-black text-3xl text-center">
              CONTACT ME
            </div>
            <div className=" relative mt-20">
              <input
                type="text"
                required="This is a required field"
                className="text-white w-full bg-transparent focus:outline-none border-b-2 border-slate-400 focus:border-purple-400 peer"
                onChange={handleName}
              />
              <label className="text-lg absolute left-0 -top-1 text-white peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm transition-all duration-500 ease-in-out">
                Full Name <span className="text-red-600">*</span>
              </label>
            </div>
            <div className=" relative mt-12">
              <input
                type="mail"
                required="This is a required field"
                className="text-white bg-transparent focus:outline-none  w-full border-b-2 border-slate-400 focus:border-purple-400 peer"
                onChange={handleEmail}
              />
              <label className="text-lg absolute left-0 -top-1 text-white peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm transition-all duration-500 ease-in-out">
                Email <span className="text-red-600">*</span>
              </label>
            </div>
            <div className=" relative mt-12">
              <input
                type="mail"
                required="This is a required field"
                className="text-white bg-transparent focus:outline-none w-full border-b-2 border-slate-400 focus:border-purple-400 peer"
                onChange={handleMessage}
              />
              <label className="text-lg absolute left-0 -top-1 text-white peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm transition-all duration-500 ease-in-out ">
                Message
              </label>
            </div>
            
          {isLoading ? (
            <button
            className=" flex text-xl mt-16 ml-32 gap-2 items-center rounded-full border-2 px-4 pb-1 border-slate-700 text-white bg-purple-500 hover:bg-purple-700 focus:outline focus:outline-2 focus:outline-purple-400"
            disabled
            onClick={handleSubmit}
          >
            Processing
            <div className="animate-spin">
              <AiOutlineLoading />
            </div>
          </button>
          ) : isSuccess ?(
            <button
            className="text-xl ml-32 mt-16 flex gap-2 items-center rounded-full border-2 px-8 pb-1 border-slate-700 text-white bg-green-500"
            disabled
          >
            Success
          </button>
          ) : (
            <button
            className="text-xl ml-32 mt-16 gap-2 items-center rounded-full border-2 px-8 pb-1 border-slate-700 text-white bg-purple-500 hover:bg-purple-700 focus:outline focus:outline-2 focus:outline-purple-400"
            onClick={handleSubmit}
          >
            Submit
          </button>
          )
        }
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
