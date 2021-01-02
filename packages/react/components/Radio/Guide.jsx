import { useState } from 'react'
import Radio from './'

/*
# Radio
```js
import { Radio } from 'loft-ui'
```

## Пример
```jsx
const [active, setActive] = useState(-1);

return (
  <Radio value={active} onChange={v=> setActive(v)}>
    <Radio.Item value={1}>Select 1</Radio.Item>
    <Radio.Item value={2}>Select 2</Radio.Item>
  </Radio>
)
```

export const Example = () => {
  const [active, setActive] = useState(-1);
  return (
    <Radio value={active} onChange={v=> setActive(v)}>
      <Radio.Item value={1}>Select 1</Radio.Item>
      <Radio.Item value={2}>Select 2</Radio.Item>
    </Radio>
  )
}

<Example />
*/