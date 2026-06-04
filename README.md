# React Hook Form - Practice Project

## 📌 Overview

This is my first hands-on project using **React Hook Form**. The project demonstrates how to build and validate forms efficiently using the `useForm` hook provided by React Hook Form.

The application contains a simple user registration form with validation for:

* Username
* Email Address
* Channel Name

It also integrates the **React Hook Form DevTools** to visualize form state during development.

---

## 🚀 Features

### Username Validation

* Required field validation
* Displays custom error message when left empty

### Email Validation

* Required field validation
* Prevents emails starting with `admin`
* Custom domain validation
* Displays meaningful validation messages

### Channel Name Validation

* Required field validation
* Displays custom error message when left empty

### Developer Tools

* Integrated React Hook Form DevTools
* Helps inspect:

  * Form values
  * Validation errors
  * Form state
  * Registered fields

---

## 🛠 Technologies Used

* React
* React Hook Form
* React Hook Form DevTools
* Tailwind CSS

---

## 📚 Concepts Learned

During this project I practiced:

### `useForm()`

Creating and managing forms using React Hook Form.

### `register()`

Registering form fields and attaching validation rules.

### `handleSubmit()`

Handling form submission only when validation succeeds.

### `formState`

Accessing validation errors and form status.

### `errors`

Displaying field-specific validation messages.

### Custom Validation

Using the `validate` property to create custom validation rules.

Example:

```javascript
validate: {
  notAdmin: (fieldValue) => {
    return !fieldValue.startsWith("admin") || "Change Email";
  }
}
```

### React `useId()`

Generating unique IDs for form inputs and labels.

---

## 📂 Project Structure

```text
src/
│
├── App.jsx
│
└── main.jsx
```

---

## ▶️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🎯 Future Improvements

* Email pattern validation
* Password field validation
* Confirm password validation
* Async validation
* Dynamic form fields
* Form reset functionality
* Integration with APIs

---

## 💡 Key Takeaway

React Hook Form provides a simple and performant way to manage forms in React applications with minimal re-renders and clean validation logic. This project helped me understand the fundamentals of form registration, validation, error handling, and form state management.

---

### Author

**Himu Mutte**

Learning React Hook Form one step at a time 🚀
