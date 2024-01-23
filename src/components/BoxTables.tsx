import { DogType } from '../types/types';
import DogView from './DogView';

type SaveListProps = {
  saveList: DogType[];
};

export default function BoxTables({ saveList }: SaveListProps) {
  return (
    <div className="grid grid-cols-3  w-full gap-4 mt-5 mb-16">
      {saveList.map((listOfDog: DogType) => {
        return <DogView dogBox={listOfDog} />;
      })}
    </div>
  );
}
