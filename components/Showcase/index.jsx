import { MyShowcase } from "./styles";
import Card from "./Card";
import { cardsData } from "./cardData";

export default function Showcase() {
  return (
    <MyShowcase>
      <h2 className="section-title">What I do</h2>
      <div className="cards">
        {cardsData.map((card) => (
          <Card {...card} key={card.title} />
        ))}
      </div>
    </MyShowcase>
  );
}
