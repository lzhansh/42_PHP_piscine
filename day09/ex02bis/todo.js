let ft_list;
let cookie = [];

$(document).ready(function() {
    $("#new").click(newList);
    $("#ft_list div").click(delList);
    ft_list = $("#ft_list");
    let temp = document.cookie;
    if (temp) {
        cookie = JSON.parse(temp);
        cookie.forEach(function(e) {
            addList(e);
        });
    }
}

$(window).unload(function() {
    let ret_val = ft_list.children();
    let c = [];
    for (let i = 0; i < ret_val.length; i++) {
        c.unshift(ret_val[i].innerHTML);
    }
    document.cookie = JSON.stringify(c);
})

function newList() {
    let ret_val = prompt("Enter todo list element:");
    if (ret_val !== "") {
        addList(ret_val)
    }
}

function addList(val) {
    ft_list.prepend($('<div>'+val+'</div>').click(delList));
}

function delList() {
    if (confirm("Are you sure you want to delete?")) {
        this.remove();
    }
}