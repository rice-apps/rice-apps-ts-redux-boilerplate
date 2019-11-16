import chart from "../assets/chart.png";

export type Todo = {
    ID: number,
    description: string,
    deadline: string,
    completed: boolean
}

export type Chart = {
    ID: number,
    description: string,
    image: HTMLImageElement
}
