// import React from "react";

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         // Update state to display fallback UI
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//         // Log the error to an error reporting service or console
//         console.error("ErrorBoundary caught an error:", error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             // Render fallback UI
//             return <h1>Something went wrong. Please try again later.</h1>;
//         }

//         // Render children if no error
//         return this.props.children;
//     }
// }

// export default ErrorBoundary;