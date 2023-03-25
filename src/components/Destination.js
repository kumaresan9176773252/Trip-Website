import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p> Tours give you the opportunity to see a lot,within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal volcano, Batangas"
        text=" one of the most iconic views in luzon Mt Taal boasts a volcano
        inside a lake an island if you fancy a closer look, the hike up to
        the creater is a mere 45 minutes and is easy enough for beginner
        guides will assist you most of the way and you will see the
        peculiar environment found on an active volcano including volcano
        rocks and steam vents.the hike can be dusty and hot, so plan for
        an early morning trip ,and them unwind with some bulalo before
        heading back home!."
        img1="https://thumbs.dreamstime.com/b/view-taal-volcano-picnic-grove-19096670.jpg"
        img2="https://media.istockphoto.com/id/1263176435/photo/panorama-view-on-the-famous-taal-volcano.jpg?s=612x612&w=0&k=20&c=gIhhPXd0Yg8_hAeZpBlu_akOZac18Z7JwmkT-ZECylU="
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="If you are looking for a hike that's a little more challenging
        but still good for a beginner mountaineer, check out Mt.Daguldul in 
        san juan, batangas.you'll start your hike from the beach and pass through 
        tropical forest, different rock farmations, and small store halfway up the 
        trail where you can take a break and drink boko juice and through the summit
        itself may not have the best view, the breeze is fantastic.once you've made
        it back down,head straight the beach for refreshing,well-deserved swim."
        img1="https://gttp.imgix.net/393018/x/0/best-beaches-in-batangas-laiya-san-juan-calatagan-nasugbu-and-more-2.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
        img2="https://www.trailadventours.com/media/uploads/images/2019/01/04/small_daguldol20134.jpg"
      />
    </div>
  );
};
export default Destination;
