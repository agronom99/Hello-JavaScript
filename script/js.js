// alert('Prsvit');
// confirm("123");
// prompt("777");

const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2")[0];
// const heading2 = document.getElementsByClassName("h2-class")[0];
const heading2 = document.querySelector("#h2-class");
console.dir(heading2);

const heading3 = heading2.nextElementSibling;

console.log(heading3);

setTimeout(() => {
  addStylesTo(
    heading,
    (text = "Привіт JavaScript"),
    (color = "#F00"),
    (fontSize = "40px")
  );
}, 2500);

const link = heading2.querySelector("a");

setTimeout(() => {
  addStylesTo(
    link,
    (text = "Привіт HTML+JavaScript  нажми на кнопку"),
    (color = "#00F"),
    (fontSize = "30px")
  );
}, 3500);

setTimeout(() => {
  addStylesTo(
    heading3,
    (text = "Привіт CSS+JavaScript"),
    (color = "#0F0"),
    (fontSize = "25px")
  );
}, 4500);

function addStylesTo(node, text, color, fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "orange";
  node.style.width = "100%";
  node.style.disolay = "block";
  node.style.padding = "50px";
  //   node.style.marginTop = "100px";

  //   node.style.marginRight = "100px";
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if ((heading.style.color = "#F00")) {
    heading.style.color = "#fff";
    heading.style.backgroundColor = "#000";
  } else {
    heading.style.color = "#F00";
    heading.style.backgroundColor = "orange";
  }
};

heading3.addEventListener("dblclick", () => {
  if ((heading3.style.color = "#0F0")) {
    heading3.style.color = "#fff";
    heading3.style.backgroundColor = "#000";
  } else {
    heading3.style.color = "#0F0";
    heading3.style.backgroundColor = "orange";
  }
});
