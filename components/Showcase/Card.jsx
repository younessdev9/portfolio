import { MyCard } from "./styles";

export default function Card({ title, paragraph, component: Component }) {
  return (
    <MyCard>
      <div className="card-header">
        <div className="dev-icons">
          <Component width={40} className="icon" />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{paragraph}</p>
    </MyCard>
  );
}
