document.querySelector(".get-weapon").addEventListener("click", getZelda);

async function getZelda() {
  let url = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.data);
  let weaponsArr = data.data;
  let weaponsArrLength = data.data.length;

  // console.log(weaponsArr);

  document.querySelector(".zelda-data").classList.remove("hidden");
  let currentWeaponNum = Math.floor(Math.random() * weaponsArrLength);

  function randomWeaponGen(index) {
    let randomOpIndex = Math.floor(Math.random() * weaponsArrLength);
    if (index === randomOpIndex) {
      randomWeaponGen();
    }
    return randomOpIndex;
  }
  randomWeaponGen(currentWeaponNum);

  console.log("this is current num", currentWeaponNum);

  let currentWeapon = weaponsArr[currentWeaponNum];

  let weaponName = currentWeapon.name;

  let attackPoints = currentWeapon.attack;

  let descWeapon = currentWeapon.description;

  let image = currentWeapon.image;

  // document.querySelector(".attack").innerText = attackPoints;
  // document.querySelector(".desc").innerText = descWeapon;
  let ranOptionNameOne = weaponsArr[randomWeaponGen()].name;
  let ranOptionNameTwo = weaponsArr[randomWeaponGen()].name;
  let ranOptionNameThree = weaponsArr[randomWeaponGen()].name;
  let correctOption = weaponName;

  let arrOfOptions = [
    { text: correctOption, ans: true },
    { text: ranOptionNameThree, ans: false },
    { text: ranOptionNameTwo, ans: false },
    { text: ranOptionNameOne, ans: false },
  ];
  let randomOpNum = Math.floor(Math.random() * arrOfOptions.length);
  const questions = [
    {
      id: 0,
      q: "what is the name of this weapon?",
      a: [
        {
          op: arrOfOptions[randomOpNum].text,
          isCorrect: arrOfOptions[randomOpNum].ans,
        },
        {
          op: arrOfOptions[0].text,
          isCorrect: arrOfOptions[0].ans,
        },
        {
          op: weaponsArr[randomWeaponGen()].name,
          isCorrect: weaponsArr[randomWeaponGen()].name === weaponName,
        },
        {
          op: weaponsArr[randomWeaponGen()].name,
          isCorrect: weaponsArr[randomWeaponGen()].name === weaponName,
        },
      ],
    },
  ];
  let op1 = document.querySelector(".op1");
  let op2 = document.querySelector(".op2");
  let op3 = document.querySelector(".op3");
  let op4 = document.querySelector(".op4");

  op1.innerText = questions[0].a[0].op;
  op2.innerText = questions[0].a[1].op;
  op3.innerText = questions[0].a[2].op;
  op4.innerText = questions[0].a[3].op;

  console.log(
    "this is first op ans ",

    questions[0].a[0].isCorrect
  );
  document.querySelector(".question").innerText = questions[0].q;
  document.querySelector(".img").src = image;

  console.log("this is ans:", questions[0].a[2].op);

  // op1.innerText = "hello";
  // console.log("this is q:", questions[0].a[0].op1);
}
document.querySelector(".zelda-data").classList.add("hidden");
