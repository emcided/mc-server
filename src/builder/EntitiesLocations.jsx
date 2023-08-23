import { useState } from "react";

export default function EntitiesLocations() {
  const [_id, set_id] = useState();
  const [UUID, setUUID] = useState();
  const [doubleX, setDoubleX] = useState();
  const [doubleY, setDoubleY] = useState();
  const [doubleZ, setDoubleZ] = useState();
  const [ObjectId, setObjectId] = useState();

  const result = {
    _id: _id,
    UUID: UUID,
    doubleX: doubleX,
    doubleY: doubleY,
    doubleZ: doubleZ,
    ObjectId: ObjectId,
  };

  return (
    <>
      <h1>EntitiesLocations</h1>
      <fieldset>
        <label htmlFor="_id">id Объекта</label>
        <input
          type="text"
          name="_id"
          onChange={(e) => set_id(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="UUID">UUID</label>
        <input
          type="text"
          name="UUID"
          onChange={(e) => setUUID(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="doubleX">Положение X</label>
        <input
          type="text"
          name="doubleX"
          onChange={(e) => setDoubleX(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="doubleY">Положение Y</label>
        <input
          type="text"
          name="doubleY"
          onChange={(e) => setDoubleY(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="doubleZ">положение Z</label>
        <input
          type="text"
          name="doubleZ"
          onChange={(e) => setDoubleZ(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="ObjectId">id Сущности</label>
        <input
          type="text"
          name="ObjectId"
          onChange={(e) => setObjectId(e.target.value)}
        />
      </fieldset>

      <h1>{JSON.stringify(result)}</h1>
    </>
  );
}
