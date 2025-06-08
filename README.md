# DashFlex - Modern React Admin Dashboard

DashFlex is a feature-rich, responsive admin dashboard built with React and Material-UI. It provides a modern and intuitive interface for managing various aspects of your application.


![Screenshot 2025-06-08 071025](https://github.com/user-attachments/assets/1006a2e0-2889-4e96-907f-3b498cbca626)


## Features

- 📊 **Interactive Charts**: Visualize data with various chart types using Recharts
  - Line charts for revenue trends
  - Area charts for device usage
  - Bar charts for sales comparison
  - Pie charts for traffic distribution

- 📋 **Data Tables**: Powerful data grid with advanced features
  - Sorting and filtering
  - Pagination
  - Column customization
  - Export functionality
  - Inline editing

- 📅 **Calendar Integration**: Full-featured calendar using FullCalendar
  - Event management
  - Multiple views (month, week, day)
  - Drag and drop events
  - Event creation and editing

- 📌 **Kanban Board**: Drag-and-drop task management
  - Multiple columns (To Do, In Progress, Done)
  - Task creation and deletion
  - Drag and drop between columns
  - Task status tracking

- 🎨 **Theme Customization**
  - Light/Dark mode toggle
  - Color palette preview
  - Real-time theme changes
  - Customizable UI components

- 📱 **Responsive Design**
  - Mobile-friendly interface
  - Collapsible sidebar
  - Adaptive layouts
  - Touch-friendly interactions

## Tech Stack

- React 18
- Material-UI (MUI) v5
- Redux Toolkit
- React Router v6
- Recharts
- FullCalendar
- React Beautiful DND
- MUI X Data Grid

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anuragverma108/dashflex.git
cd dashflex
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/         # Reusable components
│   └── Layout/        # Layout components (Header, Sidebar)
├── hooks/             # Custom React hooks
├── pages/             # Main application pages
│   ├── Dashboard/     # Dashboard components and logic
│   ├── Tables/        # Data grid implementation
│   ├── Charts/        # Chart components
│   ├── Calendar/      # Calendar implementation
│   ├── KanbanBoard/   # Kanban board components
│   └── Settings/      # Theme settings
├── store/             # Redux store configuration
│   └── slices/        # Redux slices
├── theme/             # Theme configuration
└── App.js             # Main application component
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Material-UI](https://mui.com/)
- [Recharts](https://recharts.org/)
- [FullCalendar](https://fullcalendar.io/)
- [React Beautiful DND](https://github.com/atlassian/react-beautiful-dnd)

## Support

For support, email anuragvermacontact@gmail.com or open an issue in the repository.


