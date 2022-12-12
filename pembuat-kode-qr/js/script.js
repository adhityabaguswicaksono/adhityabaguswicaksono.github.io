document.addEventListener("DOMContentLoaded", function () {
    let QRCodeSection = document.getElementById("QRCodeSection");
    QRCodeSection.style.visibility = "hidden";
});

function AutoExpand(element) {
    element.style.height = "0";
    element.style.height = (element.scrollHeight) + "px";
}

function ResetButton() {
    event.preventDefault();
    window.location.reload();
}

function TextSizeQR(value) {
    let TextSizeQR = document.getElementById("TextSizeQR");
    TextSizeQR.innerHTML = `${value} x ${value} px`;
}

function GenerateQRCode() {
    event.preventDefault();
    let textQR = document.getElementById("textQR").value;

    if (textQR) {
        let QRCodeContainer = document.getElementById("QRCode");
        let sizeQR = document.getElementById("sizeQR").value;
        let fillColor = document.getElementById("fillColor").value;
        let boxColor = document.getElementById("boxColor").value;

        QRCodeContainer.innerHTML = "";

        // new QRCode(QRCodeContainer, textQR);

        new QRCode(QRCodeContainer, {
            text: textQR,
            width: sizeQR,
            height: sizeQR,
            colorDark: fillColor,
            colorLight: boxColor,
            correctLevel: QRCode.CorrectLevel.L
        });

        QRCodeSection.style.visibility = "visible";
    } else {
        alert("Masukkan Kalimatnya dulu ya...");
    }
}

function DownloadQRCode() {
    let QRCodeContainer = document.getElementById("QRCode");
    let image = QRCodeContainer.children[1].src;
    let downloadButton = document.getElementById("downloadButton");

    let linkDownloadButton = document.getElementById("linkDownloadButton");
    linkDownloadButton.setAttribute("href", image);
    linkDownloadButton.setAttribute("download", "Pembuat Kode QR - Adhitya Bagus Wicaksono.png");
    linkDownloadButton.appendChild(downloadButton);
}