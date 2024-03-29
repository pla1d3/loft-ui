import React, { useState } from 'react';
import { Code } from '../../helpers';
import Switch from './';

export default function SwitchGuide() {

  return (
    <>
      <h1>Switch</h1>
      <p>Используется для выбора между двумя значениями</p>
      <Code v="import { Switch } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [selected, setSelected] = useState(false);

        return (
          <Switch
            selected={selected}
            onClick={()=> setSelected(!selected)}
          />
        )
      `} />
      <Example />
    </>
  );

}

function Example() {
  const [selected, setSelected] = useState(false);

  return (
    <Switch
      selected={selected}
      onClick={()=> setSelected(!selected)}
    />
  );
}
