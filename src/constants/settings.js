export const lastUpdateAt = "2026-04-06 17:04";

export const optionsValues = {
  lessonLineDisabled: {
    name: "Անջատել դասի գրադիենտը",
    defaultValue: false,
    key: "lessonLineDisabled",
  },
  
  notMergeLessonNumbers: {
    name: "Լսարանի թվերը անջատ ցույց տալ",
    defaultValue: true,
    key: "notMergeLessonNumbers",
  },
};

export const optionsKeys = Object.keys(optionsValues);

const SETTINGS = {
  lastUpdateAt,
  optionsValues,
  optionsKeys,
};


export default SETTINGS;
