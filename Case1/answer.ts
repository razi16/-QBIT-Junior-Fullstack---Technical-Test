type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};
const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

/* 1. Buah apa saja yang dimiliki andi? */
const andyFruits = fruits.map((fruit) => fruit.fruitName);

/* 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
masing-masing wadah? */
const sortFruits = () => {
  const allFruitTypes = fruits.map((fruit) => fruit.fruitType);
  const fruitTypes = allFruitTypes.filter((value, index) => {
    return allFruitTypes.indexOf(value) === index;
  });
  const localFruits = fruits.filter((fruit) => {
    return fruit.fruitType === "LOCAL";
  });
  const importedFruits = fruits.filter((fruit) => {
    return fruit.fruitType === "IMPORT";
  });
  return {
    totalFruitType: fruitTypes.length,
    localFruits: localFruits,
    importedFruites: importedFruits,
  };
};

/* 3. Berapa total stock buah yang ada di masing-masing wadah? */
const stock = () => {
  let localFruitStock = fruits
    .filter((fruit) => fruit.fruitType === "LOCAL")
    .map((fruit) => fruit.stock);
  let importedFruitStock = fruits
    .filter((fruit) => fruit.fruitType === "IMPORT")
    .map((fruit) => fruit.stock);
  return {
    localFruitStockSum: localFruitStock.reduce((a, b) => a + b),
    importedFruitStockSum: importedFruitStock.reduce((a, b) => a + b),
  };
};

/* 4. Apakah ada komentar terkait kasus di atas? */

/* Seharusnya setiap object di array fruits memiliki id yang berbeda */
