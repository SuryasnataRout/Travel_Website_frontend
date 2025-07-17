import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination=()=>{
    return(
        <div className="destination" id="destinations">
            <h1>Popular Destinations</h1>
            <DestinationData 
            className="first-des"
            heading="Konark Sun Temple"
            text="Konark, located in the Puri district of Odisha, is renowned for the magnificent Sun Temple, a 13th-century architectural marvel and a UNESCO World Heritage Site. Built by King Narasimhadeva I of the Eastern Ganga dynasty, the temple is designed as a colossal chariot dedicated to the Sun God, Surya, with twelve intricately carved stone wheels and seven mighty horses. The temple is a masterpiece of Kalinga architecture, celebrated for its detailed stone carvings depicting scenes from daily life, mythology, and celestial beings. Though partially in ruins today, Konark remains a symbol of India’s rich heritage and draws thousands of visitors and art lovers each year."
            img1="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1200px-Konarka_Temple.jpg"
            img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWPKJz4NaMuDuTURbCJgZW53J077_Om70nw&s"/>

            {/*<DestinationData 
            className="first-des-reverse"
            heading="Puri Beach,Puri"
            text="Puri Beach, located along the eastern coast of Odisha on the Bay of Bengal, is one of India’s most popular pilgrimage and tourist destinations. Known for its golden sands, gentle waves, and spiritual ambiance, the beach attracts thousands of visitors, especially during festivals like the Rath Yatra. It is also famous for its vibrant sunrises and sunsets, and the sight of local fishermen casting their nets adds to its charm. With a backdrop of the historic Jagannath Temple and a coastline lined with souvenir shops and food stalls, Puri Beach offers both serenity and cultural vibrancy, making it a perfect blend of spirituality and seaside relaxation."
            img1="https://www.sagaricahotel.com/wp-content/uploads/2021/12/slider-13.jpg"
            img2="https://s7ap1.scene7.com/is/image/incredibleindia/puri-beach-puri-odisha-1-attr-hero?qlt=82&ts=1726663799757"/>*/}

            <DestinationData 
            className="sec-des-reverse"
            heading="Simlipal National Park"
            text="Simlipal National Park, located in the Mayurbhanj district of Odisha, is one of India’s most prominent tiger reserves and a UNESCO Biosphere Reserve. Spanning over 2,700 square kilometers, it is home to a diverse range of flora and fauna, including Bengal tigers, elephants, leopards, and over 200 species of birds. The park is named after the red silk cotton trees (locally called Simul) that bloom in abundance here. Apart from its rich wildlife, Simlipal is adorned with dense forests, picturesque waterfalls like Barehipani and Joranda, and tribal villages that add to its cultural richness. It offers a perfect escape for nature lovers, wildlife photographers, and eco-tourism enthusiasts."
            img1="https://www.tourismorissa.org/wp-content/uploads/2024/12/Barehipani-Waterfall.jpg"
            img2="https://etimg.etb2bimg.com/photo/114051202.cms"/>
    
           {/* <DestinationData 
            className="sec-des"
            heading="Chilika Lake"
            text="Chilika Lake, located along the eastern coast of Odisha, is Asia’s largest brackish water lagoon and a haven for migratory birds and aquatic life. Spanning over 1,100 square kilometers, the lake is dotted with small islands and connected to the Bay of Bengal through a narrow channel. It is renowned for its rich biodiversity, including the endangered Irrawaddy dolphins, flamingos, pelicans, and a variety of fish and crab species. The lake transforms into a vibrant bird sanctuary during the winter, attracting visitors to Nalabana Bird Sanctuary and Satapada. Chilika’s scenic beauty, calm waters, and boat rides make it a perfect destination for nature lovers, bird watchers, and peace seekers."
            img1="https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1698221080_chilika_lake.jpg.webp"
            img2="https://chilikatour.com/images/main-slider/1.jpg"/>*/}
    
        </div>
    );
};

export default Destination;