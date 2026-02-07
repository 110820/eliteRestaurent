import img1 from "../assets/images/tandoori.jpg";
import img2 from "../assets/images/chilolli.jpg";
import img3 from "../assets/images/chillipaneer.jpg";
import img4 from "../assets/images/rice.jpg";

const newsData = [
  {
    id: 1,
    date: "11",
    image: img1,
    title: "Lorem ipsum dummy text",
    desc: "Industry standard dummy text.",
  },
  {
    id: 2,
    date: "12",
    image: img2,
    title: "Latest industry updates",
    desc: "Trending market insights.",
  },
  {
    id: 3,
    date: "13",
    image: img3,
    title: "New product launch",
    desc: "Discover our new arrivals.",
  },
  {
    id: 4,
    date: "15",
    image: img4,
    title: "Business growth news",
    desc: "Company expansion details.",
  },
];

const LatestNews = () => {
  return (
    <section className="py-16 sm:py-20 bg-neutral-950">
      <h3 className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white">
        LATEST NEWS
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt="news"
              className="h-32 sm:h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-3 sm:p-4">
              <span className="text-orange-500 text-xs sm:text-sm">
                {item.date}
              </span>

              <h4 className="font-semibold mt-1 sm:mt-2 text-white text-sm sm:text-base">
                {item.title}
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
