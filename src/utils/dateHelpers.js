export const getNextDays = (amount = 7) => {
  const days = [];

  for (let i = 0; i < amount; i++) {
    const date = new Date();

    date.setDate(date.getDate() + i);

    days.push(
      date
        .toLocaleDateString("en-US", {
          weekday: "short",
        })
        .toUpperCase(),
    );
  }

  return days;
};
