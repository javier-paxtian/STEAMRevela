export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const pages = [
    {
        "nombre": "Inicio",
        "src": "/"
    },
    {
        "nombre": "Catalogo",
        "src": "/catalogue"
    },
    {
        "nombre": "Juego",
        "src": "/game"
    }
]

export const card0 = [
    { id: '1', },
    { id: '3', },
    { id: '5', },
    { id: '7', },
    { id: '9', },
    { id: '11', },
    { id: '13', },
    { id: '15', },
    { id: '17', },
    { id: '19', },
    { id: '21', },
    { id: '23', },
    { id: '25', },
    { id: '27', },
    { id: '29', },
    { id: '31', },
];

export const card1 = [
    { id: '18', },
    { id: '19', },
    { id: '22', },
    { id: '23', },
    { id: '2', },
    { id: '3', },
    { id: '6', },
    { id: '7', },
    { id: '26', },
    { id: '27', },
    { id: '30', },
    { id: '31', },
    { id: '10', },
    { id: '11', },
    { id: '14', },
    { id: '15', },
];

export const card2 = [
    { id: '4', },
    { id: '5', },
    { id: '6', },
    { id: '7', },
    { id: '12', },
    { id: '13', },
    { id: '14', },
    { id: '15', },
    { id: '20', },
    { id: '21', },
    { id: '22', },
    { id: '23', },
    { id: '28', },
    { id: '29', },
    { id: '30', },
    { id: '31', }
];

export const card3 = [
    { id: '24', },
    { id: '25', },
    { id: '26', },
    { id: '27', },
    { id: '8', },
    { id: '9', },
    { id: '10', },
    { id: '11', },
    { id: '28', },
    { id: '29', },
    { id: '30', },
    { id: '31', },
    { id: '12', },
    { id: '13', },
    { id: '14', },
    { id: '15', }
];

export const card4 = [
    { id: '16', },
    { id: '17', },
    { id: '18', },
    { id: '19', },
    { id: '20', },
    { id: '21', },
    { id: '22', },
    { id: '23', },
    { id: '24', },
    { id: '25', },
    { id: '26', },
    { id: '27', },
    { id: '28', },
    { id: '29', },
    { id: '30', },
    { id: '31', }
];
export const catalogue = [
    {
        "id": 1,
        "titulo": "Título del objeto 1",
        "descripcion": "Descripción del objeto 1"
    },
    {
        "id": 2,
        "titulo": "Título del objeto 2",
        "descripcion": "Descripción del objeto 2"
    },
    {
        "id": 3,
        "titulo": "Título del objeto 3",
        "descripcion": "Descripción del objeto 3"
    },
    {
        "id": 4,
        "titulo": "Título del objeto 4",
        "descripcion": "Descripción del objeto 4"
    },
    {
        "id": 5,
        "titulo": "Título del objeto 5",
        "descripcion": "Descripción del objeto 5"
    },
    {
        "id": 6,
        "titulo": "Título del objeto 6",
        "descripcion": "Descripción del objeto 6"
    },
    {
        "id": 7,
        "titulo": "Título del objeto 7",
        "descripcion": "Descripción del objeto 7"
    },
    {
        "id": 8,
        "titulo": "Título del objeto 8",
        "descripcion": "Descripción del objeto 8"
    },
    {
        "id": 9,
        "titulo": "Título del objeto 9",
        "descripcion": "Descripción del objeto 9"
    },
    {
        "id": 10,
        "titulo": "Título del objeto 10",
        "descripcion": "Descripción del objeto 10"
    },
    {
        "id": 11,
        "titulo": "Título del objeto 11",
        "descripcion": "Descripción del objeto 11"
    },
    {
        "id": 12,
        "titulo": "Título del objeto 12",
        "descripcion": "Descripción del objeto 12"
    },
    {
        "id": 13,
        "titulo": "Título del objeto 13",
        "descripcion": "Descripción del objeto 13"
    },
    {
        "id": 14,
        "titulo": "Título del objeto 14",
        "descripcion": "Descripción del objeto 14"
    },
    {
        "id": 15,
        "titulo": "Título del objeto 15",
        "descripcion": "Descripción del objeto 15"
    },
    {
        "id": 16,
        "titulo": "Título del objeto 16",
        "descripcion": "Descripción del objeto 16"
    },
    {
        "id": 17,
        "titulo": "Título del objeto 17",
        "descripcion": "Descripción del objeto 17"
    },
    {
        "id": 18,
        "titulo": "Título del objeto 18",
        "descripcion": "Descripción del objeto 18"
    },
    {
        "id": 19,
        "titulo": "Título del objeto 19",
        "descripcion": "Descripción del objeto 19"
    },
    {
        "id": 20,
        "titulo": "Título del objeto 20",
        "descripcion": "Descripción del objeto 20"
    },
    {
        "id": 21,
        "titulo": "Título del objeto 21",
        "descripcion": "Descripción del objeto 21"
    },
    {
        "id": 22,
        "titulo": "Título del objeto 22",
        "descripcion": "Descripción del objeto 22"
    },
    {
        "id": 23,
        "titulo": "Título del objeto 23",
        "descripcion": "Descripción del objeto 23"
    },
    {
        "id": 24,
        "titulo": "Título del objeto 24",
        "descripcion": "Descripción del objeto 24"
    },
    {
        "id": 25,
        "titulo": "Título del objeto 25",
        "descripcion": "Descripción del objeto 25"
    },
    {
        "id": 26,
        "titulo": "Título del objeto 26",
        "descripcion": "Descripción del objeto 26"
    },
    {
        "id": 27,
        "titulo": "Título del objeto 27",
        "descripcion": "Descripción del objeto 27"
    },
    {
        "id": 28,
        "titulo": "Título del objeto 28",
        "descripcion": "Descripción del objeto 28"
    },
    {
        "id": 29,
        "titulo": "Título del objeto 29",
        "descripcion": "Descripción del objeto 29"
    },
    {
        "id": 30,
        "titulo": "Título del objeto 30",
        "descripcion": "Descripción del objeto 30"
    },
    {
        "id": 31,
        "titulo": "Título del objeto 31",
        "descripcion": "Descripción del objeto 31"
    }
]
