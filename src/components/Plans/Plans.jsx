import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}

      <div className="plans">
        {plansData.map((plans, i) => (
          <div className="plan" key={i}>
            {plans.icon}
            <span>{plans.name}</span>
            <span style={{ fontSize: "3rem" }}>$ {plans.price}</span>

            <div className="features">
              {plans.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}> {feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span style={{ fontSize: "0.8rem", fontWeight: "normal" }}>See more benefits </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
