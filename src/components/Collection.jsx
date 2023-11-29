import React, { useEffect, useState } from 'react'
import Coffee from './Coffee';

export default function Collection() {
    const [coffeeData, setCoffeeData] = useState([]);
    const [activeBtn, setActiveBtn] = useState("all");

    useEffect(() => {
        const fetchData = () => {
            const apiURL = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

            fetch(apiURL)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setCoffeeData(data);
                })
                .catch(error => console.log("Error:", error))
        }

        fetchData();
    }, []);

    const handleButton = buttonType => {
        setActiveBtn(buttonType);
    }

    const filteredCoffeeData = coffeeData.filter(item => {
        if (activeBtn === "all") return true;
        else if (activeBtn === "available") return item.available === true;
        return false;
    });

    return (
        <section>
            <div className="btn-container">
                <button className={activeBtn === "all" ? "active" : ""} onClick={() => handleButton("all")}>All Products</button>
                <button className={activeBtn === "available" ? "active" : ""} onClick={() => handleButton("available")}>Available Now</button>
            </div>
            <section className="collection-list">
                {   filteredCoffeeData.map((data, i) => (
                    <Coffee key={i} {...data} />
                ))    }
            </section>
        </section>
    )
}