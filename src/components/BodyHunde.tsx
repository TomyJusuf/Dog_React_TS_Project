import { useState } from 'react';
import { dogList } from '../data/dogData';

type DogType = {
  id: number;
  dogName: string;
  dogRase: string;
};

export default function BodyHunde() {
  const saveList: DogType[] = dogList;

  const [list, setList] = useState<DogType>({
    id: dogList.length + 1,
    dogName: '',
    dogRase: '',
  });

  const sendData = () => {
    setList((prev): DogType => ({ ...prev, id: prev.id + 1 }));

    if (
      list.dogRase !== 'labrador' &&
      list.dogRase !== 'golden retriever' &&
      list.dogRase !== 'dackel'
    ) {
      // Do something when the race is not allowed
      alert('Diese Rassen ist nicht erlauben !!');
    } else if (list.dogName.length <= 3) {
      alert('Die Name must merh als 3 buchstabe sein!!');
    } else {
      console.log(list.dogName.length);
      saveList.push(list);
    }
  };
  return (
    <div>
      <div className="body flex flex-wrap  container mx-auto max-w-[950px] mt-16 ">
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
              setList(
                (prev): DogType => ({
                  ...prev,
                  dogName: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            placeholder="Rasse *"
            onChange={(e) =>
              setList(
                (prev): DogType => ({
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
            onClick={() => sendData()}
            type="button"
            className="w-[180px] bg-blue-500 text-white font-bold text-xl px-7 rounded-lg"
          >
            ADD
          </button>
        </div>
        <div className="grid grid-cols-3  w-full gap-4 mt-5 mb-16">
          {saveList.map((listOfDog: DogType) => {
            const { dogName, dogRase, id } = listOfDog;

            return (
              <div
                className="dogTable flex justify-center items-center bg-gray-200   h-32  rounded-2xl "
                key={id}
              >
                <div className="title">
                  <p className=" text-3xl uppercase font-medium">{dogName}</p>
                  <p className="text-center text-gray-00 first-letter:uppercase">
                    {dogRase}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
