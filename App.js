import { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1", 
//     {
//         id: "title",
//         key: "h1"
//     },
//     "Heading 1"
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//         key: "h2"
//     },
//     "Heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id: "container"
//     },
//     [heading, heading2]

// );

const heading = <h1 id="title" key="h2">Nishanth</h1>;

const Title = () => (
    <h1 id="title" key="h2">
        Component Composition - passing components into components
    </h1>
);

const HeaderComponent = () => (
    <div>
        {heading}
        {/* Component inside a component(Component composition) */}
        <Title/>
        <h1>Namaste React functional component</h1>
        <h2>This is a h2 tag</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
// root.render(HeaderComponent());