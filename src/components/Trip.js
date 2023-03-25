import TripData from "./TripData";
import "./TripStyle.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google maps.</p>
      <div className="tripcard">
        <TripData
          image="https://media.istockphoto.com/id/500798563/photo/city-skyline-at-sunset-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=6v7sNMfwW56F5TxfvXH7lEh7nZynm1aRSK3fF0lICjU="
          heading="Trip in Indonesia"
          text="Indonesia, officially the republic of indonesia is a
        country in southeast asia and Oceania between the indian and
        pacific oceans it consist of over 17,000 islands,including sumatra
        java,sulawesi and parts of barneo and new guinea."
        />
        <TripData
          image="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/3b/f1.jpg"
          heading="Trip in malaysia "
          text="Malaysia is a southeast Asian country occupying parts of 
        the malay peninsula and the island of borneo.it's known for it's
        beaches, rainforests and mix of malay,chinese,indian and european cultural
        influences."
        />
        <TripData
          image="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          heading="Trip in France"
          text="France in western Europe encompasses medieval cities,alpine
         villages and mediterranean beaches.paris,it's capital is famed for
         it's fashion houses classical art museums including the louvre and monuments
         like the eiffel tower."
        />
      </div>
    </div>
  );
}

export default Trip;
