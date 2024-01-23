import { DogType } from '../types/types';

type Dog = {
  dogBox: DogType;
};

export default function DogView({ dogBox }: Dog) {
  return (
    <div
      className="dogTable flex justify-center items-center bg-gray-200   h-32  rounded-2xl "
      key={dogBox.id}
    >
      <div className="title">
        <p className=" text-3xl uppercase font-medium">{dogBox.dogName}</p>
        <p className="text-center text-gray-00 first-letter:uppercase">
          {dogBox.dogRase}
        </p>
      </div>
    </div>
  );
}
