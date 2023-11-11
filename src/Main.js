import React, { useState } from 'react';

function Main() {
    const [persons, setPersons] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const handleReservationSubmit = (e) => {
      e.preventDefault();
      // Add your logic here to handle the form submission
      console.log('Form submitted:', { persons, date, time });
    };

    return (
        <main>
            <div class="hero">
                <h1>LITTLE LEMON RESTAURANT</h1>
                <h2>Berlin</h2>
                <p>The Little Lemon restaurant is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="cta-button" href="#">Menu</button>
            </div>
            <div className='menu'>
                <div className='container'>
                    <div className='row'>
                        <div className='menu-col'>
                            <img src="images\bruchetta.svg" alt="Bruschetta"/>
                            <h2>Bruschetta</h2>
                            <p className="description">Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil.</p>
                            <p className="price">€ 7.99</p>
                            <button type="button">Order for Delivery</button>
                        </div>
                        <div className='menu-col'>
                            <img src="images\greek salad.jpg" alt="Greek Salad"/>
                            <h2>Greek Salad</h2>
                            <p className="description">sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.</p>
                            <p className="price">€ 6.99</p>
                            <button type="button">Order for Delivery</button>
                        </div>
                        <div className='menu-col'>
                            <img src="images\lemon dessert.jpg" alt="Lemon Cake"/>
                            <h2>Lemon Cake</h2>
                            <p className="description">a dense, flavorful and very popular cake.</p>
                            <p className="price">€ 8.99</p>
                            <button type="button">Order for Delivery</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reservation">
            <div className='container'>
                <h2>RESERVATION</h2>
                <form onSubmit={handleReservationSubmit}>
                    <label htmlFor="persons">Number of Persons</label>
                        <input
                            type="number"
                            id="persons"
                            name="persons"
                            value={persons}
                            onChange={(e) => setPersons(e.target.value)}
                            required
                            min="1"
                            max="10"
                            /><br /><br />

                    <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            /><br /><br />

                    <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            /><br /><br />
                    <button className='sec-btn' type="submit">Book</button>
                </form>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className='row'>
                        <div className='about-col'>
                            <h2>About Little Lemon</h2>
                            <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Berlin, and were inspired to bring the flavors of their hometown in Italy to the people of Berlin. The two brothers continue to oversee the Little Lemon restaurant, nearly fifteen years later.</p>
                        </div>
                        <div className='about-col'>
                            <img src="images\Mario and Adrian A.jpg" alt="Mario and Adrian"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;