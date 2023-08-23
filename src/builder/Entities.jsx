import { useState } from "react";

export default function Entities() {
  const [_id, set_id] = useState();
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [respawnTime, setRespawnTime] = useState();
  const [dropIds, setDropIds] = useState();
  const [hardness, setHardness] = useState();

  const result = {
    _id: _id,
    type: type,
    title: title,
    respawnTime: respawnTime,
    dropIds: dropIds,
    hardness: hardness,
  };

  return (
    <>
      <h1>Entities</h1>
      <fieldset>
        <label htmlFor="_id">id Существа</label>
        <input
          type="text"
          name="_id"
          onChange={(e) => set_id(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="type">Тип Существа</label>
        <input
          type="text"
          name="type"
          onChange={(e) => setType(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="title">Материал Существа</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="respawnTime">Время возрождения существа</label>
        <input
          type="text"
          name="respawnTime"
          onChange={(e) => setRespawnTime(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="dropIds">Тип существа</label>
        <input
          type="text"
          name="dropIds"
          onChange={(e) => setDropIds(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="hardness">Прочность предмета</label>
        <input
          type="text"
          name="hardness"
          onChange={(e) => setHardness(e.target.value)}
        />
      </fieldset>

      <h1>{JSON.stringify(result)}</h1>
    </>
  );
}
