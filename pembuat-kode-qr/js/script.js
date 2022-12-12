const QRCodeSection = document.getElementById("QRCodeSection");

document.addEventListener("DOMContentLoaded", function () {
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
    const TextSizeQR = document.getElementById("TextSizeQR");
    TextSizeQR.innerHTML = `${value} x ${value} px`;
}

function GenerateQRCode() {
    event.preventDefault();
    const textQR = document.getElementById("textQR").value;

    if (textQR) {
        const QRCodeContainer = document.getElementById("QRCode");
        const sizeQR = document.getElementById("sizeQR").value;
        const fillColor = document.getElementById("fillColor").value;
        const boxColor = document.getElementById("boxColor").value;

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
    const QRCodeContainer = document.getElementById("QRCode");
    const image = QRCodeContainer.children[1].src;
    const downloadButton = document.getElementById("downloadButton");

    const linkDownloadButton = document.getElementById("linkDownloadButton");
    linkDownloadButton.setAttribute("href", image);
    linkDownloadButton.setAttribute("download", "Pembuat Kode QR - Adhitya Bagus Wicaksono.png");
    linkDownloadButton.appendChild(downloadButton);
}