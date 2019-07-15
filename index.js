
var savoryRecipesTitle = ['Chicken Parm Sliders from Delish', 'Easy Pesto Hummus (Tasty)', 'Hidden Veggie Mac & Cheese (Tasty)'];
var chickenParmIngredients = ['1 1/2 lb fresh or frozen breaded chicken', '12 slider buns', '2 cups marinara', '2 cups shredded mozzarella', '1/2 cup freshly grated Parmesan', '1/4 cup melted butter', '1/2 tsp garlic powder','1 tbsp freshly chopped parsley'];
var chickenParmInstructions = ['Prepare chicken according to package instructions.', 'Transfer chicken to a cutting board and cut into slider-size pieces.', 'On a large baking sheet, lay bottom halves of slider buns. Top with a thin layer of marinara, cooked chicken, mozzarella and Parmesan. Top with remaining slider bun halves.', 'In a small bowl, stir together melted butter, garlic powder, and parsley. Brush bun tops with butter mixture and bake until cheese is melty and sliders warmed through, 15 minutes.'];

var pestoHummusIng = ['15 oz garbanzo beans, 1 can, drained and rinsed', '1/4 tsp salt', '1 clove garlic', '1/2 tsp ground cumin', '1/2 cup basil pesto', '1 tbsp lemon juice', '2 tbsp water'];
var pestoHummusInst = ['Pour the rinsed chickpeas onto half the area of a kitchen towel. Fold the other half of the towel on top of the beans, and rub them so that the skins start to come off.', 'Place all of the peeled beans in the bowl of a food processor, along with the salt, cumin, garlic, and pesto. Turn the processor on to break up the mixture.', 'With the food processor running, pour in the lemon juice and water, and let the processor run until the mixture is smooth.', 'Serve with your choice of dipping chips or veggies.'];

var vegMacIng = ['1 lb elbow macaroni, cooked al dente', '1/2 cup water', '1 cup cauliflower florets', '1 cup butternut squash, diced', '1 cup carrot, sliced', '2 cups milk', '2 cups cheddar cheese, shredded', '4 oz cream cheese'];
var vegMacInst = ['Add water, cauliflower, squash, and carrots in a pot over medium heat. Cover and cook until vegetables are tender.', 'Add everything into a blender, including cooking water, and blend until smooth.', 'Return blended veggies to the pot over medium heat, and add the milk, cheese, and cream cheese. Stir until smooth.', 'Add macaroni, reduce heat, mix thoroughly, and cover for 20 minutes.'];

var sweetRecipesTitle = ['Banana Split Pops (Delish)', 'Cookies n Cream Fudge (Tasty)', 'Mixed Berry Yogurt Bark (Tasty)'];
var bananaSplitPopsIng = ['4 bananas', '8 popsicle sticks','1 cup melted chocolate', '1 tbsp coconut oil', '1/2 cup rainbow sprinkles', '8 maraschino cherries'];
var bananaSplitPopInst = ['Line a large baking sheet with parchment paper and set aside.', 'Cut the ends off of each banana to level the sides, then cut in half. Insert a popsicle stick into each banana piece and place on prepared baking sheet. Freeze for 2 hours.', 'In a medium bowl, whisk together melted chocolate and coconut oil until smooth. Pour sprinkles into a small bowl. Dip the top of each frozen banana in chocolate, then roll the melted chocolate tip around in sprinkles. Return to baking sheet and freeze until the chocolate is firm, about 15 minutes.', 'Top each pop with whipped cream and garnish with a maraschino cherry.'];


var cookiesNCreamIng = ['18 oz white chocolate', '14 oz sweetened condensed milk', '12 sandwich cookies, chopped'];
var cookiesNCreamInst = ['In a mixing bowl, combine chocolate with sweetened condensed milk and melt in the microwave in 15-second increments.', 'Once chocolate is fully melted, add in chopped cookies and stir until combined.', 'Pour chocolate mixture into a parchment paper-lined 8x8 inch (20x20 cm) baking tin.', 'Chill for 2 hours or until the fudge is firm. Cut into bite-sized pieces.'];

