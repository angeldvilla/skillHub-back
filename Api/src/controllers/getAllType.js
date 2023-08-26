const TypeJob = require("../models/TypeJob");

const getAllType = async () => {
  try {
    const jobCategories = await TypeJob.find();
    const filteredCategories = jobCategories.filter(
      (jobCategory) => jobCategory.category !== "Todas"
    );
    const sortedCategories = filteredCategories.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    const todas = jobCategories.find(
      (jobCategory) => jobCategory.category === "Todas"
    );

    return [todas, ...sortedCategories];
  } catch (error) {
    throw new Error("DataBase not found");
  }
};

module.exports = getAllType;
