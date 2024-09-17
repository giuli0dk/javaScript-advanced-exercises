
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
    const taskInput = document.querySelector(".task");

    btn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        let ul = document.querySelector("ul");
        if (!ul) {
            ul = document.createElement("ul");
            document.body.appendChild(ul);
        }

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(span);
        ul.appendChild(li);

        taskInput.value = "";
    });
});