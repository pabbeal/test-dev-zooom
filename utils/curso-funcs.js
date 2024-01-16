export function getCursorBackground(cursor, imageToZoom, positionX, positionY) {
  if (cursor.current && imageToZoom.current) {
    let imagePourcentX = positionX - imageToZoom.current.offsetLeft;
    imagePourcentX = imagePourcentX * 100;
    imagePourcentX = imagePourcentX / imageToZoom.current.clientWidth;

    let imagePourcentY = positionY - imageToZoom.current.offsetTop;
    imagePourcentY = imagePourcentY * 100;
    imagePourcentY = imagePourcentY / imageToZoom.current.clientHeight;
    cursor.current.style.backgroundPosition = "" + imagePourcentX + "% " + imagePourcentY + "%"; 
  }
}

//Place la loupe à l'emplacement du cursseur
export function cursorPlace(cursor, positionX, positionY) {
  if (cursor.current) {
    cursor.current.style.left = positionX + 'px';
    cursor.current.style.top = positionY + 'px';
  }
}