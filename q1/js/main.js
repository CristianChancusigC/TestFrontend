let selectedCell = null;

// Function to get the current week dates and format them starting from Sunday
function getCurrentWeek() {
  const today = new Date();
  const week = [];
  const startDate = today.getDate() - today.getDay();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today.setDate(startDate + i));
    const dayName = date.toLocaleString("default", { weekday: "short" });
    const dateFormatted = `${dayName} ${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`;
    week.push(dateFormatted);
  }
  return week;
}

// Function to render the table header with the current week dates
function renderTableHead() {
  const days = getCurrentWeek();
  let headRow = `<tr class = text-center><th>#</th>`;
  days.forEach((day) => {
    headRow += `<th class = text-center>${day}</th>`;
  });
  headRow += `</tr>`;
  $("#week-table-head").html(headRow);
}

// Function to render the table rows with empty cells
function renderTableRow(rowCount = 12) {
  let rows = ``;
  for (let i = 0; i < rowCount; i++) {
    rows += `<tr><td>${i + 1}</td>`;
    for (let j = 0; j < 7; j++) {
      rows += `<td class="time-cell" data-row="${i}" data-col="${j}"></td>`;
    }
    rows += `</tr>`;
  }
  $("#week-table-body").html(rows);
}

// Function to generate a random job ID
function generateRandomId(max) {
  return Math.floor(Math.random() * max);
}

// Function to calculate the total hours between start and finish time
function calculateTime(startTime, finishTime) {
  const start = parseInt(startTime.split(":")[0]);
  const finish = parseInt(finishTime.split(":")[0]);
  const totalHours = finish - start;
  // Check if the start time is greater than the finish time
  if (totalHours <= 0) {
    alert("Finish time must be greater than start time.");
    return;
  }
  return totalHours;
}

$("#approve-btn").click(function () {
  const startTime = $("#start-time").val();
  const finishTime = $("#finish-time").val();
  const jobId = $("#job-id").val();

  // Validate input fields
  if (!startTime || !finishTime || !jobId) {
    alert("Please fill all fileds.");
    return;
  }
  const totalHours = calculateTime(startTime, finishTime);
  if (totalHours > 0) {
    selectedCell
      .html(
        `<div class="time-cell-content">
        <span class="time-cell-time">${totalHours} hr</span>
          <span class="time-cell-job-id">${jobId}</span>
        </div>`
      )
      .removeClass("cell-declined")
      .addClass("cell-approved");
    $("#schedule-Modal").modal("hide");
  }
});

$("#decline-btn").click(function () {
  const startTime = $("#start-time").val();
  const finishTime = $("#finish-time").val();
  const jobId = $("#job-id").val();
  if (!startTime || !finishTime || !jobId) {
    alert("Please fill in all fields.");
    return;
  }
  const totalHours = calculateTime(startTime, finishTime);

  if (totalHours > 0) {
    selectedCell
      .html(
        `<div class="time-cell-content">
        <span class="time-cell-time">${totalHours} hr</span>
          <span class="time-cell-info">declinate</span>
        </div>`
      )
      .removeClass("cell-approved")
      .addClass("cell-declined");

    $("#schedule-Modal").modal("hide");
  }
});

$(document).ready(function () {
  // Render the table header and rows on page load
  renderTableHead();
  renderTableRow(12);

  // Initialize the modal
  $(document).on("click", ".time-cell", function () {
    const col = $(this).data("col");
    const today = new Date();
    const startDate = today.getDate() - today.getDay();
    const selectDate = new Date(today.setDate(startDate + col));
    const modalFormatedDate = selectDate.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    $("#modal-date").text(`${modalFormatedDate}`);

    $("#start-time").val("");
    $("#finish-time").val("");
    $("#job-id").val(generateRandomId(100000));
    selectedCell = $(this);

    $("#schedule-Modal").modal("show");
  });
});
