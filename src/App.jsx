import { useMutation } from '@tanstack/react-query';
import './App.css';
import { subirImagen } from './api/fetchImagenes';

function App() {
  const imagenMutation = useMutation({
    mutationKey: ['imagen'],
    mutationFn: subirImagen,
    onSuccess: data => alert(data.message),
    onError: error => console.log('Error al subir la imagen', error),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    await imagenMutation.mutateAsync(data);
  };

  return (
    <>
      <main>
        <h1>Subir imagen</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario: <input type='text' name='user' />
          </label>
          <label>
            Cargar imagen: <input type='file' name='archivo' />
          </label>
          <br />
          <button type='submit'>Subir</button>
        </form>
      </main>
    </>
  );
}

export default App;
