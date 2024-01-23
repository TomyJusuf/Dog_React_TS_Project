import { useState } from 'react';
import { dogList } from '../data/dogData';
import { DogType } from '../types/types';
import Input from './Input';
import BoxTables from './BoxTables';

export default function BodyHunde() {
  const saveList: DogType[] = dogList;

  const [list, setList] = useState<DogType>({
    id: dogList.length + 1,
    dogName: '',
    dogRase: '',
  });

  const sendData = (): void => {
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
      saveList.push(list);
    }
  };
  return (
    <div>
      <div className="body flex flex-wrap  container mx-auto max-w-[950px] mt-16 ">
        <Input list={list} setToList={setList} sendToData={sendData} />
        <BoxTables saveList={saveList} />
      </div>
    </div>
  );
}
