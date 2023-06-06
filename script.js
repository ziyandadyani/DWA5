const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // page wont refresh when form is submitted (i.e default behavior of submit event )

  const entries = new FormData(event.target); //  creates a new FormData object using the event.target
  //(the submitted form) as the parameter. This allows access to the form's input values.

  const { dividend, divider } = Object.fromEntries(entries); // destructuring assignment 



  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  } else {
    result.innerText = Math.round(dividend / divider);
  }

 // result.innerText = Math.round(dividend / divider);

if (divider <= 0 ){
  result.innerText = 'Division not performed. Invalid number provided. Try again';
  console.error("Invalid number provided.", new Error().stack)
} else {
  result.innerText = Math.round(dividend / divider);
}

//  if (isNaN(dividend) || isNaN(divider)) {
//  document.body.innerHTML = "Something critical went wrong. Please reload the page.";
//  console.error("Critical error occurred.", new Error().stack);
//  } else {
//  result.innerText = Math.round(dividend / divider);
//  }
 });

