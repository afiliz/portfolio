"use client";

import Header from "@/app/chatbot/components/header"
import Chat from "@/app/chatbot/components/chat";
import Input from "@/app/chatbot/components/input";

export default function Chatbot() {
  return (
    <body className="bg-slate-50">  
      <main className="flex items-center justify-center h-screen">
        <div className="flex bg-slate-100 w-full h-full sm:w-5/6 sm:h-[90vh] flex-col sm:rounded-2xl">
          <Header />
          <Chat />
          <Input />
        </div>
      </main>
    </body>
  )
}