var berryBarkIng = ['1/4 cup strawberry', '1/4 cup blueberry', '1/4 cup raspberry', '1/4 cup blackberry', '2 cups greek yogurt'];
var berryBarkInst = ['In a blender, mix fruit until consistency is smooth. Add in yogurt and blend until fully mixed.', 'Pour mixture into a baking pan lined with parchment paper. Add desired amount of toppings.', 'Freeze for 6 hours, or overnight, until frozen solid.', 'Break yogurt bark into desired numbers of pieces.', 'Serve cold, or store in a closed container in the freezer.'];


var savoryBtn = $('.savory');
var sweetBtn = $('.sweet');
var surpriseBtn = $('.surprise');
var body = $('body');

savoryBtn.on("click", savoryResponse);
sweetBtn.on("click", sweetResponse);
surpriseBtn.on("click", surpriseResponse);


function savoryResponse() {

  var num = Math.round(Math.random() * (savoryRecipesTitle.length-1));
  var selectedRecipeTitle = savoryRecipesTitle[num];

  $('.response').remove();

  body.append('<section class="response"></section>');

  $('.response').append(`<h3 class="recipeTitle"> ${selectedRecipeTitle} </h3>`);
  $('.response').append('<h4 class="recipeIngredient">Ingredients</h4>');
  $('.response').append('<ul></ul>');
  $('.response').append('<h4 class="recipeInstruction">Directions</h4>');
  $('.response').append('<ol></ol>');

  if (num == 0) {
    for (var i = 0; i<chickenParmIngredients.length; i++){
      $('ul').append(`<li> ${chickenParmIngredients[i]} </li>`);
    }

    for (var j = 0 ; j<chickenParmInstructions.length; j++){
      $('ol').append(`<li> ${chickenParmInstructions[j]} </li>`);
    }

  } else if (num == 1){
    for (var i = 0; i<pestoHummusIng.length; i++){
      $('ul').append(`<li> ${pestoHummusIng[i]} </li>`);
    }

    for (var j = 0 ; j<pestoHummusInst.length; j++){
      $('ol').append(`<li> ${pestoHummusInst[j]} </li>`);
    }

  } else {
    for (var i = 0; i<vegMacIng.length; i++){
      $('ul').append(`<li> ${vegMacIng[i]} </li>`);
    }

    for (var j = 0 ; j<vegMacInst.length; j++){
      $('ol').append(`<li> ${vegMacInst[j]} </li>`);
    }
  }

}


function sweetResponse() {
    $('.response').remove();
    body.append('<section class="response"> </section>');

    var num = Math.round( Math.random() * (sweetRecipesTitle.length - 1) ) ;
    var selectedRecipeTitle = sweetRecipesTitle[num];

    $('.response').append(`<h3 class="recipeTitle"> ${selectedRecipeTitle} </h3>`);
    $('.response').append('<h4 class="recipeIngredient">Ingredients</h4>');
    $('.response').append('<ul></ul>');
    $('.response').append('<h4 class="recipeInstruction">Directions</h4>');
    $('.response').append('<ol></ol>');

    if (num == 0) {
      for (var i = 0; i<bananaSplitPopsIng.length; i++){
        $('ul').append(`<li> ${bananaSplitPopsIng[i]} </li>`);
      }

      for (var j = 0 ;j<bananaSplitPopInst.length; j++){
        $('ol').append(`<li> ${bananaSplitPopInst[j]} </li>`);
      }

    } else if (num == 1) {
      for (var i = 0; i<cookiesNCreamIng.length; i++){
        $('ul').append(`<li> ${cookiesNCreamIng[i]} </li>`);
      }

      for (var j = 0 ;j<cookiesNCreamInst.length; j++){
        $('ol').append(`<li> ${cookiesNCreamInst[j]} </li>`);
      }

    } else {
      for (var i = 0; i<berryBarkIng.length; i++){
        $('ul').append(`<li> ${berryBarkIng[i]} </li>`);
      }

      for (var j = 0 ;j<berryBarkInst.length; j++){
        $('ol').append(`<li> ${berryBarkInst[j]} </li>`);
      }
    }
}

function surpriseResponse() {
  var num = Math.round(Math.random());

  if (num == 0){
    savoryResponse();
  } else {
    sweetResponse();
  }

}
