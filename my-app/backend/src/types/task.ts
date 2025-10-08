export enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
    Urgent = "Urgent",
}

export enum Status {
    Todo = "Todo",
    InProgress = "InProgress",
    Done = "Done",
    Blocked = "Blocked",
}

export type Task = {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    priority: Priority;
    status: Status;
    assigned_to: number;
    groupId: number;
};