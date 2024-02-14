import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              we got 20 year of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Mountains rise majestically, kissing the sky with their
                  snow-capped peaks.
                </p>
                <p>
                  Stars twinkle in the vast expanse of the night, painting a
                  celestial masterpiece.
                </p>
                <p>
                  Waves crash against the shore, their rhythmic dance soothing
                  weary souls.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are working with local guide
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Forests whisper secrets of ancient wisdom, their canopies
                  sheltering life's mysteries.
                </p>
                <p>
                  Cities buzz with energy, a symphony of humanity's dreams and
                  aspirations.
                </p>
                <p>
                  Deserts stretch endlessly, where time seems to stand still
                  under the blazing sun.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>

        <SearchableList items={["item:1", "item:2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
