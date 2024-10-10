(function () {
    const shuffleArray = (array) => {
       return array.sort(() => Math.random() - 0.5);
   };

   const container = document.querySelector('#pendo-radio-group-wrapper-acbd7df9');
   if (!container) return;

   const elements = Array.from(container.children);
   const originalLastElement = elements[elements.length - 1];
   const shuffledElements = shuffleArray(elements);

   shuffledElements.forEach(el => container.appendChild(el));
   originalLastElement.style.marginRight = '16px';
 })();