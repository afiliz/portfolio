import Header from "@/app/chatbot/components/header"

export default function Chatbot() {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-slate-50 text-gray-950 relative px-16 sm:pt-36">
        <main className="flex flex-col items-center px-4">
          <Header />
        </main>
      </body>
    </html>
  )
}
