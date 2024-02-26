//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

//--------------------------------------------------1-------------------------------------------------------------------

let arr = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {title: 200 }
]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
//------------------------------------------------2-3-------------------------------------------------------------------
let book1 = {
    title: 'Harry Potter',
    pageCoun: 380,
    genre: 'Fantasy',
    authors: [
        {
        name: 'Joanne Rowling',
        age: 57,
        }
        ]
}
let book2 = {
    title: 'Little prince',
    pageCoun: 200,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Antoine de Saint-Exupéry',
            age: 44,
        }
    ]
}
let book3 = {
    title: 'Metro',
    pageCoun: 450,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Dmytro Hlukhovskyi',
            age: 44,
        }
    ]
}
//---------------------------------------------------------4------------------------------------------------------------
let users = [
    {
        name: 'Іван Петренко',
        username: 'ivan_petrenko',
        password: 123.
    },
    {
        name: 'Марія Іванова',
        username: 'maria_ivanova',
        password: 234,
    },
    {
       name: 'Олег Сидоренко',
       username: 'oleg sidorov',
       password: 345,
    },
    {
       name: 'Тетяна Шевченко',
       username: 'tatiana shevchenko',
       password: 456,
    },
    {
        name: 'Андрій Ковальчук',
        username: 'andriy_kovalchuk',
        password: 567,
    },
    {
       name: 'Юлія Ткачук',
       username: 'yulia tkachuk',
       password: 678,
    },
    {
        name: 'Юлія Панасть',
        username: 'yulia panast',
        password: 789,
    },
    {
        name: 'Олена Дмитрук',
        username: 'olena_dmytruk',
        password: 891,
    },
    {
        name: 'Дмитро Сікора',
        username: 'dmytro sikora',
        password: 912,
    },
    {
        name: 'Тарас Хамандяк',
        username: 'taras hamandak',
        password: 123,
    },
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
