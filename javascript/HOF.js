(() => {
  const student = [
    { name: "A", age: 20, gender: "M" },
    { name: "B", age: 23, gender: "F" },
    { name: "C", age: 25, gender: "F" },
    { name: "D", age: 17, gender: "F" },
  ];

  let ageOnly = student.map((e) => e.age);

  let age20 = student.filter((e) => e.age >= 20);

  let classify = student.reduce((prev, current) => {
    let index = prev.map((e) => e.gender).indexOf(current.gender);

    if (index !== -1) {
      prev[index]["total"] += 1;
      prev[index]["age"] += current["age"];
      prev[index]["student"].push(current);
    } else {
      let model = {
        total: 1,
        age: current.age,
        student: [current],
        gender: current.gender,
      };
      prev.push(model);
    }

    return prev;
  }, []);

  console.log("ageOnly ===> ", JSON.stringify(ageOnly));
  console.log("age20 ===> ", JSON.stringify(age20));
  console.log("classify ===> ", JSON.stringify(classify));
})();
