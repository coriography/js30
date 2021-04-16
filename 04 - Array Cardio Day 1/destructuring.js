const obj = {
    animal: "bear",
    color: "brown",
    ages: [
      10, 14, 16
    ],
    preferences: {
      favFruit: "apple",
      favColor: "orange"
    }
  };
  
  const animal = obj.animal; // bear
  const favFruit = obj.preferences.favFruit; // apple
  const favColor = obj.preferences.favColor; // apple
  const { favFruit, favColor } = object.preferences;
  const { favFruit: fruit, favColor } = object.preferences;
  
  const {animal, preferences: {favFruit}} = obj;
  const {
      ages: [firstAge, secondAge, thirdAge],
  } = obj;
  const [firstAge, secondAge, thirdAge] = obj.ages;