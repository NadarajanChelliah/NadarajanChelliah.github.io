import { assets } from '@/assets/assets'
import Image from 'next/image'
import {useState} from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1ed8d308-9f7b-48f7-85b1-bafeb5f22c06");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className="w-full px-[10%] py-10 scroll-mt-10
    bg-[url('/footer-bg-color.png')] bg-no-repeat bg center bg-[length:90%_auto]
    dark:bg-none">
      <h4 className="text-center mb-2 text-lg">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! If you have any questions, comments, or 
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit}className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input className='flex-1 p-3 outline-none border-[0.5px]
            border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name='Name' type='text' placeholder='Enter your name' required/>
            
            <input className='flex-1 p-3 outline-none border-[0.5px]
            border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name ='Email'type='email' placeholder='Enter your email' required/>
        </div>
        
        <textarea name='Message' className='w-full outline-none border-[0.5px] placeholder:text-zinc-500
            border-gray-400 rounded-md bg-white w-full mb-6 p-4 dark:bg-dark-hover/30 dark:border-white/90' rows='6' placeholder='Enter your message' required></textarea>
        
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2
        bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:shadow-[0_2px_4px_rgba(255,255,255,0.5)] dark:hover:bg-dark-hover'
        > Submit now
        <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </button>
        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
