document.querySelector("button").addEventListener("click", getZelda);

async function getZelda() {
  let url = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.data);
  let weaponsArr = data.data;
  let weaponsArrLength = data.data.length;

  //   console.log(weaponsArr.length);

  document.querySelector(".zelda-data").classList.remove("hidden");

  let randomWeaponNum = Math.floor(Math.random() * weaponsArrLength);

  console.log("this is random num", randomWeaponNum);

  let currentWeapon = weaponsArr[randomWeaponNum];

  let weaponName = currentWeapon.name;

  let attackPoints = currentWeapon.attack;

  let descWeapon = currentWeapon.description;

  let image = currentWeapon.image;

  document.querySelector(".img").src = image;
  document.querySelector(".name").innerText = weaponName;
  document.querySelector(".attack").innerText = attackPoints;
  document.querySelector(".desc").innerText = descWeapon;
}
document.querySelector(".zelda-data").classList.add("hidden");
