// background
document.getElementById("change-bg").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
// window location
document
  .getElementById("discover-card")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "sec.html";
  });

const buttons = document.querySelectorAll(".btn.text-white");
let totalCount = 0;
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    totalCount += 1;
    event.preventDefault();
    alert("Board update successfully.");
    this.disabled = true;

    if (totalCount === 6) {
      alert("congrates!!! You have completed all the current task");
    }
  });
}
console.log(totalCount);

let minusCount = 6;
let plusCount = 23;

const minusDisplay = document.getElementById("minus-counter");
const plusDisplay = document.getElementById("add-counter");
const buttons1 = document.querySelectorAll(".btn.text-white");
for (const button of buttons1) {
  button.addEventListener("click", function () {
    if (minusCount > 0) {
      minusCount--;
      plusCount++;
      minusDisplay.innerText = ` ${minusCount}`;
      plusDisplay.innerText = ` ${plusCount}`;
      button.disabled = true;
    }
  });
}

// add history

const date = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const formattedDate = date.toLocaleDateString(undefined, options);

const historyDiv = document.getElementById("history");
const clearHistoryBtn = document.getElementById("history-btn");
const titles = document.querySelectorAll(".data");

titles.forEach((item) => {
  const getTitle = item.children[1].innerText;
  item.children[3].children[1].addEventListener("click", function () {
    const date = new Date();

const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});


    const newElement = document.createElement("div");
    const newParagraph = document.createElement("p");
    const dateElement = document.createElement("span");
    const newTitle = document.createElement("h2");
    newTitle.innerText = getTitle;
    newParagraph.innerText = `You have Complete The Task Add Dark Mode at`;
    dateElement.innerText = formattedTime;
    newTitle.className = "text-[18px] font-medium text-blue-600";
    newElement.className = "text-left bg-[#F4F7FF] p-2 rounded-xl w-full mt-2";
    dateElement.className = "text-[14px] mt-1 text-blue-400";
    newElement.appendChild(newTitle);
    newElement.appendChild(newParagraph);
    newElement.appendChild(dateElement);
    historyDiv.appendChild(newElement);
  });
});

clearHistoryBtn.addEventListener("click", function () {
  historyDiv.innerHTML = "";
});

document.querySelector(".date-container").innerHTML = formattedDate;
