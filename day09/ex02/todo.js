let ft_list;
let cookie = [];

window.onload = function() {
    document.querySelector("#new").addEventListener("click", newList);
    ft_list = document.querySelector("#ft_list");
    let temp = document.cookie;
    if (temp) {
        cookie = JSON.parse(temp);
        cookie.forEach(function(e) {
            addList(e);
        });
    }
}

window.onunload = function() {
    let ret_val = ft_list.children;
    let c = [];
    for (let i = 0; i < ret_val.length; i++) {
        c.unshift(ret_val[i].innerHTML);
    }
    document.cookie = JSON.stringify(c);
}

function newList() {
    let ret_val = prompt("Enter todo list element:");
    if (ret_val !== "") {
        addList(ret_val)
    }
}

function addList(val) {
    let div = document.createElement("div");
    div.innerHTML = val;
    div.addEventListener("click", delList);
    ft_list.insertBefore(div, ft_list.firstChild);
}

function delList() {
    if (confirm("Are you sure you want to delete?")) {
        this.parentElement.removeChild(this);
    }
}