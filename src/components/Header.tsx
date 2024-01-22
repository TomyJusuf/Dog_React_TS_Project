export default function Header() {
  return (
    <div>
      <div className="body flex flex-wrap  container mx-auto max-w-[950px] mt-16 ">
        <h1 className="text-center w-full font-bold text-5xl uppercase my-10">
          Hunde Liste
        </h1>
        <h2 className="titleBodyList w-full text-3xl text-gray-400 font-normal">
          Erlaubte Rasen:
        </h2>
        <div className="list my-10">
          <ul className="font-medium text-xl">
            <li>Labrador</li>
            <li>Golden Retriever</li>
            <li>Dackel</li>
          </ul>
        </div>
        <hr className="bg-gray-300 h-1 w-full" />
      </div>
    </div>
  );
}
