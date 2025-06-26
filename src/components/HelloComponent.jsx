export default function HelloComponent() {
    const sayHello = () => {
        alert("Hola desde react en astro")
    }

    return (
        <div>
            <h1>Hello component</h1>
            <button onClick={sayHello}>Saludar</button>
        </div>
    );
}