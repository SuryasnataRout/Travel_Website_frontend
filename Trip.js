import "./TripStyles.css"
import TripData from "./TripData";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lingaraj_temple_Bhubaneswar.jpg/2560px-Lingaraj_temple_Bhubaneswar.jpg"
                heading="Trip to Bhubaneshwar"
                text="Bhubaneswar, the capital city of Odisha, is often referred to as the Temple City of India for its rich heritage of ancient temples that date back over 2,000 years. Blending history with modernity, the city is known for architectural marvels like the Lingaraj Temple, Mukteshwar Temple, and Rajarani Temple, which showcase exquisite Kalinga-style craftsmanship. Bhubaneswar is also a hub for education, culture, and IT, offering a unique mix of traditional charm and urban development. With its well-planned roads, vibrant markets, and proximity to places like Puri and Konark, it serves as a perfect gateway for exploring Odisha’s cultural and spiritual landscape."
                 />

                 <TripData 
                image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/45/18/4e/sunrise-from-puri-beach.jpg"
                heading="Trip to Puri"
                text="Puri, located on the eastern coast of Odisha, is one of the four sacred Char Dham pilgrimage sites for Hindus and is best known for the iconic Jagannath Temple. The city comes alive during the annual Rath Yatra (Chariot Festival), attracting millions of devotees and tourists from around the world. Besides its religious significance, Puri also boasts a long, golden sandy beach along the Bay of Bengal, perfect for sunrises and seaside strolls. With its vibrant spiritual atmosphere, coastal charm, and proximity to heritage sites like Konark and Chilika Lake, Puri offers a soulful blend of devotion, culture, and natural beauty."
                 />

                 <TripData 
                image="https://pbs.twimg.com/media/ENfE8HQWoAAmaz2.jpg"
                heading="Trip to Rourkela"
                text="Rourkela, located in the Sundargarh district of Odisha, is known as the Steel City of Odisha due to the presence of the Rourkela Steel Plant, one of India's largest integrated steel plants. Surrounded by hills and forests, Rourkela blends industrial significance with natural beauty. The city is also a growing hub for education and sports, housing the prestigious National Institute of Technology (NIT Rourkela). Attractions like the Hanuman Vatika, Vedvyas Temple, and Khandadhar Waterfall make Rourkela a unique destination that offers a mix of modern development and serene getaways."
                 />
            </div>
        </div>
    );
}

export default Trip;
