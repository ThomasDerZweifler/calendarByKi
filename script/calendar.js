function generateCalendar(year) {
  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni", 
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  // Fix für DE: Sonntag als letzter Tag der Woche (statt erster).
  const fixDayOffset = (dayIndex) => (dayIndex === 0 ? 6 : dayIndex - 1);

  const calendarContainer = document.getElementById("calendar");

  for (let month = 0; month < 12; month++) {
    const days = daysInMonth(month, year);
    const startDay = fixDayOffset(firstDayOfMonth(month, year));

    const monthHeading = document.createElement("h2");
    monthHeading.className = "month";
    monthHeading.textContent = monthNames[month];
    calendarContainer.appendChild(monthHeading);

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Überschriften für Wochentage
    ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].forEach((day) => {
      const th = document.createElement("th");
      th.textContent = day;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const body = document.createElement("tbody");
    let dayCounter = 1;
    for (let row = 0; dayCounter <= days; row++) {
      const tr = document.createElement("tr");

      for (let col = 0; col < 7; col++) {
        const td = document.createElement("td");

        if (row === 0 && col < startDay) {
          // Leerzeilen vor dem ersten Tag des Monats
          td.textContent = "";
        } else if (dayCounter <= days) {
          td.textContent = dayCounter;
          dayCounter++;
        }

        tr.appendChild(td);
      }

      body.appendChild(tr);
    }

    table.appendChild(body);
    calendarContainer.appendChild(table);
  }
}

// Kalender für 2025 generieren
generateCalendar(2025);