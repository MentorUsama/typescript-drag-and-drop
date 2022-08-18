// Code goes here!
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement
    titleInput: HTMLInputElement
    descriptionInputElement: HTMLInputElement
    peopleInputElement: HTMLInputElement

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input');
        this.hostElement = document.getElementById('app') as HTMLDivElement;

        this.element = document.importNode(this.templateElement.content, true).firstElementChild! as HTMLFormElement;
        
        this.element.id = 'user-input'
        this.titleInput = this.element.querySelector("#title") as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement
        this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement
        this.attach()
        this.configure()
    }
    private submitHandler(event:Event){
        event.preventDefault()
        console.log(this.titleInput)
    }
    private configure(){
        this.element.addEventListener('submit',this.submitHandler.bind(this))
    }
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const project = new ProjectInput()