import Food from "../models/food.model.js";

// GET - Dohvaćanje svih vrsta hrane
export const getFood = async (req, res) => {
  try {
    const foods = await Food.findOne({});
    res.json(foods);
  } catch (error) {
    console.error("Error fetching food items:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// POST - Dodavanje nove hrane
export const addFood = async (req, res) => {
  try {
    const { name, category, description, price, image } = req.body;

    if (!name || !category || !description || !price || !image) {
      return res.status(400).json({ error: "Please provide all fields" });
    }

    const newFood = new Food({
      name,
      category,
      description,
      price,
      image,
    });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    console.error("Error creating food item:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// PUT - Ažuriranje hrane
export const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedFood);
  } catch (error) {
    console.error("Error updating food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE - Brisanje hrane
export const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Food item deleted" });
  } catch (error) {
    console.error("Error deleting food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
