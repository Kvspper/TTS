/* VARIABLE ======================================================= VARIABLE */
const pictureClosed1 = document.getElementsByClassName("global-elmt-pict").item(0);
const pictureClosed2 = document.getElementsByClassName("global-elmt-pict").item(1);
const pictureClosed3 = document.getElementsByClassName("global-elmt-pict").item(2);
const pictureClosed4 = document.getElementsByClassName("global-elmt-pict").item(3);
const pictureClosed5 = document.getElementsByClassName("global-elmt-pict").item(4);
const pictureClosed6 = document.getElementsByClassName("global-elmt-pict").item(5);

const pictureWide1 = document.getElementsByClassName("global-elmt-pict-wide").item(0);
const pictureWide2 = document.getElementsByClassName("global-elmt-pict-wide").item(1);
const pictureWide3 = document.getElementsByClassName("global-elmt-pict-wide").item(2);
const pictureWide4 = document.getElementsByClassName("global-elmt-pict-wide").item(3);
const pictureWide5 = document.getElementsByClassName("global-elmt-pict-wide").item(4);
const pictureWide6 = document.getElementsByClassName("global-elmt-pict-wide").item(5);

/* FUNCTION ======================================================= FUNCTION */
function scrollpaused (fullscreenstate) {
    if (fullscreenstate == true){ document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
}

function fullscreen () {

    document.addEventListener('click', function(elmt) {

        let clickdElmt = elmt.target;
        let fullscreen = false;

        /* picture 1 --------------------------------------------- picture 1 */
        if (clickdElmt == pictureClosed1 && fullscreen == false){
            pictureWide1.classList.add("fullscreen-active");
            fullscreen = true
        } else if (clickdElmt == pictureWide1) {
            pictureWide1.classList.remove("fullscreen-active");
            fullscreen = false
        }

        /* picture 2 --------------------------------------------- picture 2 */
        if (clickdElmt == pictureClosed2 && fullscreen == false){
            pictureWide2.classList.add("fullscreen-active");
            fullscreen = true
        } else if (clickdElmt == pictureWide2) {
            pictureWide2.classList.remove("fullscreen-active");
            fullscreen = false
        }

        /* picture 3 --------------------------------------------- picture 3 */
        if (clickdElmt == pictureClosed3 && fullscreen == false){
            pictureWide3.classList.add("fullscreen-active");
            fullscreen = true
        } else if (clickdElmt == pictureWide3) {
            pictureWide3.classList.remove("fullscreen-active");
            fullscreen = false
        }

        /* picture 4 --------------------------------------------- picture 4 */
        if (clickdElmt == pictureClosed4 && fullscreen == false){
            pictureWide4.classList.add("fullscreen-active");
            fullscreen = true
        } else if (clickdElmt == pictureWide4) {
            pictureWide4.classList.remove("fullscreen-active");
            fullscreen = false
        }

        /* picture 5 --------------------------------------------- picture 5 */
        if (clickdElmt == pictureClosed5 && fullscreen == false){
            pictureWide5.classList.add("fullscreen-active");
            fullscreen = true
        } else if (clickdElmt == pictureWide5) {
            pictureWide5.classList.remove("fullscreen-active");
            fullscreen = false
        }

        /* picture 6 --------------------------------------------- picture 6 */
        if (clickdElmt == pictureClosed6 && fullscreen == false){
            pictureWide6.classList.add("fullscreen-active");
            fullscreen = true
        } else if (clickdElmt == pictureWide6) {
            pictureWide6.classList.remove("fullscreen-active");
            fullscreen = false
        }

        scrollpaused(fullscreen)

    })

}

/* PROGRAM ========================================================= PROGRAM */
fullscreen()
