var board = document.createElement("div")
board.style.width = "1000px"
board.style.flexDirection = "row"
board.style.display = "flex";
board.style.flexWrap = "wrap";
async function siva() {
    try {
        var users = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        var data = await users.json();
        console.log(data)
    } catch (err) {

        console.log(err.message);
    }
    data.forEach(element => {
        var box = document.createElement("div");
        box.style.width = "330px"
        box.style.height = "100%";
        box.style.backgroundColor = "#c0c0c0";
        box.style.border = "3px solid black";
        //box.innerText = "hi hello";
        box.style.margin = "5px"
        board.appendChild(box)

        var img = document.createElement("img")
        img.setAttribute("src", element.image_link);
        img.style.width = "300px"
        box.appendChild(img)

        var brand = document.createElement("div")
        brand.innerText = "Brand:" + element.brand;
        brand.style.textAlign = "center";
        brand.style.fontFamily = "Times New Roman, Times, serif"
        box.appendChild(brand)

        var name = document.createElement("div")
        name.innerText = "Name:" + element.name;
        name.style.textAlign = "center";
        name.style.textDecorationColor = "green"
        box.appendChild(name)

        var price = document.createElement("div")
        price.innerText = "Price:" + element.price + "$";
        price.style.textAlign = "center";
        price.style.color = "red";
        box.appendChild(price)

        var link = document.createElement("div")
        link.innerText = "Product Link" + element.product_link;
        link.style.textAlign = "left"
        link.style.color = "blue"
        box.appendChild(link)

        var des = document.createElement("div")
        des.innerText = "description" + element.description;
        des.style.textAlign = "left";
        box.appendChild(des)
    });
}

siva();
document.body.appendChild(board)