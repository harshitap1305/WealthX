'use client'
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Plot from "react-plotly.js";
import './Calendar.css'; 

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [chartData, setChartData] = useState(null);

  const sampleExpenses = {
    "2025-03-30": [
      { category: "Food", amount: 20 },
      { category: "Transport", amount: 15 },
    ],
    "2025-03": [
      { category: "Food", amount: 150 },
      { category: "Transport", amount: 100 },
      { category: "Entertainment", amount: 80 },
    ],
  };

  const handleDateClick = (info) => {
    const dateStr = info.dateStr;
    setSelectedDate(dateStr);
    updateChart(dateStr, "daily");
  };

  const handleMonthClick = () => {
    const monthStr = selectedDate ? selectedDate.slice(0, 7) : new Date().toISOString().slice(0, 7);
    setSelectedDate(monthStr);
    updateChart(monthStr, "monthly");
  };

  const updateChart = (key, type) => {
    const expenses = sampleExpenses[key] || [];
    const categories = expenses.map((e) => e.category);
    const amounts = expenses.map((e) => e.amount);

    setChartData({
      data: [
        {
          type: "pie",
          labels: categories,
          values: amounts,
        },
      ],
      layout: {
        title: type === "daily" ? `Expenses on ${key}` : `Monthly Expenses for ${key}`,
      },
    });
  };

  return (
    <div>
      <button onClick={handleMonthClick} style={{ marginBottom: "10px" }}>
        Show Monthly Expenses
      </button>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="70vh"
        dateClick={handleDateClick}
      />
      {chartData && <Plot data={chartData.data} layout={chartData.layout} />}
    </div>
  );
}

export default Calendar;