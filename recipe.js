const viewIngredientsBtn = document.querySelector('.view-ingredients-btn');
const startProcedureBtn = document.querySelector('.start-procedure-btn');
const ingredientsContainer = document.querySelector('.ingredients-container');
const procedureContainer = document.querySelector('.procedure-container');


viewIngredientsBtn.addEventListener('click', () => {
    ingredientsContainer.style.display = 'block';
});

startProcedureBtn.addEventListener('click', () => {
    procedureContainer.style.display = 'block';
});