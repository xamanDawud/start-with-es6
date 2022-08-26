document.getElementById("change-bg").addEventListener("click", function() {
    let friends = document.getElementsByClassName("friend");
    for (friend of friends) {
        let element = friend;
        element.style.backgroundColor = "pink";
        element.style.padding = "10px";
        element.style.margin = "10px";
    }
});

document.getElementById("add-new").addEventListener("click", function() {
    let parent = document.getElementById("friends");
    let newItem = document.createElement("div");
    newItem.innerHTML = `
    <h2>Friend - 66</h2>
    <p> Explicabo aspernatur eveniet, dolorum dignissimos error nesciunt veniam aperiam totam officia eius libero inventore ab velit. Sed aut sapiente natus.</p>
`;
    newItem.setAttribute("class", "friend");
    parent.appendChild(newItem);
});