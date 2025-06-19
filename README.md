# 🥕 Food Product Explorer

**Food Product Explorer** is a responsive web application built with React that allows users to search, filter, and view detailed nutritional information about food products using the [OpenFoodFacts API](https://world.openfoodfacts.org/). The application supports category filtering, nutrition grade sorting, barcode lookup, and more.

---

## 🚀 Features

- 🔍 **Product Search** by name or barcode
- 📂 **Category Filtering** with dynamic dropdowns
- 📊 **Sorting** by product name or nutrition grade
- 🏦 **Product Details Page** with:
  - Ingredients list
  - Nutrition values
  - Labels (vegan, vegetarian, etc.)
  - Product image
- ♻️ **Responsive Design** for all devices
- 🧠 **State Management** using React hooks
- 📦 **Reusable Components** for clean, scalable architecture

---

## 🛠️ Tech Stack

| Tech              | Description                 |
| ----------------- | --------------------------- |
| React             | Frontend library            |
| Tailwind CSS      | Utility-first CSS framework |
| Axios             | HTTP client for API calls   |
| React Router      | For routing between pages   |
| OpenFoodFacts API | Food product data source    |

---

## 📁 Folder Structure

```
/src
 ├── components
 │   ├── Header.jsx
 │   ├── PageTitle.jsx
 │   ├── ProductCard.jsx
 │   └── Spinner.jsx
 ├── pages
 │   ├── ProductsPage.jsx
 │   └── ProductDetailPage.jsx
 ├── App.jsx
 ├── index.js
 └── ...
```


## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/vamsi-krishna-sai-27/food--product-explorer.git
cd food--product-explorer

Install dependencies:
npm install

Run the development server
npm run dev
Open your browser and go to:
http://localhost:5173


## 🌐 API Reference

**Base URL:**
`https://world.openfoodfacts.org/`

### Key Endpoints Used

- 🔍 **Search by name:**
  `https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true`

- 🏷️ **List of categories:**
  `https://world.openfoodfacts.org/categories.json`

- 🦾 **Get products by category:**
  `https://world.openfoodfacts.org/category/{category}.json`

- 📦 **Product details by barcode:**
  `https://world.openfoodfacts.org/api/v0/product/{barcode}.json`

---


---



## ✨ Contributing

Contributions are welcome! Please fork the repository and submit a pull request with a clear description of your changes.
# Fork & Clone
git clone https://github.com/vamsi-krishna-sai-27/food--product-explorer.git

# Create a branch
git checkout -b feature/your-feature-name

# Make changes and commit
git commit -m "Add your feature"

# Push and open a PR
git push origin feature/your-feature-name

---

---

## 👨‍💼 Author
Vamsi Krishna Sai

GitHub: @vamsi-krishna-sai-27

Email: vamsisupport@example.com
---
