export function myFunction() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if (name !== "") {
        document.getElementById("uname").innerHTML = "Name : " + name;
        document.getElementById("uage").innerHTML = "Age :" + age;
        if (document.getElementById("gfemale").checked) {
            var gender = document.getElementById("gfemale").value;
        } else if (document.getElementById("gmale").checked) {
            gender = document.getElementById("gmale").value;
        }
        document.getElementById("ugender").innerHTML = "Gender :" + gender;
        document.getElementById("invalid").innerHTML= "";
    } else if (name === "") {
        document.getElementById("invalid").innerHTML= "Enter Name";
        document.getElementById("uname").innerHTML = "";
        document.getElementById("uage").innerHTML = "";
        document.getElementById("ugender").innerHTML = "";
    }

}
    
    
    

