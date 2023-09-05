'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { APIData } from '../data';
import '../public/fontawesome/css/fontawesome.css';
import '../public/fontawesome/css/brands.css';
import '../public/fontawesome/css/solid.css';

export default function Home() {
	const [language, setLanguage] = useState('ID');
	let data;

	APIData[0].bahasa === language ? (data = APIData[0]) : (data = APIData[1]);

	return (
		<React.Fragment>
			<div
				data-aos="fade-down"
				className="fixed top-2 right-2 z-50">
				<div className="flex flex-row gap-0.5 p-1 text-xs items-center content-center bg-abw-500 text-white w-fit">
					<div
						className={
							language === 'ID'
								? 'bg-white text-abw-500 py-0.5 px-2 cursor-pointer'
								: 'bg-abw-500 text-white py-0.5 px-2 cursor-pointer'
						}
						onClick={() => setLanguage('ID')}>
						ID
					</div>
					<div
						className={
							language === 'EN'
								? 'bg-white text-abw-500 py-0.5 px-2 cursor-pointer'
								: 'bg-abw-500 text-white py-0.5 px-2 cursor-pointer'
						}
						onClick={() => setLanguage('EN')}>
						EN
					</div>
				</div>
			</div>
			<main className="h-fit min-h-full overflow-hidden">
				<div
					id="beranda"
					className="w-full h-fit min-h-screen p-8 relative text-abw-500 bg-white flex flex-col gap-4 justify-center items-center">
					<Image
						data-aos="fade-up"
						src="/picture/beranda/logoAbwBlue.svg"
						priority={true}
						width={0}
						height={0}
						alt="Logo ABW Blue"
						className="w-full max-w-[250px] h-auto"
					/>
					<div className="relative flex flex-col justify-center items-center text-center p-8">
						<div className="flex flex-col gap-4 mb-8 z-10">
							<h1
								data-aos="fade-down"
								className="text-2xl md:text-3xl font-bold text-abw-500 leading-loose">
								Adhitya Bagus Wicaksono
							</h1>
							<h2
								data-aos="fade-down"
								className="text-md md:text-xl font-semibold text-abw-500 leading-loose">
								UI/UX Designer & Front End Website Developer
							</h2>
						</div>
					</div>
				</div>

				<div
					id="tentang-saya"
					className="w-full h-fit min-h-screen p-8 relative text-white bg-abw-500 flex flex-col justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenTentangSaya.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenTentangSaya.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full flex flex-col gap-2 justify-center items-center">
							<Image
								data-aos="fade-up"
								src="/picture/tentang-saya/abwPhoto.png"
								width={200}
								height={0}
								alt="ABW Photo"
								className="w-full max-w-[200px] h-auto"
							/>
							<p
								data-aos="fade-up"
								className="text-md leading-loose text-center">
								{data.kontenTentangSaya.isiKonten}
							</p>
						</div>
					</div>
				</div>

				<div
					id="riwayat-pendidikan"
					className="w-full h-fit min-h-screen p-8 relative text-abw-500 bg-white flex flex-col justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenRiwayatPendidikan.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenRiwayatPendidikan.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full grid grid-flow-row gap-4">
							{data.kontenRiwayatPendidikan.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.judulPendidikan}>
										<div className="w-full bg-white text-abw-500 p-8 flex flex-col md:flex-row gap-4 justify-center items-center border border-abw-500 md:-skew-x-12">
											<Image
												src={dataMap.gambar}
												width={150}
												height={0}
												alt={dataMap.judulPendidikan}
												className="w-full max-w-[150px] md:skew-x-12 h-auto"
											/>
											<div className="w-full flex flex-col gap-1 justify-center md:justify-start items-center md:items-start md:skew-x-12">
												<h3 className="text-xl font-bold leading-loose text-center md:text-left">
													{dataMap.judulPendidikan}
												</h3>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.fakultasPendidikan}
												</p>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.programStudiPendidikan}
												</p>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.durasiPendidikan}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div
					id="riwayat-pekerjaan"
					className="w-full h-fit min-h-screen p-8 relative text-white bg-abw-500 flex flex-col justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenRiwayatPekerjaan.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenRiwayatPekerjaan.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full grid grid-flow-row gap-4">
							{data.kontenRiwayatPekerjaan.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.judulPekerjaan}>
										<div className="w-full bg-white text-abw-500 p-8 flex flex-col md:flex-row gap-4 justify-center items-center border border-abw-500 md:-skew-x-12">
											<Image
												src={dataMap.gambar}
												width={150}
												height={0}
												alt={dataMap.judulPekerjaan}
												className="w-full max-w-[150px] md:skew-x-12"
											/>
											<div className="w-full flex flex-col gap-1 justify-center md:justify-start items-center md:items-start md:skew-x-12">
												<h3 className="text-xl font-bold leading-loose text-center md:text-left">
													{dataMap.judulPekerjaan}
												</h3>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.namaPerusahaan}
												</p>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.durasiPekerjaan}
												</p>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.durasiPendidikan}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div
					id="riwayat-sertifikasi"
					className="w-full h-fit min-h-screen p-8 relative text-abw-500 bg-white flex flex-col justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenRiwayatSertifikasi.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenRiwayatSertifikasi.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full grid grid-flow-row gap-4">
							{data.kontenRiwayatSertifikasi.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.judulSertifikasi}>
										<div className="w-full bg-white text-abw-500 p-8 flex flex-col md:flex-row gap-4 justify-center items-center border border-abw-500 md:-skew-x-12">
											<Image
												src={dataMap.gambar}
												width={150}
												height={0}
												alt={dataMap.judulSertifikasi}
												className="w-full max-w-[150px] md:skew-x-12"
											/>
											<div className="w-full flex flex-col justify-center md:justify-start items-center md:items-start md:skew-x-12">
												<h3 className="text-xl font-bold leading-loose text-center md:text-left">
													{dataMap.judulSertifikasi}
												</h3>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.namaSertifikator}
												</p>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.pemberianSertifikat}
												</p>
												<Link
													href={dataMap.tautanSertifikat}
													target="_blank"
													rel="noopener"
													className="w-fit mt-2 px-3 py-1.5 bg-abw-500 text-white -skew-x-12 duration-300 hover:bg-abw-700">
													<button
														type="button"
														className="text-sm skew-x-12">
														{language === 'ID'
															? 'Kunjungi Sertifikat '
															: 'See Sertificate '}
														<i className="fa-solid fa-chevron-right"></i>
													</button>
												</Link>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div
					id="keahlian"
					className="w-full h-fit min-h-screen p-8 relative text-white bg-abw-500 flex flex-col justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenKeahlian.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenKeahlian.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full flex flex-row flex-wrap justify-center gap-4">
							{data.kontenKeahlian.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.nama}
										className="flex items-stretch">
										<div className="group relative w-36 md:h-36 bg-white text-abw-500 p-8 flex flex-col gap-4 justify-center items-center md:-skew-x-12">
											<Image
												src={dataMap.gambar}
												width={100}
												height={0}
												alt={dataMap.nama}
												className="md:skew-x-12 md:group-hover:blur-[2px]"
											/>
											<div className="md:opacity-0 group-hover:opacity-100 md:absolute md:top-0 md:left-0 w-full md:h-full md:bg-abw-500/80 md:p-4 flex justify-center items-center text-center duration-200">
												<h4 className="font-semibold text-abw-500 md:text-white md:skew-x-12">
													{dataMap.nama}
												</h4>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div
					id="riwayat-organisasi"
					className="w-full h-fit min-h-screen p-8 relative text-abw-500 bg-white flex flex-col justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenRiwayatOrganisasi.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenRiwayatOrganisasi.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full grid grid-flow-row gap-4">
							{data.kontenRiwayatOrganisasi.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.judulOrganisasi}>
										<div className="w-full bg-white text-abw-500 p-8 flex flex-col md:flex-row gap-4 justify-center items-center border border-abw-500 md:-skew-x-12">
											<Image
												src={dataMap.gambar}
												width={150}
												height={0}
												alt={dataMap.judulOrganisasi}
												className="w-full max-w-[150px] md:skew-x-12"
											/>
											<div className="w-full flex flex-col justify-center md:justify-start items-center md:items-start md:skew-x-12">
												<h3 className="text-xl font-bold leading-loose text-center md:text-left">
													{dataMap.judulOrganisasi}
												</h3>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.posisiOrganisasi}
												</p>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.durasiOrganisasi}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div
					id="riwayat-proyek"
					className="w-full h-fit min-h-screen p-8 relative text-white bg-abw-500 flex flex-col gap-0 justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenRiwayatProyek.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenRiwayatProyek.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full grid grid-flow-row gap-4">
							{data.kontenRiwayatProyek.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.judulProyek}>
										<div className="w-full bg-white text-abw-500 p-8 flex flex-col md:flex-row gap-4 justify-center items-center border border-abw-500 md:-skew-x-12">
											<Image
												src={dataMap.gambar}
												width={150}
												height={0}
												alt={dataMap.judulProyek}
												className="w-full max-w-[150px] md:skew-x-12"
											/>
											<div className="w-full flex flex-col justify-center md:justify-start items-center md:items-start md:skew-x-12">
												<h3 className="text-xl font-bold leading-loose text-center md:text-left">
													{dataMap.judulProyek}
												</h3>
												<p className="text-md font-normal leading-loose text-center md:text-left">
													{dataMap.posisiProyek}
												</p>
												<div className="flex flex-row flex-wrap justify-center md:justify-start items-center md:items-start mt-2 gap-2">
													{dataMap.tautanPrototipe !== '-' && (
														<Link
															href={dataMap.tautanPrototipe}
															target="_black"
															rel="noopener"
															className="w-fit px-3 py-1 bg-abw-500 text-white duration-300 hover:bg-abw-700 -skew-x-12">
															<button
																type="button"
																className="text-sm skew-x-12"
																title={
																	language === 'ID'
																		? 'Kunjungi Prototipe '
																		: 'See Prototype '
																}>
																{language === 'ID'
																	? 'Kunjungi Prototipe '
																	: 'See Prototype '}
																<i className="fa-solid fa-chevron-right"></i>
															</button>
														</Link>
													)}
													{dataMap.tautanGithub !== '-' && (
														<Link
															href={dataMap.tautanGithub}
															target="_blank"
															rel="noopener"
															className="w-fit px-3 py-1 bg-abw-500 text-white duration-300 hover:bg-abw-700 -skew-x-12">
															<button
																type="button"
																className="text-sm skew-x-12"
																title={
																	language === 'ID'
																		? 'Kunjungi Sumber '
																		: 'See Source Code '
																}>
																{language === 'ID'
																	? 'Kunjungi Sumber '
																	: 'See Source Code '}
																<i className="fa-solid fa-chevron-right"></i>
															</button>
														</Link>
													)}
													{dataMap.tautanWeb !== '-' && (
														<Link
															href={dataMap.tautanWeb}
															target="_blank"
															rel="noopener"
															className="w-fit px-3 py-1 bg-abw-500 text-white duration-300 hover:bg-abw-700 -skew-x-12">
															<button
																type="button"
																className="text-sm skew-x-12"
																title={
																	language === 'ID'
																		? 'Kunjungi Web '
																		: 'See Website '
																}>
																{language === 'ID'
																	? 'Kunjungi Web '
																	: 'See Website '}
																<i className="fa-solid fa-chevron-right"></i>
															</button>
														</Link>
													)}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div
					id="kontak-sosial-media"
					className="w-full h-fit min-h-screen p-8 relative text-abw-500 bg-white flex flex-col gap-0 justify-center items-center">
					<div className="container flex flex-col gap-8 justify-center items-center">
						<h1
							data-aos="fade-up"
							className="text-2xl font-bold leading-loose text-center">
							{data.kontenKontakSosialMedia.judulKonten[0]}
							<br />
							<span className="text-xl">
								{data.kontenKontakSosialMedia.judulKonten[1]}
							</span>
						</h1>
						<div className="w-full flex flex-row flex-wrap justify-center gap-4">
							{data.kontenKontakSosialMedia.isiKonten.map((dataMap) => {
								return (
									<div
										data-aos="fade-up"
										key={dataMap.platformSosialMedia}
										className="w-full md:max-w-xl">
										<div className="w-full bg-white text-abw-500 p-8 flex flex-col gap-4 justify-center items-center border border-abw-500 md:-skew-x-12">
											<div className="w-[175px] h-[175px] bg-abw-500 text-white flex justify-center items-center md:skew-x-12">
												<p className="text-6xl">
													<i className={dataMap.gambar}></i>
												</p>
											</div>
											<div className="w-full flex flex-col justify-center md:justify-start items-center md:skew-x-12">
												<h3 className="text-xl font-bold leading-loose md:text-left">
													{dataMap.platformSosialMedia}
												</h3>
												<p className="text-sm md:text-md font-normal leading-loose md:text-left">
													{dataMap.namaSosialMedia}
												</p>
												<Link
													href={dataMap.tautanSosialMedia}
													target="_blank"
													rel="noopener"
													className="w-fit mt-2 px-3 py-1 bg-abw-500 text-white duration-300 hover:bg-abw-700 -skew-x-12">
													<button
														type="button"
														className="text-sm skew-x-12"
														title={
															language === 'ID'
																? 'Kunjungi Tautan '
																: 'See Link '
														}>
														{language === 'ID'
															? 'Kunjungi Tautan '
															: 'See Link '}
														<i className="fa-solid fa-chevron-right"></i>
													</button>
												</Link>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}
