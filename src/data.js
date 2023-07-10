import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

const iconData = [
  { name: "fab fa-facebook", id: 1 },
  { name: "fab fa-twitter", id: 2 },
  { name: "fab fa-squarespace", id: 3 }
]

const navData = [
  { name: "home", id: 1 },
  { name: "about", id: 2 },
  { name: "services", id: 3 },
  { name: "tours", id: 4 }
]

const serviceData = [
  {
    fab: "fas fa-wallet fa-fw",
    title: "saving money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Asperiores, officia.`,
    id: 1
  },
  {
    fab: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Asperiores, officia.`,
    id: 2
  },
  {
    fab: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Asperiores, officia.`,
    id: 3
  }
]

const toursData = [
  {
    src: img1,
    date: "august 26th, 2020",
    info: "Tibet Adventure",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    destination: "china",
    days: "6 days",
    price: "from $2100",
    id: 1
  },
  {
    src: img2,
    date: "october 1th, 2020",
    info: "best of java",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    destination: "indonesia",
    days: "11 days",
    price: "from $1400",
    id: 2
  },
  {
    src: img3,
    date: "september 15th, 2020",
    info: "explore hong kong",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    destination: "hong kong",
    days: "8 days",
    price: "from $5000",
    id: 3
  },
  {
    src: img4,
    date: "december 5th, 2019",
    info: "kenya highlights",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    destination: "hong kong",
    days: "20 days",
    price: "from $3300",
    id: 4
  }
]

export { iconData, navData, serviceData, toursData };