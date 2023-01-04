const textQR = document.querySelector("#textQR");
const fillColor = document.querySelector("#fillColor");
const boxColor = document.querySelector("#boxColor");
const sizeQR = document.querySelector("#sizeQR");
const QRCodeContainer = document.querySelector("#QRCodeContainer");
const linkDownloadButton = document.querySelector("#linkDownloadButton");

const defaultUrl = textQR.getAttribute("placeholder");
let colorLight = fillColor.value,
    colorDark = boxColor.value,
    text = defaultUrl,
    size = 300;

textQR.addEventListener("input", function (e) {
    text = e.target.value;
    if (text.length == 0) {
        text = defaultUrl;
    }
});

fillColor.addEventListener("input", function (e) {
    colorLight = e.target.value;
});

boxColor.addEventListener("input", function (e) {
    colorDark = e.target.value;
});

sizeQR.addEventListener("input", function (e) {
    size = e.target.value;
})

async function generateQRCode() {
    QRCodeContainer.innerHTML = "";
    new QRCode(QRCodeContainer, {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,
        correctLevel: QRCode.CorrectLevel.L
    });

    linkDownloadButton.href = await downloadQRCode();
}

function downloadQRCode() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = document.querySelector("#QRCodeContainer img");
            if (img.currentSrc) {
                resolve(img.currentSrc);
                return;
            }
            const canvas = document.querySelector("canvas");
            resolve(canvas.toDataURL());
        }, 50);
    });
}

function TextSizeQR(value) {
    const TextSizeQR = document.getElementById("TextSizeQR");
    TextSizeQR.innerHTML = `${value} x ${value} px`;
}

generateQRCode();
downloadQRCode();