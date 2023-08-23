import { useState } from "react";

export default function ItemBuilder() {
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [material, setMaterial] = useState();

  const result = {
    title: title,
    type: type,
    material: material,
  };

  return (
    <>
      <h1>ItemBuilder</h1>
      <fieldset>
        <label htmlFor="title">Название предмета</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="type">Тип предмета</label>
        <input
          type="text"
          name="type"
          onChange={(e) => setType(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="material">Материал предмета</label>
        <input
          type="text"
          name="material"
          onChange={(e) => setMaterial(e.target.value)}
        />
      </fieldset>

      <h1>{JSON.stringify(result)}</h1>
    </>
  );
}
