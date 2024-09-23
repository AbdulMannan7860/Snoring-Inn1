import React from "react";

export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "/src/assets/carousel-1.jpg",
    title: "Luxury in your Room",
    subtitle: "Ask for the best room with ultimate privacy. Feel Special.",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "/src/assets/carousel-2.jpg",
    title: "Luxury in your Room",
    subtitle: "Ask for the best room with ultimate privacy. Feel Special.",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i className="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i className="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i className="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "/src/assets/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "/src/assets/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "/src/assets/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "/src/assets/team-4.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, New York, USA",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

export const contact = [
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Time stands still as the work of crafting comfort and elegance unfolds, where every detail is carefully attended to. It's where moments of tranquility meet the grandeur of unforgettable experiences.",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "/src/assets/testimonial-1.jpg",
  },
  {
    description:
      "Time stands still as the work of crafting comfort and elegance unfolds, where every detail is carefully attended to. It's where moments of tranquility meet the grandeur of unforgettable experiences.",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "/src/assets/testimonial-2.jpg",
  },
  {
    description:
      "Time stands still as the work of crafting comfort and elegance unfolds, where every detail is carefully attended to. It's where moments of tranquility meet the grandeur of unforgettable experiences.",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "/src/assets/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "/src/assets/room-1.jpg",
    price: "$110/night",
    name: "Junior Suit",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "It was just right, a perfect balance of comfort and elegance, where beauty met tranquility, and each moment was crafted with care and precision.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "/src/assets/room-2.jpg",
    price: "$110/night",
    name: "Executive Suite",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "It was just right, a perfect balance of comfort and elegance, where beauty met tranquility, and each moment was crafted with care and precision.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "/src/assets/room-3.jpg",
    price: "$110/night",
    name: "Super Deluxe",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "It was just right, a perfect balance of comfort and elegance, where beauty met tranquility, and each moment was crafted with care and precision.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i className="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i className="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
