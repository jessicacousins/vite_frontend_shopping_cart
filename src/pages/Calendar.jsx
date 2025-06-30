import React, { useState } from "react";
import "./Calendar.css";

// hard-coded events for 2025
const EVENTS = [
  { date: "2025-01-15", title: "Winter Clearance Sale" },
  { date: "2025-02-14", title: "Valentine’s Day Specials" },
  { date: "2025-03-17", title: "St. Patrick’s Day Green Deals" },
  { date: "2025-04-01", title: "Spring Fling Farmers’ Market" },
  { date: "2025-05-05", title: "Cinco de Mayo Fiesta" },
  { date: "2025-06-20", title: "Summer Kick-off BBQ" },
  { date: "2025-07-04", title: "Independence Day Fireworks & BBQ" },
  { date: "2025-09-01", title: "Labor Day Weekend Sale" },
  { date: "2025-10-31", title: "Halloween Trick-or-Treat Event" },
  { date: "2025-11-25", title: "Black Friday Doorbusters" },
  { date: "2025-12-15", title: "Holiday Baking Demo" },
  { date: "2025-12-31", title: "New Year’s Eve Celebration" },
];

//  get month name
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar() {
  const [visibleCount, setVisibleCount] = useState(3);

  const [selectedMonth, setSelectedMonth] = useState(null);

  const eventsByMonth = EVENTS.reduce((acc, e) => {
    const m = new Date(e.date).getMonth();
    acc[m] = acc[m] || [];
    acc[m].push(e);
    return acc;
  }, {});

  const availableMonths = Object.keys(eventsByMonth)
    .map(Number)
    .sort((a, b) => a - b);

  const handleLoadMore = () => {
    setVisibleCount((c) => Math.min(c + 3, 12));
  };

  const handleSelect = (e) => {
    const m = e.target.value === "" ? null : Number(e.target.value);
    setSelectedMonth(m);
  };

  const monthsToShow =
    selectedMonth !== null
      ? [selectedMonth]
      : availableMonths.filter((m) => m < visibleCount);

  return (
    <section className="calendar-page">
      <h1>Community Events Calendar</h1>

      <div className="calendar-controls">
        <select onChange={handleSelect} value={selectedMonth ?? ""}>
          <option value="">— All Upcoming Months —</option>
          {availableMonths.map((m) => (
            <option key={m} value={m}>
              {MONTH_NAMES[m]}
            </option>
          ))}
        </select>
        {visibleCount < 12 && selectedMonth === null && (
          <button onClick={handleLoadMore}>Load More Months</button>
        )}
      </div>

      <div className="calendar-months">
        {monthsToShow.map((monthIdx) => (
          <div key={monthIdx} className="calendar-month">
            <h2>{MONTH_NAMES[monthIdx]}</h2>
            <ul>
              {eventsByMonth[monthIdx].map((ev, i) => (
                <li key={i}>
                  <span className="date">
                    {new Date(ev.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="title">{ev.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {monthsToShow.length === 0 && (
          <p className="no-events">No events found for selected month.</p>
        )}
      </div>
    </section>
  );
}
