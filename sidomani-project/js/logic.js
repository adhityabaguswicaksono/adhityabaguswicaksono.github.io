function backSection() {
    window.location.reload();
}

const play = document.getElementById("play");
play.addEventListener("click", function () {
    const header = document.getElementById("header");
    header.innerHTML = "<h1>Formulir Diagnosis Malnutrisi Anak Balita</h1><hr>";
    getDiagnose();
});

function modalBox() {
    const body = document.querySelector("body");

    const divModal = document.createElement("div");
    divModal.setAttribute("class", "modal");

    const divHeader = document.createElement("div");
    divHeader.setAttribute("class", "modal-header");
    divHeader.innerHTML = "<h1>PERINGATAN!!!</h1>";

    const divContent = document.createElement("div");
    divContent.setAttribute("class", "modal-content");
    divContent.innerHTML = "<p>Isi jawaban terlebih dahulu sebelum lanjut ke pertanyaan selanjutnya.</p>";

    const divClose = document.createElement("div");
    divClose.setAttribute("class", "modal-close");
    divClose.innerHTML = '<input type="button" value="Tutup">';

    const divContentAll = document.createElement("div");
    divContentAll.setAttribute("class", "modal-content-all");
    divContentAll.append(divHeader, divContent, divClose);

    divModal.append(divContentAll);
    body.insertBefore(divModal, document.querySelector("footer"));
}

