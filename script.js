
let sbtn = document.getElementById("sbtn")
var num = 1
// if (localStorage.getItem("num") === undefined) {
//     var num = 1
// } else {
//     var num = localStorage.getItem("num")
// }


sbtn.onclick = (e) => {
    e.preventDefault()
    let title = document.getElementsByClassName("tit")[0].value
    let desc = document.getElementsByClassName("desc")[0].value

    let todo = {
        "title": title,
        "desc": desc
    }

    let stodo = JSON.stringify(todo)

    localStorage.setItem(`todo${num}`, stodo)

    num++
    localStorage.setItem("num", num)
    document.getElementsByClassName("tit")[0].value = ""
    document.getElementsByClassName("desc")[0].value = ""
    setTodo()
}



let dtodo = document.getElementById("dtodo")

let allTodo = ""
let setTodo = () => {
    for (let i = 0; i < num; i++) {
        if (localStorage.getItem(`todo${i}`) == null) {
            continue
        } else {
            let todo = JSON.parse(localStorage.getItem(`todo${i}`));
            let ihtml = `<tr>
                        <th scope="row">${i}</th>
                        <td>${todo.title}</td>
                        <td>${todo.desc}</td>
                        <td><button type="button" onclick="removeTodo(${i})" class="btn btn-outline-danger" id="todo${i}">Danger</button></td>
                    </tr>`
            allTodo += ihtml
            // console.log(allTodo)
            // console.log(typeof allTodo)
        }
    }
    dtodo.innerHTML = allTodo
}

setTodo()



let removeTodo = (tid) => {
    let todo = "todo" + tid
    localStorage.removeItem(todo)
    allTodo = ""
    setTodo()
}





