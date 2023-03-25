export function findFamousCats(cats) {
    // Tu código aquí 👈
    const followers = cats.map(function (cat) {
      let follower = {};
      follower.name = cat.name;
      follower.total = cat.followers.reduce(function (total, num) {
        return total + num;
      });
      return follower;
    });
  
    let famousCats = [];
    let maxFollowers = 0;
  
    for (const famous of followers) {
      if (famous.total > maxFollowers) {
        famousCats = [];
        famousCats.push(famous.name);
        maxFollowers = famous.total;
      } else if (famous.total === maxFollowers) {
        famousCats.push(famous.name);
      }
    }
  
    return famousCats;
  }