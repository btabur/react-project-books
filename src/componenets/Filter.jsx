import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    //daha önceden eklenmiş olan parametreleri korur
    searchParams.set('order',e.target.value)
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set('query',e.target[0].value)
    setSearchParams(searchParams)
  }
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <div className="mx-5 mt-5 fs-4">
        <label className="me-3">İsme Göre Sırala</label>
        <select
          value={searchParams.get('order')}
          onChange={handleChange}
          className="px-4 rounded"
        >
          <option> a-z </option>
          <option> z-a </option>
        </select>
      </div>
      <form onSubmit={handleSubmit} style={{maxWidth:'300px'}} className="input-group mx-5">
        <input className="form-control " type="text" placeholder="kitap ismi giriniz"/>
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
