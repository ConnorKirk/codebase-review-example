"use strict";

const food = ["eggs", "bacon", "cereal", "yoghurt", "avocado"];
const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

food.map((f) => f.toUpperCase()).map(console.log);
days.filter((day) => day.length >= 5);
