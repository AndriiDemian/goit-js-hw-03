function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
  }

// function slugify(title) {
//     const lowercaseTitle = title.toLowerCase();
  
//     const words = lowercaseTitle.split(' ');
  
//     const slug = words.join('-');
  
//     return slug;
//   }
  
  // Перевірка функції
  console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
  console.log(slugify("English for developer")); // "english-for-developer"
  console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



//   или так 
//   function slugify(title) {
 
//     const lowercaseTitle = title.toLowerCase();

//     const slug = lowercaseTitle.replace(/\s+/g, '-');
  
//     return slug;
//   }
  
  