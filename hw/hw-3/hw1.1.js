//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

//    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

//ШАБЛОН:
//    <ul>
//        <li>ITEM OF ARRAY</li>
//       <!--
//            і тд інші об'єкти масиву
//             ...
//             ...
//             ...
//        -->
//    </ul>

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


let languages =  ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (const programmingLanguages of languages) {
    console.log(programmingLanguages)
    document.write(`<ul><li>${programmingLanguages}</li></ul>`)
}


