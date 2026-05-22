import { BadgeCheck, ChefHat, Clock3, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Aboutus.css";
import storyImage from "../../assets/bakery_login_bg.png";

const storyFeatures = [
  {
    icon: ChefHat,
    label: "Traditional Recipes",
  },
  {
    icon: Clock3,
    label: "Freshly Baked Daily",
  },
  {
    icon: BadgeCheck,
    label: "Premium Ingredients",
  },
  {
    icon: Heart,
    label: "Made With Love",
  },
];

const storyFrames = [
  {
    className: "about-story__frame--hero",
    caption: "Fresh bread, warm from the oven",
  },
  {
    className: "about-story__frame--top",
    caption: "Hand-kneaded dough and quiet mornings",
  },
  {
    className: "about-story__frame--mid",
    caption: "Decorating every cake like a celebration",
  },
  {
    className: "about-story__frame--bottom",
    caption: "Rustic textures and cozy kitchen light",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="about-story"
      aria-labelledby="about-story-title"
    >
      <div className="about-story__backdrop" aria-hidden="true" />

      <div className="about-story__shell">
        <div className="about-story__visuals" aria-hidden="true">
          <div className="about-story__badge">Baked With Love Daily</div>

          {storyFrames.map((frame, index) => (
            <article
              className={`about-story__frame ${frame.className}`}
              key={frame.caption}
            >
              <img
                src={storyImage}
                alt=""
                style={{ animationDelay: `${index * 0.12}s` }}
              />
              <div className="about-story__frame-overlay">
                <span>Est. 2018</span>
                <p>{frame.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-story__content">
          <p className="about-story__eyebrow">Our Story</p>
          <h2 id="about-story-title">
            From a Small Kitchen to Thousands of Happy Hearts
          </h2>
          <p className="about-story__lead">
            Our bakery began with the kind of recipe book passed quietly from
            one generation to the next, written in handwritten notes,
            flour-smudged margins, and memories of early mornings in a family
            kitchen. What started as a small ritual of mixing, resting, and
            baking has grown into a place where freshness feels personal and
            every pastry carries a little bit of home.
          </p>
          <p className="about-story__body">
            We choose ingredients with care, prepare each batch by hand, and let
            the warmth of the oven guide every detail. From the first rise of
            dough to the final golden finish, we believe bakery craft should
            feel honest, comforting, and quietly luxurious. The result is food
            that tastes like tradition, welcomes people in, and turns ordinary
            moments into something worth remembering.
          </p>

          <div className="about-story__features" aria-label="Bakery highlights">
            {storyFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="about-story__feature" key={feature.label}>
                  <span
                    className="about-story__feature-icon"
                    aria-hidden="true"
                  >
                    <Icon size={16} />
                  </span>
                  <span>{feature.label}</span>
                </div>
              );
            })}
          </div>

          <Link to="/about" className="about-story__cta">
            Know More About Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
