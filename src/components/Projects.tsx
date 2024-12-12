import { title } from 'process';
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title:"CSS",
        desc: "CSS (Cascading Style Sheets) is used to style and layout HTML elements. It controls aspects like colors, fonts, spacing, and positioning. CSS separates content from design, improving website flexibility and maintainability.",
        img:"/project_01.jpg",
        tags: ["STYLE","STYLING"],
    },
    {
        id: 1,
        title:"JAVASCRIPT",
        desc: "JavaScript is a programming language used to create interactive and dynamic content on websites. It allows developers to manipulate HTML and CSS, handle user events, and perform asynchronous tasks. JavaScript is essential for building web applications, enabling features like form validation, animations, and real-time updates.",
        img:"/project_02.jpg",
        tags: ["Game developer","app builder"],
    },
    {
        id: 2,
        title:"ARTIFICAL INTELLEGENCE",
        desc: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to perform tasks such as learning, problem-solving, and decision-making. AI systems can analyze data, recognize patterns, and improve over time without explicit programming. It's used in applications like chatbots, recommendation systems, and autonomous vehicles.",
        img:"/project_03.jpg",
        tags: ["chart bot"],
    },
    {
        id: 3,
        title:"E-COMMERCE",
        desc: "E-commerce (electronic commerce) is the buying and selling of goods and services over the internet. It involves online transactions between businesses, consumers, and other parties. E-commerce platforms allow businesses to reach a global market, offering features like product listings, payment processing, and customer support.",
        img:"/project_04.jpg",
        tags: ["online store" ,"electronic store"],
    },
    {
        id: 4,
        title:"HTML",
        desc: "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines elements like headings, paragraphs, links, images, and other multimedia. HTML uses tags to organize and display text and media on web pages, forming the foundation for building websites.",
        img:"/project_05.jpg",
        tags: ["build website",]
    },
    {
        id: 5,
        title:"TYPESCRIPT",
        desc: "typescript  is a superset of JavaScript that adds static typing to the language. It enables developers to catch errors at compile time rather than runtime by defining variable types, function parameters, and return values. TypeScript code is compiled into standard JavaScript, making it compatible with all browsers and platforms while offering enhanced code quality and maintainability.",
        img:"/project_06.jpg",
        tags: ["js compiler"],
    }
];


const Projects = () => {
  return (
    <div id='Projects'className=' pt-32container'>
      < Heading title='MY COURSES'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img= {el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
