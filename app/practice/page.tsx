import Question from "@/Components/Cards/Practice/Question";

const page = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="w-full h-4/5 flex flex-grow">
        <div className="bg-red-500  w-1/2 h-full">
          <Question/>
        </div>
        <div className="bg-zinc-500 h-full w-1/2 ">
          <h1>Camera section </h1>
        </div>
      </div>
      <div>
        <button>Start</button>
        <button>next</button>
        <button>End</button>
      </div>
    </div>
  );
};

export default page;
