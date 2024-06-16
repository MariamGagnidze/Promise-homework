// 1) შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50.
//  ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.



function promise() {
    return new Promise((resolve, reject) => {
      const randomValue = Math.random();
      console.log(randomValue);
      if (randomValue < 0.5) {
        resolve("great success");
      } else {
        reject("oopsiee");
      }
    });
  }
  
  promise()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  



// 2) დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან  
// და დაბრუნებს ამ მონაცემებს


async function userInfo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("error", error);
    }
  }
  userInfo();
  



// 3) დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები https://dummyjson.com/users დან და
//  https://jsonplaceholder.typicode.com/users დან.
// ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ჩატვირთვაც უფრო მალე მოხდება.

async function racePromises() {
    const firstRacer = fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
    const secondRacer = fetch("https://dummyjson.com/users").then((res) => res.json());
    return Promise.race([firstRacer, secondRacer])
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
  }
  racePromises();
  



