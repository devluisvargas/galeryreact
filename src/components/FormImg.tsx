import React from "react";

interface PropsForm {
  handleSubmit: (e: any) => void;
}

export const FormImg = ({ handleSubmit }: PropsForm) => {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="w-75">
          Buscar:
          <input type="text" className="w-100 form-control" name="inputText" />
        </label>
        <button type="submit" className="btn btn-warning w-20 m-2">
          <span className="material-icons">search</span> Buscar
        </button>
      </form>
    </>
  );
};
