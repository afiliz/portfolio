import { IoSend } from "react-icons/io5";

type InputProps = {
  onInput: (inputValue: string) => void;
};

// calls onInput with the value in the input element when clicking the button, without reloading the page
export default function Input({ onInput }: InputProps): JSX.Element {
  const handleInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector('#user-input') as HTMLInputElement;
    onInput(input.value);
  };

  return (
    <form onSubmit={handleInput} className="flex w-full h-24 bg-slate-100 sm:rounded-b-2xl items-center justify-center">
      <div className="flex w-full h-full sm:px-4 sm:w-[94%] sm:h-16 bg-slate-200 sm:rounded-full justify-center">
        <input
          id="user-input"
          className="w-full sm:w-[87%] h-12 mt-6 ml-4 sm:m-2 bg-slate-200 border-none focus:outline-none"
          type="text"
          placeholder="Ask me a question!"
        />
        <button 
          id="user-input-submit"
          className="flex items-center justify-center w-16 sm:w-12 h-12 m-6 sm:m-2 bg-cyan-500 rounded-full"
          type="submit"
        >
         <IoSend color="white" fontSize="1.3em" />
        </button>
      </div>
    </form>
  );
}
