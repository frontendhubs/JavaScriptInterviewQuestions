
    let array =  [1, 2, 1, 3, 4, 3, 5];

    let duplicates = []

    //output  1, 3

    // filter() method or for loop

    // indexOf() method


    // imperative way of writing  code

     for(var i =0; i < array.length; i++)
    {
          //console.log(array[i])

         if(array.indexOf(array[i]) != i)
         {
                 console.log(array[i])
                 duplicates.push(array[i])
          }


     }


 // Declarative way of writing  code


       let duplicate = array.filter((item, index) => {

              return array.indexOf(item) != index

       })

         





     console.log("duplicate", duplicate)
