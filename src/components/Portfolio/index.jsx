import React, { useRef } from "react";
import "./Portfolio.scss";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { MotionDiv } from "../../utils/motionElements";

const items = [
    {
        id: 1,
        title: "Product App - Nike",
        img: "https://images.pexels.com/photos/18280486/pexels-photo-18280486/free-photo-of-man-walking-on-a-cobblestone-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis totam dolorem voluptas quidem modi adipisci blanditiis possimus, recusandae corrupti. Natus dolorum aspernatur similique impedit fugit eum accusamus. Illum, est?",
    },
    {
        id: 2,
        title: "Portfolio",
        img: "https://images.pexels.com/photos/2637052/pexels-photo-2637052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis totam dolorem voluptas quidem modi adipisci blanditiis possimus, recusandae corrupti. Natus dolorum aspernatur similique impedit fugit eum accusamus. Illum, est?",
    },
    {
        id: 3,
        title: "Dummy 1",
        img: "https://images.pexels.com/photos/1000974/pexels-photo-1000974.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis totam dolorem voluptas quidem modi adipisci blanditiis possimus, recusandae corrupti. Natus dolorum aspernatur similique impedit fugit eum accusamus. Illum, est?",
    },
    {
        id: 4,
        title: "Dummy 2",
        img: "https://images.pexels.com/photos/5634864/pexels-photo-5634864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis totam dolorem voluptas quidem modi adipisci blanditiis possimus, recusandae corrupti. Natus dolorum aspernatur similique impedit fugit eum accusamus. Illum, est?",
    },
];

const SingleSection = ({ item }) => {
    const sectionRef = useRef();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="portfolio-section">
                <div className="portfolio-section-content">
                    <div
                        className="portfolio-section-content-img"
                        ref={sectionRef}
                    >
                        <img src={item.img} alt="item" />
                    </div>
                    <MotionDiv
                        className="portfolio-section-content-text"
                        style={{ y }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};
const Portfolio = () => {
    const portFolioRef = useRef();

    const { scrollYProgress } = useScroll({
        target: portFolioRef,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={portFolioRef}>
            <div className="portfolio-progress">
                <h1>Featured Work</h1>
                <MotionDiv
                    className="portfolio-progress-bar"
                    style={{ scaleX }}
                ></MotionDiv>
            </div>
            {items.map((item) => (
                <SingleSection item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
