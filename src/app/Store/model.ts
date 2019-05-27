export interface Farmer {
    id: number,
    mail: string,
    password: string
    fullName: string,
    address: string,
    phone: string,
    cropType: string,
}

export interface Expert {
    id: number,
    mail: string;
    password: string
    fullName: string;
    address: string;
    phone: string;
    domain: string;
}

export interface Problem {
    id?: number,
    title?: string,
    desc?: string,
    images?: Array<Image>,
    farmer_id?: string,
    dateTime?: Date,
    solution?: Solution

}

export interface Image {
    path?: string;
    file?: File,
    data?: string
}

export interface Solution {
    model_solution: ModelSolution,
    expert_solution: ExpertSolution[],
}

export interface ModelSolution {
    disease: string,
    confidence: number
}

export interface ExpertSolution {
    expert_id: string,
    disease_desc: string,
    Phytosanitary_product: string,
}
