const ulRef = document.querySelector('#categories');

// длина псевдомассива ulRef
const categories = ulRef.children;
console.log(categories);

console.log(`В списке ${categories.length} категории`);

//преобразовываем псевдомассив в массив, перебираем, выводим шаблонную строку:
[...categories].forEach(category => {
    const categoryTitleEl = category.querySelector('h2');
    console.log(categoryTitleEl);
    const innerCategoryEl = category.querySelectorAll('li');
    console.log(innerCategoryEl);

    return console.log(`Категория - ${categoryTitleEl.textContent}, количество элементов: ${innerCategoryEl.length}`)
});