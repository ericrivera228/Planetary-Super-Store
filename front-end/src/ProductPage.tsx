// React imports
import React, { useState } from "react";

// Local imports
import ProductCard from "./ProductCard";
import { Product } from "./product";

// TODO: REMOVE THIS
import blackHoldImg from "./images/black_hole.png";
import gardenPlanetImg from "./images/garden_planet.jpg";
import gasGiantImg from "./images/gas_giant.png";
import corePlanetImg from "./images/core_planet.jpg";
import gasGiantMoonImg from "./images/gas_giant_moon.png";
import gardenMoonImg from "./images/garden_moon.jpg";
import nukedGardenImg from "./images/nuked_garden.png";

const mockProducts: Product[] = [
  {
    name: "XK-991",
    price: 28.18,
    imageSrc: blackHoldImg,
    description:
      "Technically a black hole and not a planet. But while this beauty lacks a firm surface to stand on, it more than make up for with sheer gravitational power. We gurantee nothing in the enitre universe is escaping the attractive pull of XR-991!",
  },
  {
    name: "CH-228",
    price: 96.87,
    imageSrc: gardenPlanetImg,
    description:
      "Garden planets are this galactic epoch's hot ticket item. Fluffy clouds, lush forests, and never ending oceans means this planet can support all kinds of carbon based lifeforms! Buy now before it's too late!",
  },
  {
    name: "GS-709",
    price: 52.12,
    imageSrc: gasGiantImg,
    description:
      "Gas and mass! An atmosphere of mostly hydrogen and helium means this gaseous giant will always be showing off its beautiful clouds!",
  },
  {
    name: "FL-CO8",
    price: 145.17,
    imageSrc: corePlanetImg,
    description:
      "Not only does this planet have all the features of our award-winning garden planets, but it also comes with a solid titanium core! This planet is utterly indestructible!",
  },
  {
    name: "SR-112",
    price: 72.04,
    imageSrc: gasGiantMoonImg,
    description:
      "This gas giant boasts an atmosphere of hydrogen, helium, a little bit of methane, just a dash of water, and a sprinkle of ammonia to produce those sinfully beautiful clouds. And it comes with a moon!",
  },
  {
    name: "VR-003",
    price: 153.02,
    imageSrc: gardenMoonImg,
    description:
      "Standard garden planet that comes with a free moon. If this planet every develops intelligent life (let's hope not...), those creatures will surely be hanging 10 on those oceanic waves!",
  },
  {
    name: "IG-PPC",
    price: 1.32,
    imageSrc: nukedGardenImg,
    description:
      "Not every intelligent species can handle the power of atomics. But the existential demise of all life on IG-PPC is a great opportunity for you! Buy a widly coveted garden planet for our LOW LOW price!",
  },
];

export default function ProductPage() {
  const [products, setProducts] = useState(mockProducts);

  return (
    <div className="product-page container-fluid" style={{ marginTop: 30 }}>
      <div className="row">
        {products.map((productToDisplay) => {
          return (
            <div
              className="col-4"
              key={productToDisplay.name}
              style={{ marginBottom: 30 }}
            >
              <ProductCard product={productToDisplay} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
