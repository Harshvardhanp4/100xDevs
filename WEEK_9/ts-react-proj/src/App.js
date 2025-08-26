import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
function App() {
    return (_jsx(_Fragment, { children: _jsx(Todos, { title: "Go to gym", description: "Morning workout session", done: false }) }));
}
function Todos({ title, description, done }) {
    return _jsxs("div", { children: [_jsx("h1", { children: title }), _jsx("h2", { children: description }), _jsx("h3", { children: done })] });
}
export default App;
