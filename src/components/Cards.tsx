import { Card } from "./Card";
import { Loading } from "./Loading";
import { FormImg } from "./FormImg";
import { useFetchImages } from "../hooks/useFetchImages";

export const Cards = () => {
  const { images, loading, handleSubmit } = useFetchImages();

  return (
    <div className="text-center">
      <FormImg handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      {images.length == 0 && (
        <div className="alert alert-danger">
          No se ha podido cargar las imagenes, vuelva más tarde, gracias :D
        </div>
      )}

      <div className="row">
        {images.map((imag) => {
          return (
            <div className="col" key={imag.id}>
              <Card image={imag} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
