import React from 'react';
import { PizzaItem } from '../../store/ducks/pizzas/types';
import Pizza from '../Pizza';

interface Props {
  content: PizzaItem[];
  setSelected: (data: any) => void;
}

const ChooseSize = ({ content, setSelected }: Props) => {
  return (
    <>
      {content.map((item: any) => (
        <Pizza content={item} key={item.id} order={setSelected}>
          {item.description}
        </Pizza>
      ))}
    </>
  );
};

export default ChooseSize;
