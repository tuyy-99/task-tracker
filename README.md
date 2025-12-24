# Task Tracker App

A modern, interactive task tracker built with **React**, **Zustand**, **Tailwind CSS**, and **ShadCN UI components**. Supports **dark mode**, **inline task editing**, and **real-time task stats**.

---

## Features

* Add, update, delete tasks
* Toggle task completion
* Inline editing: click edit → text moves to input → update
* Dark mode toggle
* Persistent state with localStorage (via Zustand middleware)
* Progress bar and pie chart gauge
* Responsive layout (desktop & mobile)

---

## Tech Stack

* React (JSX)
* Zustand (state management)
* Tailwind CSS (v4)
* ShadCN UI components
* Recharts (Task gauge)
* Sonner (toast notifications)
* React Router (navigation)

---

## File Structure

```
src/
├─ components/
│  ├─ Header.jsx
│  ├─ TaskInput.jsx
│  ├─ TaskItem.jsx
│  ├─ TaskList.jsx
│  ├─ ProgressBar.jsx
│  └─ TaskGauge.jsx
├─ pages/
│  ├─ Home.jsx
│  └─ Stats.jsx
├─ store/
│  └─ useTasks.js
├─ App.jsx
└─ main.jsx
```

---

## Screenshots

### Desktop View

<img width="896" height="626" alt="image" src="https://github.com/user-attachments/assets/db31a6f4-fdd5-4dbc-bc13-27963fb46baa" />
<img width="956" height="632" alt="image" src="https://github.com/user-attachments/assets/e8d35fb2-1d22-422b-b86b-550f583ae6ef" />
<img width="523" height="486" alt="image" src="https://github.com/user-attachments/assets/92337b65-3c88-44d4-ba0d-3580eb8890cb" />





### Mobile View

<img width="311" height="587" alt="image" src="https://github.com/user-attachments/assets/5035f5c1-b305-4027-8b2b-543444432d63" />



---

## Usage

1. Clone the repo

```bash
git clone <repo-url>
```

2. Install dependencies

```bash
npm install
```

3. Run the app

```bash
npm start
```

4. Open `http://localhost:3000` in your browser

---

## Notes

* Dark mode toggle persists across sessions.
* Task stats are updated in real time.
* Inline editing ensures smooth task management.

---

## Author

Tursina

📧 Email: yisehaktursina@gmail.com)
💼 LinkedIn: https://in/tursina-yisehak-7a9942358
🐙 GitHub:https://github.com/tuyy-99

## License

This project is open-source and free to use for learning and personal projects.

---

