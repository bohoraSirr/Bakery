import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "cake",
    },

    bakery: {
      name: {
        type: String,
        default: "The Pastry Palace",
      },
      location: {
        type: String,
        default: "Surkhet",
      },
    },

    images: {
      main: {
        type: String, // image URL
        required: true,
      },
      gallery: [
        {
          type: String, // extra images
        },
      ],
    },

    customization: {
      allowMessage: {
        type: Boolean,
        default: true,
      },

      egglessAvailable: {
        type: Boolean,
        default: false,
      },

      sizes: [
        {
          label: String, // "Half pound"
          price: Number, // price for that size
        },
      ],

      shapes: {
        type: [String], // ["Circle", "Square"]
        default: ["Circle"],
      },
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
