console.log("Manipulasi String Kalimat 1");
let kalimat1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
console.log(kalimat1.toLowerCase());
console.log(kalimat1.toUpperCase());
console.log("\n");

console.log("Manipulasi String Kalimat 2");
let kalimat2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";
console.log(kalimat2.toLowerCase());
console.log(kalimat2.toUpperCase());
console.log("\n");

console.log("Print Nilai Ascii dari Suatu karakter");
let kalimat3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let tampungAscii = [];
for (let i = 0; i < 6; i++) {
  tampungAscii[i] = kalimat3.charCodeAt(i);
}
console.log(tampungAscii[0] + "-" + tampungAscii[1] + "-" + tampungAscii[2] + "-" + tampungAscii[3] + "-" + tampungAscii[4] + "-" + tampungAscii[5]);
