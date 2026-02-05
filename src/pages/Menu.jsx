import { useState } from "react";

// ---------------- Alcoholic Drinks ----------------

const cocktails = [
  { name: "Mojito", price: "₹350" },
  { name: "Whiskey Sour", price: "₹450" },
  { name: "Classic Margarita", price: "₹400" },
  { name: "Long Island Iced Tea", price: "₹500" },
];

const wines = [
  { name: "Red Wine", price: "₹600" },
  { name: "White Wine", price: "₹550" },
  { name: "Rosé Wine", price: "₹580" },
];

const beers = [
  { name: "Kingfisher Premium", price: "₹250" },
  { name: "Budweiser", price: "₹300" },
  { name: "Corona", price: "₹350" },
  { name: "Bira White", price: "₹320" },
];

// ---------------- Non Alcoholic ----------------

const mocktails = [
  { name: "Virgin Mojito", price: "₹220" },
  { name: "Blue Lagoon", price: "₹240" },
  { name: "Fruit Punch", price: "₹250" },
];

const softDrinks = [
  { name: "Coke / Pepsi", price: "₹90" },
  { name: "Sprite / Limca", price: "₹90" },
  { name: "Fresh Lime Soda", price: "₹120" },
];

// ---------------- Starters ----------------

const vegStarters = [
  { name: "Paneer Tikka", price: "₹320" },
  { name: "Hara Bhara Kebab", price: "₹280" },
  { name: "Chilli Paneer", price: "₹300" },
  { name: "Crispy Corn", price: "₹260" },
];

const nonVegStarters = [
  { name: "Chicken Tikka", price: "₹380" },
  { name: "Tandoori Chicken", price: "₹420" },
  { name: "Chicken Lollipop", price: "₹360" },
  { name: "Fish Fry", price: "₹420" },
];




// ---------------- Order Modal ----------------

const OrderModal = ({ item, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    table: "",
    quantity: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order booked for ${item.name}`);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-neutral-200 w-full max-w-md rounded-2xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center  text-yellow-500 mb-6">
          Book Your Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
           className="w-full p-3 rounded-lg border text-black placeholder:text-gray-500"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="table"
            placeholder="Table No"
            className="w-full p-3 rounded-lg border text-black placeholder:text-gray-500"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            value={item.name}
            readOnly
            className="w-full p-3 rounded-lg border text-black placeholder:text-gray-500"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="w-full p-3 rounded-lg border text-black placeholder:text-gray-500"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
           className="w-full p-3 rounded-lg border text-black placeholder:text-gray-500"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-3 rounded-full hover:bg-black transition"
          >
            Book Order
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------- Menu Section ----------------

const MenuSection = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-black/40 p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold text-white mb-6 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-black p-4 rounded-lg border border-gray-800 hover:border-amber-400 transition"
          >
            <h3 className="text-sm text-white">{item.name}</h3>

            <p className="text-amber-400 text-sm mt-1">{item.price}</p>

            <button
              onClick={() => setSelectedItem(item)}
              className="mt-3 w-full bg-amber-500 text-black text-sm py-1.5 rounded hover:bg-amber-400 transition"
            >
              Order Now
            </button>
          </div>
        ))}

      </div>

      {selectedItem && (
        <OrderModal
          item={selectedItem}
          closeModal={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};


// ---------------- Menu Page ----------------

const Menu = () => {
  return (
    <div className="bg-neutral-950 text-gray-300 pt-28 px-6 pb-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our Menu
        </h1>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <MenuSection title="Signature Cocktails" items={cocktails} />
        <MenuSection title="Premium Wines" items={wines} />

        <MenuSection title="Beers" items={beers} />
        <MenuSection title="Mocktails" items={mocktails} />

        <MenuSection title="Soft Drinks" items={softDrinks} />
        <MenuSection title="Veg Starters" items={vegStarters} />

        <MenuSection title="Non-Veg Starters" items={nonVegStarters} />

      </div>
    </div>
  );
};


export default Menu;
