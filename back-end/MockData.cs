using PlanetarySuperStoreApi.Models;

/// <summary>
/// Class that stores all the available products of the store. Basically the DB of this app.
/// </summary>
public static class MockData{
    public static Product[] products = new Product[]{
        new Product{
            Id = 1,
            Name = "XK-991",
            Price = 28.18M,
            ImageSrc = "assets/black_hole.png",
            Description = "Technically a black hole and not a planet. But while this beauty lacks a firm surface to stand on, it more than make up for with sheer gravitational power. We gurantee nothing in the enitre universe is escaping the attractive pull of XR-991!"
        },
        new Product{
            Id = 2,
            Name = "CH-228",
            Price = 96.87M,
            ImageSrc = "assets/garden_planet.jpg",
            Description = "Garden planets are this galactic epoch's hot ticket item. Fluffy clouds, lush forests, and never ending oceans means this planet can support all kinds of carbon based lifeforms! Buy now before it's too late!"
        },
        new Product{
            Id = 3,
            Name = "GS-709",
            Price = 52.12M,
            ImageSrc = "assets/gas_giant.png",
            Description = "Gas and mass! An atmosphere of mostly hydrogen and helium means this gaseous giant will always be showing off its beautiful clouds!"
        },
        new Product{
            Id = 4,
            Name = "FL-CO8",
            Price = 145.17M,
            ImageSrc = "assets/core_planet.jpg",
            Description = "Not only does this planet have all the features of our award-winning garden planets, but it also comes with a solid titanium core! This planet is utterly indestructible!"
        },
        new Product{
            Id = 5,
            Name = "SR-112",
            Price = 72.04M,
            ImageSrc = "assets/gas_giant_moon.png",
            Description = "This gas giant boasts an atmosphere of hydrogen, helium, a little bit of methane, just a dash of water, and a sprinkle of ammonia to produce those sinfully beautiful clouds. And it comes with a moon!"
        },
        new Product{
            Id = 6,
            Name = "VR-003",
            Price = 153.02M,
            ImageSrc = "assets/garden_moon.jpg",
            Description = "Standard garden planet that comes with a free moon. If this planet every develops intelligent life (let's hope not...), those creatures will surely be hanging 10 on those oceanic waves!"
        },
        new Product{
            Id = 7,
            Name = "IG-PPC",
            Price = 1.32M,
            ImageSrc = "assets/nuked_garden.png",
            Description = "Not every intelligent species can handle the power of atomics. But the existential demise of all life on IG-PPC is a great opportunity for you! Buy a widly coveted garden planet for our LOW LOW price!"
        }
    };
}