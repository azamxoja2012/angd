let name = prompt("Enter your name");
let age = prompt("Enter your age");
let gender = prompt("Enter your gender (men/woman)");


let box = gender.toLowerCase();

switch (box) {
  case "men":
    let man = document.createElement("div");
    man.style.width = "300px";
    man.style.padding = "20px";
    man.style.margin = "40px auto";
    man.style.borderRadius = "20px";
    man.style.color = "white";
    man.style.fontFamily = "Arial";
    man.style.textAlign = "center";
    man.style.fontSize = "22px";
    

    man.style.background = "linear-gradient(135deg, #000428, #004e92)";

    man.innerHTML = `
            <h2 style="margin-bottom:10px;">Your Info</h2>
            <p><strong>Name:</strong> ${name}</p>
            
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
        `;

    document.body.appendChild(man);
    break;

  case "woman":
    let woman = document.createElement("div");
    woman.style.width = "300px";
    woman.style.padding = "20px";
    woman.style.margin = "40px auto";
    woman.style.borderRadius = "20px";
    woman.style.color = "white";
    woman.style.fontFamily = "Arial";
    woman.style.textAlign = "center";
    woman.style.fontSize = "22px";

    woman.style.background = "linear-gradient(135deg, #ff5f9e, #ff2e63)"


    woman.innerHTML = `
            <h2 style="margin-bottom:10px;">Your Info</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
        `
        document.body.appendChild(woman)
        break

    default:
        alert("Gender noto‘g‘ri kiritildi")
}