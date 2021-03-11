const dropZone = document.getElementById('dropZone');
const route = 'http://localhost:3000/images';

const uploadFile = files => {
  const data = new FormData();

  data.append('file', files);

  fetch(route, {
    method: 'POST',
    body: data,
  })
    .then(() => alert('¡El fichero se ha subido correctamente!'))
    .catch(() => alert('¡¡ERROR: No se ha podido subir el fichero!!'));
};

dropZone.addEventListener('dragenter', e => {
  dropZone.classList.add('over');
});

dropZone.addEventListener('dragleave', e => {
  dropZone.classList.remove('over');
});

dropZone.addEventListener('dragover', e => {
  e.preventDefault();
});

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  console.log(e.dataTransfer.files.item(0));
  uploadFile(e.dataTransfer.files.item(0));
});