function getDiagnose() {
    fetch("./data/data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let index = 0;
            let jawab = [];

            const button = document.getElementById("button");
            button.innerHTML = "";

            const buttonPrevious = document.createElement("input");
            buttonPrevious.setAttribute("type", "button");
            buttonPrevious.setAttribute("value", "Sebelumnya");
            buttonPrevious.setAttribute("id", "previous");

            const buttonNext = document.createElement("input");
            buttonNext.setAttribute("type", "button");
            buttonNext.setAttribute("value", "Selanjutnya");
            buttonNext.setAttribute("id", "next");

            button.append(buttonPrevious, buttonNext);

            showQuestion(data, index, -1);

            const next = document.getElementById("next");
            const previous = document.getElementById("previous");

            previous.setAttribute("disabled", true);
            previous.style.display = "none";

            next.addEventListener('click', function () {
                let flag = false;
                let flagEmpty = false;

                const idJawaban = document.querySelectorAll("#formulir div#Jawaban div input");
                const idSoal = document.querySelectorAll("#formulir div")[0];

                for (let j = 0; j < idJawaban.length; j++) {
                    if (idJawaban[j].checked) {
                        for (let k = 0; k < jawab.length; k++) {
                            if (jawab[k][0] == idSoal.id) {
                                jawab[k][1] = idJawaban[j].id;
                                flag = true;
                            }
                        }
                        if (!flag) {
                            jawab.push([idSoal.id, idJawaban[j].id]);
                            flag = false;
                        }
                        flagEmpty = true;
                    }
                }

                if (!flagEmpty) {
                    modalBox();
                    document.querySelector(".modal-close input").addEventListener("click", function () {
                        document.querySelector(".modal").remove();
                    });
                    return false;
                }

                if (index >= 0 && index < data[1].isiKodeUtama.length) {
                    if (jawab[0][0] == "GG01" && jawab[0][1] == 0) {
                        if (idSoal.id == "GG01") {
                            index = 1;
                            showQuestion(data, index, jawab);
                        } else if (jawab[1][0] == "GG02" && jawab[1][1] == 0) {
                            if (idSoal.id == "GG02") {
                                index = 2;
                                showQuestion(data, index, jawab);
                            } else if (jawab[2][0] == "GG03" && jawab[2][1] == 0) {
                                if (idSoal.id == "GG03") {
                                    index = 3;
                                    showQuestion(data, index, jawab);
                                } else if (jawab[3][0] == "GG04") {
                                    if (idSoal.id == "GG04") {
                                        index = 4;
                                        showQuestion(data, index, jawab);
                                    } else if (jawab[4][0] == "GG05") {
                                        if (idSoal.id == "GG05") {
                                            index = 5;
                                            showQuestion(data, index, jawab);
                                        } else if (jawab[5][0] == "GG06") {
                                            if (idSoal.id == "GG06") {
                                                index = 6;
                                                showQuestion(data, index, jawab);
                                                next.setAttribute("value", "Selesaikan");
                                            } else if (jawab[6][0] == "GG07") {
                                                if (idSoal.id == "GG07") {
                                                    showResult(data, jawab);
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (jawab[2][0] == "GG03" && jawab[2][1] == 1) {
                                if (idSoal.id == "GG03") {
                                    index = 7;
                                    showQuestion(data, index, jawab);
                                    jawab.splice(2);
                                }
                            } else if (jawab[2][0] == "GG08" && jawab[2][1] == 0) {
                                if (idSoal.id == "GG08") {
                                    index = 8;
                                    showQuestion(data, index, jawab);
                                } else if (jawab[3][0] == "GG09") {
                                    if (idSoal.id == "GG09") {
                                        index = 9;
                                        showQuestion(data, index, jawab);
                                    } else if (jawab[4][0] == "GG10") {
                                        if (idSoal.id == "GG10") {
                                            index = 10;
                                            showQuestion(data, index, jawab);
                                        } else if (jawab[5][0] == "GG11") {
                                            if (idSoal.id == "GG11") {
                                                index = 11;
                                                showQuestion(data, index, jawab);
                                                next.setAttribute("value", "Selesaikan");
                                            } else if (jawab[6][0] == "GG12") {
                                                if (idSoal.id == "GG12") {
                                                    showResult(data, jawab);
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (jawab[2][0] == "GG08" && jawab[2][1] == 1) {
                                if (idSoal.id == "GG08") {
                                    index = 12;
                                    showQuestion(data, index, jawab);
                                    jawab.splice(2);
                                }
                            } else if (jawab[2][0] == "GG13" && jawab[2][1] == 0) {
                                if (idSoal.id == "GG13") {
                                    index = 13;
                                    showQuestion(data, index, jawab);
                                } else if (jawab[3][0] == "GG14") {
                                    if (idSoal.id == "GG14") {
                                        index = 14;
                                        showQuestion(data, index, jawab);
                                        next.setAttribute("value", "Selesaikan");
                                    } else if (jawab[4][0] == "GG15") {
                                        if (idSoal.id == "GG15") {
                                            showResult(data, jawab);
                                        }
                                    }
                                }
                            } else if (jawab[2][0] == "GG13" && jawab[2][1] == 1) {
                                jawab.splice(2);
                            }
                        } else {
                            showResult(data, jawab);
                        }
                    } else if (jawab[0][0] == "GG01" && jawab[0][1] == 1) {
                        if (idSoal.id == "GG01") {
                            index = 1;
                            showQuestion(data, index, jawab);
                        } else if (jawab[1][0] == "GG02" && jawab[1][1] == 1) {
                            if (idSoal.id == "GG02") {
                                index = 15;
                                showQuestion(data, index, jawab);
                            } else if (jawab[2][0] == "GG16") {
                                if (idSoal.id == "GG16") {
                                    index = 16;
                                    showQuestion(data, index, jawab);
                                } else if (jawab[3][0] == "GG17") {
                                    if (idSoal.id == "GG17") {
                                        index = 17;
                                        showQuestion(data, index, jawab);
                                    } else if (jawab[4][0] == "GG18") {
                                        if (idSoal.id == "GG18") {
                                            index = 18;
                                            showQuestion(data, index, jawab);
                                        } else if (jawab[5][0] == "GG19") {
                                            if (idSoal.id == "GG19") {
                                                index = 19;
                                                showQuestion(data, index, jawab);
                                                next.setAttribute("value", "Selesaikan");
                                            } else if (jawab[6][0] == "GG20") {
                                                if (idSoal.id == "GG20") {
                                                    showResult(data, jawab);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            showResult(data, jawab);
                        }
                    } else if (jawab[0][0] == "GG01" && jawab[0][1] == 2) {
                        if (idSoal.id == "GG01") {
                            index = 1;
                            showQuestion(data, index, jawab);
                        } else if (jawab[1][0] == "GG02" && jawab[1][1] == 2) {
                            if (idSoal.id == "GG02") {
                                index = 20;
                                showQuestion(data, index, jawab);
                            } else if (jawab[2][0] == "GG21") {
                                if (idSoal.id == "GG21") {
                                    index = 21;
                                    showQuestion(data, index, jawab);
                                } else if (jawab[3][0] == "GG22") {
                                    if (idSoal.id == "GG22") {
                                        index = 22;
                                        showQuestion(data, index, jawab);
                                    } else if (jawab[4][0] == "GG23") {
                                        if (idSoal.id == "GG23") {
                                            index = 23;
                                            showQuestion(data, index, jawab);
                                        } else if (jawab[5][0] == "GG24") {
                                            if (idSoal.id == "GG24") {
                                                index = 24;
                                                showQuestion(data, index, jawab);
                                                next.setAttribute("value", "Selesaikan");
                                            } else if (jawab[6][0] == "GG25") {
                                                if (idSoal.id == "GG25") {
                                                    showResult(data, jawab);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            showResult(data, jawab);
                        }
                    } else if (jawab[0][0] == "GG01" && jawab[0][1] == 3) {
                        if (idSoal.id == "GG01") {
                            index = 1;
                            showQuestion(data, index, jawab);
                        } else if (jawab[1][0] == "GG02" && jawab[1][1] == 3) {
                            if (idSoal.id == "GG02") {
                                index = 25;
                                showQuestion(data, index, jawab);
                            } else if (jawab[2][0] == "GG26") {
                                if (idSoal.id == "GG26") {
                                    index = 26;
                                    showQuestion(data, index, jawab);
                                } else if (jawab[3][0] == "GG27") {
                                    if (idSoal.id == "GG27") {
                                        index = 27;
                                        showQuestion(data, index, jawab);
                                    } else if (jawab[4][0] == "GG28") {
                                        if (idSoal.id == "GG28") {
                                            index = 28;
                                            showQuestion(data, index, jawab);
                                        } else if (jawab[5][0] == "GG29") {
                                            if (idSoal.id == "GG29") {
                                                index = 29;
                                                showQuestion(data, index, jawab);
                                                next.setAttribute("value", "Selesaikan");
                                            } else if (jawab[6][0] == "GG30") {
                                                if (idSoal.id == "GG30") {
                                                    showResult(data, jawab);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            showResult(data, jawab);
                        }
                    } else {
                        showResult(data, jawab);
                    }
                }

                previous.style.display = "inline-block";
                previous.removeAttribute("disabled");

                return true;
            });

            previous.addEventListener('click', function () {
                let flag = false;
                let flagEmpty = false;

                const idJawaban = document.querySelectorAll("#formulir div#Jawaban div input");
                const idSoal = document.querySelectorAll("#formulir div")[0];

                for (let j = 0; j < idJawaban.length; j++) {
                    if (idJawaban[j].checked) {
                        for (let k = 0; k < jawab.length; k++) {
                            if (jawab[k][0] == idSoal.id) {
                                jawab[k][1] = idJawaban[j].id;
                                flag = true;
                            } else {
                                flag = false;
                            }
                        }
                        if (!flag) {
                            jawab.push([idSoal.id, idJawaban[j].id]);
                            flag = false;
                        }
                        flagEmpty = true;
                    }
                }

                if (index > 0 && index <= data[1].isiKodeUtama.length - 1) {
                    next.setAttribute("value", "Selanjutnya");
                    if (idSoal.id == "GG03" || idSoal.id == "GG16" || idSoal.id == "GG21" || idSoal.id == "GG26") {
                        index = 1;
                        showQuestion(data, index, jawab);
                        jawab.splice(2);
                    } else if (idSoal.id == "GG08") {
                        index = 2;
                        showQuestion(data, index, jawab);
                        jawab.splice(2);
                    } else if (idSoal.id == "GG13") {
                        index = 7;
                        showQuestion(data, index, jawab);
                        jawab.splice(2);
                    } else {
                        index--;
                        showQuestion(data, index, jawab);
                    }
                }

                if (index == 0) {
                    previous.style.display = "none";
                    previous.setAttribute("disabled", true);
                } else {
                    previous.style.visibility = "inline-block";
                    previous.removeAttribute("disabled");
                }

                return true;
            });
        }).catch(function (err) {});
}

function showQuestion(data, index, jawab) {
    let checked = -1;

    const formulir = document.getElementById("formulir");
    const divUtama = document.createElement("div");
    const divSoal = document.createElement("div");
    const divJawabans = document.createElement("div");

    formulir.innerHTML = '';
    divUtama.setAttribute("id", data[1].isiKodeUtama[index].kode);
    divSoal.setAttribute("id", "Pertanyaan");

    if (jawab.length !== 0) {
        for (let i = 0; i < jawab.length; i++) {
            if (jawab[i][0] == data[1].isiKodeUtama[index].kode) {
                checked = jawab[i][1];
            }
        }
    }

    divSoal.innerHTML = `<h2>${data[1].isiKodeUtama[index].pertanyaan}</h2>`;
    divUtama.append(divSoal);

    for (let j = 0; j < data[1].isiKodeUtama[index].jawaban.length; j++) {
        const divJawaban = document.createElement("div");
        const pilihan = document.createElement("input");

        pilihan.removeAttribute("checked");
        pilihan.setAttribute("type", "radio");
        pilihan.setAttribute("id", j);
        pilihan.setAttribute("name", data[1].isiKodeUtama[index].kode);
        pilihan.setAttribute("value", data[1].isiKodeUtama[index].jawaban[j]);

        if (checked == j) {
            pilihan.setAttribute("checked", true);
        }

        const label = document.createElement("label");
        label.innerText = data[1].isiKodeUtama[index].jawaban[j];
        label.setAttribute("for", j);

        divJawaban.setAttribute("id", `Jawaban${data[1].isiKodeUtama[index].kode}-${j}`);
        divJawaban.append(pilihan, label);

        divJawabans.setAttribute("id", "Jawaban");
        divJawabans.append(divJawaban);

        divUtama.append(divJawabans);
    }

    formulir.append(divUtama);
}

function showResult(data, array) {
    const header = document.getElementById("header");
    header.innerHTML = "<h1>Hasil Diagnosis Malnutrisi Anak Balita</h1><hr>";

    const divUtama = document.getElementById("formulir");
    divUtama.setAttribute("id", "hasilAnalisis");
    divUtama.innerHTML = "";

    const divHasilUtamaAnalisis = document.createElement("div");
    divHasilUtamaAnalisis.setAttribute("id", "hasilUtamaAnalisis");
    divHasilUtamaAnalisis.innerHTML = "<p>Berdasarkan formulir yang telah diisi, maka hasil analisis yang didapat adalah</p>";

    const divPertanyaanAnalisis = document.createElement("div");
    divPertanyaanAnalisis.setAttribute("id", "pertanyaanAnalisis");
    divPertanyaanAnalisis.innerHTML = "<br><h3>Daftar Jawaban Diagnosis</h3>"

    const divSolusiAnalisis = document.createElement("div");
    divSolusiAnalisis.setAttribute("id", "solusiAnalisis");
    divSolusiAnalisis.innerHTML = "<br><h3>Solusi Diagnosis</h3>"

    const buttonDiv = document.getElementById("button");
    buttonDiv.innerHTML = '';

    const buttonBack = document.createElement("input");
    buttonBack.setAttribute("type", "button");
    buttonBack.setAttribute("value", "Ulangi");
    buttonBack.setAttribute("onclick", "backSection()");

    buttonDiv.append(buttonBack);

    if ((array[0][0] == "GG01" && array[0][1] == 0) && (array[1][0] == "GG02" && array[1][1] == 0)) {
        if ((array[2][0] == "GG03" && array[2][1] == 0) && (array[3][0] == "GG04" && array[3][1] == 0) && (
                array[4][0] == "GG05" && array[4][1] == 0) && (array[5][0] == "GG06" && array[5][1] == 0) && (
                array[6][0] == "GG07" && array[6][1] == 0)) {
            divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[0].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[0].deskripsiKode + "</p>";
            for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                        const divTanyaJawab = document.createElement("div");
                        divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                        divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                            `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                        for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                            if (k == array[j][1]) {
                                divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                    .jawaban[k] + "</p>";
                            }
                        }
                        divPertanyaanAnalisis.append(divTanyaJawab);
                    }
                }
            }
        } else if ((array[2][0] == "GG08" && array[2][1] == 0) && (array[3][0] == "GG09" && array[3][1] == 0) &&
            (array[4][0] == "GG10" && array[4][1] == 0) && (array[5][0] == "GG11" && array[5][1] == 0) && (
                array[6][0] == "GG12" && array[6][1] == 0)) {
            divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[1].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[1].deskripsiKode + "</p>";
            for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                        const divTanyaJawab = document.createElement("div");
                        divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                        divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                            `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                        for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                            if (k == array[j][1]) {
                                divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                    .jawaban[k] + "</p>";
                            }
                        }
                        divPertanyaanAnalisis.append(divTanyaJawab);
                    }
                }
            }
        } else if ((array[2][0] == "GG13" && array[2][1] == 0) && (array[3][0] == "GG14" && array[3][1] == 0) &&
            (array[4][0] == "GG15" && array[4][1] == 0)) {
            divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[2].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[2].deskripsiKode + "</p>";
            for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                        const divTanyaJawab = document.createElement("div");
                        divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                        divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                            `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                        for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                            if (k == array[j][1]) {
                                divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                    .jawaban[k] + "</p>";
                            }
                        }
                        divPertanyaanAnalisis.append(divTanyaJawab);
                    }
                }
            }
        }
        for (let i = 0; i < data[2].isiKodeUtama[0].isiKode.length; i++) {
            divSolusiAnalisis.innerHTML += "<p>" + data[2].isiKodeUtama[0].isiKode[i] + "</p>";
        }
    } else if ((array[0][0] == "GG01" && array[0][1] == 1) && (array[1][0] == "GG02" && array[1][1] == 1) && (
            array[2][0] == "GG16" && array[2][1] == 0) && (array[3][0] == "GG17" && array[3][1] == 0) && (
            array[4][0] == "GG18" && array[4][1] == 0) && (array[5][0] == "GG19" && array[5][1] == 0) && (
            array[6][0] == "GG20" && array[6][1] == 0)) {
        divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[3].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[3].deskripsiKode + "</->";
        for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                    const divTanyaJawab = document.createElement("div");
                    divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                    divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                        `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                    for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                        if (k == array[j][1]) {
                            divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                .jawaban[k] + "</p>";
                        }
                    }
                    divPertanyaanAnalisis.append(divTanyaJawab);
                }
            }
        }
        for (let i = 0; i < data[2].isiKodeUtama[1].isiKode.length; i++) {
            divSolusiAnalisis.innerHTML += "<p>" + data[2].isiKodeUtama[1].isiKode[i] + "</p>";
        }
    } else if ((array[0][0] == "GG01" && array[0][1] == 2) && (array[1][0] == "GG02" && array[1][1] == 2) && (
            array[2][0] == "GG21" && array[2][1] == 0) && (array[3][0] == "GG22" && array[3][1] == 0) && (
            array[4][0] == "GG23" && array[4][1] == 0) && (array[5][0] == "GG24" && array[5][1] == 0) && (
            array[6][0] == "GG25" && array[6][1] == 0)) {
        divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[4].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[4].deskripsiKode + "</p>";
        for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                    const divTanyaJawab = document.createElement("div");
                    divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                    divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                        `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                    for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                        if (k == array[j][1]) {
                            divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                .jawaban[k] + "</p>";
                        }
                    }
                    divPertanyaanAnalisis.append(divTanyaJawab);
                }
            }
        }
        for (let i = 0; i < data[2].isiKodeUtama[2].isiKode.length; i++) {
            divSolusiAnalisis.innerHTML += "<p>" + data[2].isiKodeUtama[2].isiKode[i] + "</p>";
        }
    } else if ((array[0][0] == "GG01" && array[0][1] == 3) && (array[1][0] == "GG02" && array[1][1] == 3) && (
            array[2][0] == "GG26" && array[2][1] == 0) && (array[3][0] == "GG27" && array[3][1] == 0) && (
            array[4][0] == "GG28" && array[4][1] == 0) && (array[5][0] == "GG29" && array[5][1] == 0) && (
            array[6][0] == "GG30" && array[6][1] == 0)) {
        divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[5].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[5].deskripsiKode + "</p>";
        for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                    const divTanyaJawab = document.createElement("div");
                    divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                    divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                        `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                    for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                        if (k == array[j][1]) {
                            divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                .jawaban[k] + "</p>";
                        }
                    }
                    divPertanyaanAnalisis.append(divTanyaJawab);
                }
            }
        }
        for (let i = 0; i < data[2].isiKodeUtama[3].isiKode.length; i++) {
            divSolusiAnalisis.innerHTML += "<p>" + data[2].isiKodeUtama[3].isiKode[i] + "</p>";
        }
    } else {
        divHasilUtamaAnalisis.innerHTML += "<h2>" + data[0].isiKodeUtama[6].isiKode + "</h2>" + "<p>" + data[0].isiKodeUtama[6].deskripsiKode + "</p>";
        for (let i = 0; i < data[1].isiKodeUtama.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (data[1].isiKodeUtama[i].kode === array[j][0]) {
                    const divTanyaJawab = document.createElement("div");
                    divTanyaJawab.setAttribute("id", `pertanyaan-${array[j][0]}`);
                    divTanyaJawab.innerHTML = `<p><b>Kode Analisis: ${array[j][0]}</b></p>` +
                        `<p>${data[1].isiKodeUtama[i].pertanyaan}</p>`;
                    for (let k = 0; k < data[1].isiKodeUtama[i].jawaban.length; k++) {
                        if (k == array[j][1]) {
                            divTanyaJawab.innerHTML += "<p><b>Jawaban: </b>" + data[1].isiKodeUtama[i]
                                .jawaban[k] + "</p>";
                        }
                    }
                    divPertanyaanAnalisis.append(divTanyaJawab);
                }
            }
        }
        divSolusiAnalisis.innerHTML += "<p>Tidak ada solusi yang dapat diambil.</p>";
    }
    divUtama.append(divHasilUtamaAnalisis, divPertanyaanAnalisis, divSolusiAnalisis);
}