"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


 
  return (
    <div>
      <form action="https://formsubmit.co/0db64e6f5136618657a78bc16a5817f7" method="POST">
        <input className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            name="name"
            id="fullname"
            placeholder="John Doe"
        />
        <input className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
        />
        <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10"
            id="message"
            placeholder="Type your message here..."
        >
        </textarea>
        <button type="submit" className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button>
      </form>
    </div>
  );
}