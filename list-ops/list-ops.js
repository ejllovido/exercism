export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(newList) {
    return new List([...this.values, ...newList.values]);
  }

  concat(listOfLists) {
    let currentList = this;

    const result = listOfLists.reduce((total, element) => {
      return total.append(element);
    }, currentList);

    return result;
  }

  filter(filterFunction) {
    const filteredValues = this.values.reduce((total, value) => {
      if (filterFunction(value)) {
        return [...total, value];
      }

      return total;
    }, []);

    return new List(filteredValues);
  }

  map(mappingFunction) {
    const mappedValues = this.values.reduce((total, value) => {
      const newValue = mappingFunction(value);

      return [...total, newValue];
    }, []);

    return new List(mappedValues);
  }

  length() {
    return this.values.reduce((total, value) => {
      value = 1;

      return total + value;
    }, 0);
  }

  reduce(reducerFunction, initialValue) {
    let total = initialValue;
    for (let i = 0; i < this.values.length; i++) {
      total = reducerFunction(total, this.values[i]);
    }

    return total;
  }

  reduceFromRight(reducerFunction, initialValue) {
    let total = initialValue;
    for (let i = this.values.length - 1; i >= 0; i--) {
      total = reducerFunction(total, this.values[i]);
    }
    return total;
  }

  reverse() {
    const reversedList = this.values.reduce((total, value) => {
      return [value, ...total];
    }, []);

    return new List(reversedList);
  }
}

// Append
// const list1 = new List([1, 2]);
// const list2 = new List([3, 4, 5]);
// console.log(`"APPEND":`, list1.append(list2).values);

// Concat
// const list1 = new List([1, 2]);
// const list2 = new List([3]);
// const list3 = new List([4, 5, 6]);
// const listOfLists = new List([list2, list3]);
// console.log(`"CONCAT":`, list1.concat(listOfLists).values);

// Filter
// const list1 = new List([1, 2, 3, 4, 5]);
// console.log(`"FILTER":`, list1.filter((el) => el % 2 === 0).values);

// Map
// const list1 = new List([1, 3, 5, 7]);
// console.log(`"MAP":`, list1.map((el) => ++el).values);

// Length
// const list1 = new List([1, 2, 3, 4]);
// console.log(`"LENGTH":`, list1.length());

// Reduce
// const list1 = new List([1, 2, 3, 4, 5]);
// console.log(
//   `"REDUCE":`,
//   list1.reduce((acc, el) => acc + el, 0)
// );

// ReduceFromRight
// const list1 = new List([1, 2, 3, 4, 5]);
// console.log(
//   `"REDUCE":`,
//   list1.reduceFromRight((acc, el) => acc + el, 0)
// );

// Reverse
// const list1 = new List([1, 2, 3, 4, 5]);
// console.log(`"REVERSE":`, list1.reverse().values);
