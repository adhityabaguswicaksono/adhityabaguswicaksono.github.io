const date = new Date();
const hasil = document.getElementById("hasil");
const submit = document.getElementById("submit");
const dayOption = document.getElementById("pilihanTanggal");
const monthOption = document.getElementById("pilihanBulan");
const yearOption = document.getElementById("pilihanTahun");
const dayToday = Number(date.getDate());
const monthToday = Number(date.getMonth() + 1);
const yearToday = Number(date.getFullYear());

let valueNow = Number(date.getDate());
let str = "";

const monthName = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

function setMonth() {
    str = "";
    for (let i = 1; i <= monthName.length; i++) {
        if (i === Number(date.getMonth() + 1)) {
            str += `<option value="${i}" selected>${monthName[i-1]}</option>`;
        } else {
            str += `<option value="${i}">${monthName[i-1]}</option>`;
        }
    }
    monthOption.innerHTML = str;
}

function setYear() {
    str = "";
    for (let i = 1; i <= Number(date.getFullYear()) + 100; i++) {
        if (i === Number(date.getFullYear())) {
            str += `<option value="${i}" selected>${i}</option>`;
        } else {
            str += `<option value="${i}">${i}</option>`;
        }
    }
    yearOption.innerHTML = str;
}

function setDay(valueNow) {
    str = "";
    if (Number(monthOption.value) == 1 || Number(monthOption.value) == 3 || Number(monthOption.value) == 5 || Number(monthOption.value) == 7 || Number(monthOption.value) == 8 || Number(monthOption.value) == 10 || Number(monthOption.value == 12)) {
        for (let i = 1; i <= 31; i++) {
            if (i === valueNow) {
                str += `<option value="${i}" selected>${i}</option>`;
            } else {
                str += `<option value="${i}">${i}</option>`;
            }
        }
    } else if (Number(monthOption.value) == 4 || Number(monthOption.value) == 6 || Number(monthOption.value) == 9 || Number(monthOption.value) == 11) {
        for (let i = 1; i <= 30; i++) {
            if (i === valueNow) {
                str += `<option value="${i}" selected>${i}</option>`;
            } else {
                str += `<option value="${i}">${i}</option>`;
            }
        }
    } else if (Number(monthOption.value) == 2) {
        if (Number(yearOption.value) % 4 == 0) {
            for (let i = 1; i <= 29; i++) {
                if (i === valueNow) {
                    str += `<option value="${i}" selected>${i}</option>`;
                } else {
                    str += `<option value="${i}">${i}</option>`;
                }
            }
        } else {
            for (let i = 1; i <= 28; i++) {
                if (i === valueNow) {
                    str += `<option value="${i}" selected>${i}</option>`;
                } else {
                    str += `<option value="${i}">${i}</option>`;
                }
            }
        }
    }
    dayOption.innerHTML = str;
    return valueNow;
};

monthOption.addEventListener("input", function () {
    valueNow = Number(dayOption.value);
    valueNow = setDay(valueNow);
});

yearOption.addEventListener("input", function () {
    valueNow = Number(dayOption.value);
    valueNow = setDay(valueNow);
});


submit.addEventListener("click", function () {
    if (new Date(yearToday, monthToday, dayToday) > new Date(Number(yearOption.value), Number(monthOption.value), Number(dayOption.value))) {
        hasil.innerText = `Waktu telah Berlalu sebanyak\n${Math.abs(yearToday - Number(yearOption.value))} Tahun ${Math.abs(monthToday - Number(monthOption.value))} Bulan ${Math.abs(dayToday - Number(dayOption.value))} Hari`;
    } else if (new Date(yearToday, monthToday, dayToday) < new Date(Number(yearOption.value), Number(monthOption.value), Number(dayOption.value))) {
        hasil.innerText = `Waktu akan Datang sebanyak\n${Math.abs(yearToday - Number(yearOption.value))} Tahun ${Math.abs(monthToday - Number(monthOption.value))} Bulan ${Math.abs(dayToday - Number(dayOption.value))} Hari`;
    } else {
        hasil.innerText = `Waktu Tersebut merupakan Hari Ini`;
    }
});

setMonth();
setYear();
setDay(valueNow);