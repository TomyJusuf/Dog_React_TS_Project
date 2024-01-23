type DogTypeProps = {
  list: {
    dogName: string;
    dogRase: string;
  };
  setToList: (x: any) => void;
  sendToData: () => void;
};

export default function Input({ list, sendToData, setToList }: DogTypeProps) {
  return (
    <div className=" flex gap-3">
      <input
        type="text"
        placeholder="Dogname *"
        className={`border-[3px] rounded-md w-2/5 py-2 px-2 text-3xl 
               ${!list.dogName && 'border-black focus:outline-none'}
              ${
                list.dogName.length < 4 &&
                'focus:border-red-500 focus:outline-none'
              }
              ${
                list.dogName.length >= 4 &&
                'focus:border-green-300  border-green-300 focus:outline-none'
              }`}
        onChange={(e) =>
          setToList((prev: any) => ({
            ...prev,
            dogName: e.target.value,
          }))
        }
      />
      <input
        type="text"
        placeholder="Rasse *"
        onChange={(e) =>
          setToList(
            (prev: any): DogTypeProps => ({
              ...prev,
              dogRase: e.target.value.toLowerCase(),
            })
          )
        }
        className={`border-[3px] rounded-md w-2/5 py-2 px-2 text-3xl
             ${!list.dogRase && 'border-black focus:outline-none'}
             ${
               list.dogRase !== 'labrador' &&
               list.dogRase !== 'golden retriever' &&
               list.dogRase !== 'dackel'
                 ? 'focus:border-red-600 focus:outline-none'
                 : 'focus:border-green-300 border-green-300 focus:outline-none'
             }
            `}
      />
      <button
        onClick={(): unknown => sendToData()}
        type="button"
        className="w-[180px] bg-blue-500 text-white font-bold text-xl px-7 rounded-lg"
      >
        ADD
      </button>
    </div>
  );
}
