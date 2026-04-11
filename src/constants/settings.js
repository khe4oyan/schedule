const optionsValues = {
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

const optionsKeys = Object.keys(optionsValues);

const SETTINGS = {
  optionsValues,
  optionsKeys,
};

export default SETTINGS;
