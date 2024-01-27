"use client";

import { useEffect } from "react";

interface ChatProps {
  input: string;
}

export default function Chat({ input }: ChatProps) {
    useEffect(() => {
      console.log(input);
    }, [input]);

    return (
        <section className="flex flex-col w-full min-h-60 grow bg-slate-100 overflow-y-auto">
          {/* <div>test</div> */}
          <div className="flex mb-2">
            <div className="items-center p-2 m-4 max-w-64 w-96 bg-slate-300 text-black rounded-tr-lg rounded-br-lg rounded-bl-lg">This is a test to demonstrate text asdlkfj a;lksdfj ;alkjdf ;alkdfj ;alks fja;lkf ja;lkd fja;lkd jsl'k ajdsl;kf j asd;flka jnsdl;fkjn; a;lkdfj lajdf al sdfjalksd j</div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="justify-end items-center p-2 m-4 max-w-44 w-96 bg-blue-400 text-white rounded-tl-lg rounded-br-lg rounded-bl-lg">This is a test to demonstrate text asdlkfj a;lksdfj ;alkjdf ;alkdfj ;alks fja;lkf ja;lkd fja;lkd jsl'k ajdsl;kf  asdf ;laksdjf;al ksjdf ;laksdj f;lakj;lskdfj; alskd fj;laksjd;lf akjj</div>
          </div>
        </section>
    )
}