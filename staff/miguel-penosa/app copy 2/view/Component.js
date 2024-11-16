class Component {
    constructor(container) {
        this.container = container

        this.children = []      // Inicializa un array vacío para almacenar los componentes hijos
    }

    add(component) {
        this.children.push(component)       // Agrega un componente hijo(this) al array 'children'??

        this.container.appendChild(component.container)
    }

    remove(component) {
        const index = this.children.findIndex(child => child === component)

        if (index < 0)
            throw new Error("child not found")
        else
            this.children.splice(index, 1)

        this.container.removeChild(component.container)
    }

    removeAll() {
        this.children.length = 0
        this.container.innerHTML = ""
    }

    addBehavior(type, callback) {
        this.container.addEventListener(type, callback)
    }
}

