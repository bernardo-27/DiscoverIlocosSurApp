// Ilocos Sur tourist data
const ilocosSurData = {
    cities: [
        {
            name: "Vigan",
            coordinates: [17.5747, 120.3870],
            description: "A UNESCO World Heritage site known for its preserved Spanish colonial and Asian architecture",
            image: "img/Vigan/vigan-city.jpg",
            attractions: [
                {
                    name: "Calle Crisologo",
                    description: "Historic cobblestone street lined with Spanish colonial houses",
                    image: "img/Vigan/calle-crisologo.jpg",
                    coordinates: [17.567752, 120.387658],
                    details: {
                        history: "Calle Crisologo is the heart of Vigan's historic district, featuring well-preserved Spanish colonial architecture from the 18th and 19th centuries. It was once the center of trade and commerce during the Spanish era, where wealthy Chinese and Spanish merchants lived.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Photography", "Shopping for souvenirs", "Horse-drawn carriage rides"],
                        tips: ["Visit early morning to avoid crowds", "Best photos during golden hour", "Try the local empanada nearby"]
                    }
                },
                {
                    name: "Vigan Cathedral",
                    description: "Also known as Metropolitan Cathedral of the Conversion of St. Paul",
                    image: "img/Vigan/vigan-cathedral.jpg",
                    coordinates: [17.574740, 120.388873],
                    details: {
                        history: "Built in 1790, this baroque church represents the Spanish colonial influence on Philippine architecture.",
                        bestTime: "Any time during daylight hours",
                        activities: ["Attend mass", "Architecture appreciation", "Photography"],
                        tips: ["Respect dress code", "Check mass schedule", "Visit Plaza Salcedo after"]
                    }
                },
                {
                    name: "Plaza Salcedo",
                    description: "Historic plaza featuring a dancing fountain show",
                    image: "img/Vigan/plaza-salcedo.jpg",
                    coordinates: [17.575364, 120.387475],
                    details: {
                        history: "Named after Juan de Salcedo, this plaza is the oldest monument in Northern Luzon.",
                        bestTime: "Evening for fountain shows",
                        activities: ["Watch fountain show", "Picnic", "Evening stroll"],
                        tips: ["Fountain shows at 7:30 PM", "Bring a camera", "Visit nearby restaurants"]
                    }
                },
                {
                    name: "Syquia Mansion Museum",
                    description: "Ancestral home of former President Elpidio Quirino",
                    image: "img/Vigan/syquia-mansion.jpg",
                    coordinates: [17.571032, 120.389750],
                    details: {
                        history: "Built in the 19th century, this ancestral home of former President Elpidio Quirino showcases Spanish-era architecture and lavish interiors. It reflects the wealth and influence of the Quirino family.",
                        bestTime: "Morning to afternoon",
                        activities: ["Museum tour", "Historical exploration", "Architecture appreciation"],
                        tips: ["Guided tours available", "Photography allowed without flash", "Combined tickets with other museums available"]
                    }
                }
            ]
        },
        {
            name: "Bantay",
            coordinates: [17.58172, 120.38947],
            description: "A historic town adjacent to Vigan, known for its bell tower and churches",
            image: "img/Bantay/bantay-town.jpg",
            attractions: [
                {
                    name: "Bantay Church",
                    description: "One of the oldest churches in Ilocos Sur with a famous bell tower",
                    image: "img/Bantay/bantay-bell-tower.jpg",
                    coordinates: [17.582063, 120.391579],
                    details: {
                        history: "Built in 1590, this church served as a sanctuary and watchtower during Spanish rule. The bell tower, strategically placed on a hill, allowed locals to spot potential invaders coming from the sea.",
                        bestTime: "Morning until sunset",
                        activities: ["Church visit", "Bell tower climb", "Panoramic photography"],
                        tips: ["Small entrance fee for tower", "Great sunset views", "Combined with Vigan tour"]
                    }
                },
                {
                    name: "Mount Tupira",
                    description: "A natural viewpoint offering spectacular views of the province",
                    image: "img/Bantay/mount-tupira.jpg",
                    coordinates: [17.5950544,120.4841175],
                    details: {
                        history: "A natural viewpoint that has long served as a strategic location during conflicts. In the past, locals used this elevated area to monitor enemy movements along the coastline.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Hiking", "Birdwatching", "Photography"],
                        tips: ["Wear comfortable shoes", "Bring drinking water", "Check weather forecast before visit"]
                    }
                },
                {
                    name: "Bantay Watchtower",
                    description: "Historic watchtower used to guard against pirate attacks",
                    image: "img/Bantay/bantay-watchtower.jpg",
                    coordinates: [17.582063, 120.391579],
                    details: {
                        history: "Built during the Spanish era, this structure was used to guard against Moro pirate attacks. Positioned near the coastline, it played an important role in coastal defense.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Historical sightseeing", "Photography", "Cultural learning"],
                        tips: ["Visit with a local guide", "Combine with Bell Tower visit", "Good for history enthusiasts"]
                    }
                }
            ]
        },
        {
            name: "Santa Maria",
            coordinates: [17.36923, 120.48097],
            description: "Home to the historic Santa Maria Church, a UNESCO World Heritage Site",
            image: "img/Santa Maria/santa-maria-city.jpg",
            attractions: [
                {
                    name: "Minor Basilica and Archdiocesan Shrine of Our Lady of the Assumption",
                    description: "UNESCO World Heritage Site, Baroque church built in 1765",
                    image: "img/Santa Maria/santa-maria-church.jpg",
                    coordinates: [17.36669823898044, 120.48310603032847],
                    details: {
                        history: "One of the four baroque churches in the Philippines inscribed in the UNESCO World Heritage List. Its fortress-like structure was designed to protect against invasions, making it both a place of worship and a defensive stronghold.",
                        bestTime: "Morning to afternoon",
                        activities: ["Church visit", "Historical tour", "Photography"],
                        tips: ["Climb the stairs for panoramic views", "Visit early morning", "Bring water"]
                    }
                },
                {
                    name: "Pinsal Falls",
                    description: "The largest waterfall in Ilocos Sur, surrounded by lush vegetation",
                    image: "img/Santa Maria/pinsal-falls.jpg",
                    coordinates: [17.377671, 120.539889],
                    details: {
                        history: "According to local folklore, it was created by the footprints of the legendary giant Angalo. During the Spanish period, it served as a source of freshwater for locals.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Swimming", "Picnicking", "Nature photography"],
                        tips: ["Bring swimming gear", "Weekdays are less crowded", "Pack a picnic lunch"]
                    }
                },
                {
                    name: "Suso Beach",
                    description: "A quiet and scenic beach in Santa Maria, known for its long stretch of shoreline, gentle waves, and peaceful atmosphere.",
                    image: "img/Santa Maria/suso-beach.jpg",
                    coordinates: [17.357313491756006, 120.4541509799226],
                    details: {
                        history: "Suso Beach has long been a favorite spot for locals and nearby towns for weekend getaways and family picnics. Its uncrowded shoreline makes it ideal for relaxation away from the bustling tourist spots.",
                        bestTime: "Early morning or late afternoon for cooler temperatures and scenic lighting.",
                        activities: [
                            "Swimming",
                            "Picnicking",
                            "Beach walks",
                            "Sunset watching"
                        ],
                        tips: [
                            "Bring your own food and mats — facilities may be limited.",
                            "Wear sun protection.",
                            "Great spot for peaceful beach photos and unwinding with nature."
                        ]
                    }
                }
                
            ]
        },
        {
            name: "Candon",
            coordinates: [17.19276, 120.44801],
            description: "Known as the Tobacco Capital of the Philippines",
            image: "img/candon-city.jpg",
            attractions: [
                {
                    name: "Candon Church (St. John de Sahagun Parish)",
                    description: "Historic church known for its architectural beauty",
                    image: "img/Candon/candon-church.jpg",
                    coordinates: [17.193249, 120.449386],
                    details: {
                        history: "Built in 1779, the church showcases Spanish colonial architecture and religious artistry. It has survived earthquakes and wars, standing as a significant center of Catholic faith during the Spanish era.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Photography", "Local culture exploration"],
                        tips: ["Visit during off-peak hours", "Try local tobacco products", "Explore nearby markets"]
                    }
                },
                {
                    name: "Darapidap Beach",
                    description: "Peaceful beach with gray sand and clear waters",
                    image: "img/Candon/darapidap-beach.jpg",
                    coordinates: [17.199985, 120.416731],
                    details: {
                        history: "This peaceful beach has been a fishing ground for locals for generations. During Spanish times, coastal areas like this were important trade routes.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Swimming", "Sunset viewing", "Picnicking"],
                        tips: ["Bring sunscreen", "Visit during weekdays", "Great for sunset photos"]
                    }
                },
                {
                    name: "Candon City Museum",
                    description: "Museum showcasing the history and heritage of Candon",
                    image: "img/Candon/candon-museum.jpg",
                    coordinates: [17.195122443168742, 120.44796127348016],
                    details: {
                        history: "This museum showcases the history of Candon, including its role in the Philippine revolution against Spain. It houses artifacts, documents, and photographs from colonial times.",
                        bestTime: "Morning to afternoon",
                        activities: ["Museum tour", "Cultural learning", "Historical exploration"],
                        tips: ["Guided tours available", "Photography usually allowed", "Check opening hours before visiting"]
                    }
                }
            ]
        },
        {
            name: "Narvacan",
            coordinates: [17.4194242, 120.4769173],
            description: "Coastal town known for outdoor adventure activities and historical sites",
            image: "img/Narvacan/narvacan-town.jpg",
            attractions: [
                {
                    name: "Narvacan Outdoor Adventure Hub",
                    description: "Modern eco-tourism park offering various adventure activities",
                    image: "img/Narvacan/narvacan-adventure.jpg",
                    coordinates: [17.431233, 120.449885],
                    details: {
                        history: "This adventure park is a modern attraction that promotes eco-tourism. The area was once a strategic location during the Spanish era, used as a vantage point for monitoring enemies.",
                        bestTime: "Early morning to afternoon",
                        activities: ["Paragliding", "Zip-lining", "Rock climbing"],
                        tips: ["Book activities in advance", "Wear appropriate clothes", "Bring extra clothes"]
                    }
                },
                {
                    name: "Narvacan Church (St. Lucy’s Church)",
                    description: "St. Lucy's Church built in the 16th century by Spanish friars",
                    image: "img/Narvacan/narvacan-church.jpg",
                    coordinates: [17.418504, 120.476707],
                    details: {
                        history: "Built in the 16th century by Spanish friars, this church is one of the oldest in Ilocos Sur. It has withstood earthquakes and typhoons, serving as a testament to the town's strong Catholic faith.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Historical exploration", "Architecture appreciation"],
                        tips: ["Respectful attire required", "Check mass schedule", "Take time to appreciate the details"]
                    }
                },
                {
                    name: "Tangadan Tunnel",
                    description: "Scenic viewpoint offering panoramic views of Narvacan and nearby landscapes.",
                    image: "img/Narvacan/tangadan-tunnel.jpg",
                    coordinates: [17.494646174137205, 120.50805873038428],
                    details: {
                        history: "Historically used as a vantage point during the Spanish era, this elevated area allowed locals to monitor enemy movements along the coast. Today, it serves as a peaceful site for relaxation and sightseeing.",
                        bestTime: "Morning or late afternoon.",
                        activities: [
                            "Sightseeing",
                            "Photography",
                            "Nature appreciation"
                        ],
                        tips: [
                            "Bring water.",
                            "Wear sunglasses or a hat.",
                            "Visit during sunrise or sunset for dramatic views."
                        ]
                    }
                }                
            ]
        },
        {
            name: "Santa",
            coordinates: [17.4859899, 120.4345364],
            description: "Coastal town with beautiful beaches and historical landmarks",
            image: "img/Santa/santa-town.jpg",
            attractions: [
                {
                    name: "Santa Beach",
                    description: "Quiet beach with clear waters and soft sand",
                    image: "img/Santa/santa-beach.jpg",
                    coordinates: [17.46999, 120.43131],
                    details: {
                        description:"This beach has been a fishing ground for locals for many years. It was once used by early settlers as a landing area for boats. Today, it is a relaxing spot for tourists who want to enjoy the coastal scenery.",
                        history: "This quiet beach is a hidden gem with clear waters and soft sand. Historically, it served as a docking point for fishermen and traders during the Spanish era.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Swimming", "Picnicking", "Sunset viewing"],
                        tips: ["Bring own food and drinks", "Limited facilities", "Good spot for beach camping"]
                    }
                },
                {
                    name: "Santa Church",
                    description: "St. Catherine of Alexandria Parish Church ",
                    image: "img/Santa/santa-church.jpg",
                    coordinates: [17.485831, 120.435348],
                    details: {
                        description:"a historic Roman Catholic church established in 1713. It falls under the jurisdiction of the Metropolitan Archdiocese of Nueva Segovia and is part of the St. Lucy Vicariate",
                        history: "Built during the Spanish period, this church has stood as a spiritual center for centuries. It has undergone renovations but still retains its classic colonial architecture.",
                        bestTime: "Morning to afternoon",
                        activities: ["Church visit", "Prayer", "Photography"],
                        tips: ["Check mass schedule", "Respectful dress code", "Visit town plaza after"]
                    }
                },
                {
                    name: "Old Spanish Watchtower",
                    description: "Historic watchtower built to protect the town from pirate attacks",
                    image: "img/Santa/santa-watchtower.jpg",
                    coordinates: [17.4320, 120.4380],
                    details: {
                        history: "This watchtower was built to protect the town from pirate attacks during Spanish rule. Positioned near the coast, it allowed locals to spot invaders approaching from the sea.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Historical exploration", "Photography", "Sightseeing"],
                        tips: ["Combine with beach visit", "Good for history enthusiasts", "Great panoramic views"]
                    }
                },
                {
                    name: "Banaoang Bridge",
                    description: "Iconic bridge connecting Santa and Bantay",
                    image: "img/Santa/banaoang-bridge-santa.jpg",
                    coordinates: [17.4350, 120.4520],
                    details: {
                        history: "This iconic bridge connects the towns of Santa and Bantay. It was originally built during the American period and was later reconstructed after being damaged by a typhoon.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Sightseeing", "Photography", "River viewing"],
                        tips: ["Visit during sunset", "Great view of Abra River", "Good for landscape photography"]
                    }
                }
            ]
        },
        {
            name: "Cabugao",
            coordinates: [17.7944818, 120.4549514],
            description: "Coastal town with beautiful beaches and historical port",
            image: "img/Cabugao/cabugao-town.jpg",
            attractions: [
                {
                    name: "Cabugao Beach Resort",
                    description: "Coastal retreat with clear waters and scenic views",
                    image: "img/Cabugao/cabugao-beach.jpg",
                    coordinates: [17.819946523524212, 120.45450377886536],
                    details: {
                        history: "This coastal retreat is known for its clear waters and scenic views. In the past, the shores of Cabugao were used by fishermen and traders who brought goods from different provinces.",
                        bestTime: "Morning to afternoon",
                        activities: ["Swimming", "Beach sports", "Relaxation"],
                        tips: ["Bring beach essentials", "Visit during weekdays for fewer crowds", "Try local seafood"]
                    }
                },
                {
                    name: "Salomague Port",
                    description: "One of the oldest ports in Ilocos Sur with historical significance",
                    image: "img/Cabugao/salomague-port.jpg",
                    coordinates: [17.780901681181305, 120.41516659554762],
                    details: {
                        history: "One of the oldest ports in Ilocos Sur, Salomague was historically significant during the Spanish era. It was used for trade and as a docking point for galleons transporting goods between Manila and China.",
                        bestTime: "Morning or late afternoon",
                        activities: ["Port watching", "Photography", "Historical exploration"],
                        tips: ["Watch for fishing boats returning", "Great sunset views", "Bring camera"]
                    }
                },
                {
                    name: "Cabugao Church (St. Mark the Evangelist Parish)",
                    description: "St. Mark the Evangelist Parish, a 17th-century church",
                    image: "img/Cabugao/cabugao-church.jpg",
                    coordinates: [17.794951069552862, 120.45621652993665],
                    details: {
                        history: "This 17th-century church was built using bricks and limestone, common materials during the Spanish period. It has withstood earthquakes and continues to be a place of worship.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Prayer", "Historical exploration"],
                        tips: ["Check mass schedule", "Respectful attire required", "Appreciate the colonial architecture"]
                    }
                }
            ]
        },
        {
            name: "Sinait",
            coordinates: [17.865034, 120.457009],
            description: "Northernmost town of Ilocos Sur known for its church and beaches",
            image: "img/Sinait/sinait-town.jpg",
            attractions: [
                {
                    name: "San Nicolas de Tolentino Church",
                    description: "Historic church housing the miraculous Black Nazarene image",
                    image: "img/Sinait/sinait-church.jpg",
                    coordinates: [17.865477002723306, 120.45784659925161],
                    details: {
                        history: "Established in the 17th century, this church houses the miraculous image of the Black Nazarene. The statue, believed to have healing powers, was a gift from Mexico during the Galleon Trade era.",
                        bestTime: "Morning to afternoon",
                        activities: ["Church visit", "Prayer", "Religious tourism"],
                        tips: ["Visit during feast days for special events", "Respectful attire required", "Check mass schedule"]
                    }
                },
                {
                    name: "Cabangtalan Beach",
                    description: "Quiet coastal spot with fine sand and crystal-clear waters",
                    image: "img/Sinait/calanutian-beach.jpg",
                    coordinates: [17.876286830410976, 120.44913892065136],
                    details: {
                        history: "A quiet coastal spot with fine sand and crystal-clear waters, this beach has long been part of the town's fishing industry. It was once used as a landing site for boats bringing goods from nearby provinces.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Swimming", "Beach combing", "Relaxation"],
                        tips: ["Limited facilities", "Bring own supplies", "Great for peaceful getaway"]
                    }
                },
                {
                    name: "Araqueño River Seaside",
                    description: "Important natural resource for locals",
                    image: "img/Sinait/araqueno-river-seaside.jpg",
                    coordinates: [17.860439605656136, 120.44468605236806],
                    details: {
                        history: "This river is an important natural resource for locals, providing water for irrigation and fishing. In the past, it served as a transportation route for traders and travelers moving between provinces.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Fishing", "Boating", "Nature appreciation"],
                        tips: ["Bring mosquito repellent", "Ask locals about the best fishing spots", "Respect the natural environment"]
                    }
                }
            ]
        },
        {
            name: "Magsingal",
            coordinates: [ 17.6851901, 120.4257345],
            description: "Historical town with preserved Spanish-era church and museum",
            image: "img/Magsingal/magsingal-town.jpg",
            attractions: [
                {
                    name: "Magsingal Church (St. William the Hermit Parish) ",
                    description: "St. William the Hermit Parish, known for its massive bell tower",
                    image: "img/Magsingal/magsingal-church.jpg",
                    coordinates: [17.684628, 120.425536],
                    details: {
                        history: "Built in the 17th century, this church is known for its massive bell tower and baroque-style architecture. It has survived several earthquakes and remains a place of worship for the local community.",
                        bestTime: "Morning to afternoon",
                        activities: ["Church visit", "Architecture appreciation", "Historical exploration"],
                        tips: ["Check mass schedule", "Visit the bell tower", "Take time to appreciate the details"]
                    }
                },
                {
                    name: "Magsingal Museum",
                    description: "Former convent converted into a heritage center",
                    image: "img/Magsingal/magsingal-museum.jpg",
                    coordinates: [17.685322, 120.426062],
                    details: {
                        history: "This museum was once a convent before being converted into a heritage center. It displays artifacts from the Spanish era, including religious items, pottery, and old photographs.",
                        bestTime: "Morning to afternoon",
                        activities: ["Museum tour", "Cultural learning", "Historical exploration"],
                        tips: ["Check opening hours", "Ask for guided tour", "Combine with church visit"]
                    }
                },
                {
                    name: "Magsingal Belfry",
                    description: "Historic bell tower offering a glimpse into Spanish colonial architecture",
                    image: "img/Magsingal/magsingal-belfry.jpg",
                    coordinates: [17.685455, 120.425713],
                    details: {
                        history: "The Magsingal Belfry stands beside the Magsingal Church and was built during the Spanish colonial period. It once served both as a bell tower and a lookout post for the town against coastal threats. Its structure has survived natural calamities and remains a key historical landmark.",
                        bestTime: "Morning or late afternoon",
                        activities: ["Historical sightseeing", "Architecture appreciation", "Photography"],
                        tips: ["Bring a camera", "Visit during clear weather for better views", "Respect the site's religious and historical value"]
                    }
                }
                
            ]
        },
        {
            name: "San Juan",
            coordinates: [17.74169, 120.45775],
            description: "Coastal town with scenic beaches and historical sites",
            image: "img/San Juan/san-juan-town.jpg",
            attractions: [
                {
                    name: "Tapao Mountain Resort",
                    description: "A serene mountain retreat in San Juan offering panoramic views, fresh air, and a peaceful atmosphere ideal for relaxation.",
                    image: "img/San Juan/tapao-mountain-resort.jpg",
                    coordinates: [17.7002, 120.4350],
                    details: {
                        history: "Tapao Mountain Resort has grown from a simple rest area into a popular local getaway, attracting visitors with its natural beauty and cool mountain breeze. It has become a favorite for family outings and nature lovers.",
                        bestTime: "Early morning or late afternoon for the best views and cooler temperatures.",
                        activities: [
                            "Sightseeing",
                            "Picnicking",
                            "Nature photography",
                            "Relaxation"
                        ],
                        tips: [
                            "Bring light jackets — it can get chilly.",
                            "Pack your own food or check if the resort offers local meals.",
                            "Visit during clear days for the best panoramic views."
                        ]
                    }
                },                
                {
                    name: "San Juan Church (St. John the Baptist Parish) ",
                    description: "St. John the Baptist Parish, a Spanish colonial church",
                    image: "img/San Juan/san-juan-church.jpg",
                    coordinates: [17.741001, 120.456097],
                    details: {
                        history: "This church was built during the Spanish period and has been a religious center for centuries. It features colonial-style architecture and has undergone several restorations to preserve its historic beauty.",
                        bestTime: "Morning to afternoon",
                        activities: ["Church visit", "Prayer", "Historical exploration"],
                        tips: ["Check mass schedule", "Respectful attire required", "Take time to appreciate the architecture"]
                    }
                },
                {
                    name: "Pikkang Falls",
                    description: "A serene and lesser-known waterfall in San Juan, ideal for a peaceful nature escape and refreshing swim.",
                    image: "img/San Juan/pikkang-falls.jpg",
                    coordinates: [17.736759105193766, 120.51198405140964],
                    details: {
                        history: "Pikkang Falls is a natural spot cherished by locals for its tranquil setting and cool, clear waters. Though not as famous as other falls in the region, it offers a rewarding experience for those willing to explore.",
                        bestTime: "Morning to late afternoon, especially during the dry season.",
                        activities: [
                            "Swimming",
                            "Nature walks",
                            "Photography",
                            "Picnicking"
                        ],
                        tips: [
                            "Wear sturdy footwear for the trail.",
                            "Bring your own food and drinks — there are limited facilities nearby.",
                            "Ideal for quiet trips and small group getaways."
                        ]
                    }
                }                
            ]
        },
        {
            name: "Santo Domingo",
            coordinates: [ 17.6390234, 120.4098130],
            description: "Town known for traditional pottery making and scenic beaches",
            image: "img/Santo Domingo/santo-domingo-town.jpg",
            attractions: [
                {
                    name: "Pagburnayan (Jar Making Industry) ",
                    description: "Traditional jar making industry dating back to Spanish times",
                    image: "img/Santo Domingo/pagburnayan.jpg",
                    coordinates: [17.64990968672185, 120.45580770994214],
                    details: {
                        history: "This traditional pottery-making site has been a major industry in Santo Domingo since the Spanish period. Local artisans continue the centuries-old craft of making burnay (earthenware jars) using the same techniques passed down through generations.",
                        bestTime: "Morning to afternoon",
                        activities: ["Pottery demonstrations", "Cultural experience", "Souvenir shopping"],
                        tips: ["Try making your own jar", "Purchase authentic burnay jars", "Good for cultural immersion"]
                    }
                },
                // {
                //     name: "Suso Beach",
                //     description: "Beach with fine gray sand and calm waters",
                //     image: "img/suso-beach.jpg",
                //     coordinates: [17.6280, 120.4050],
                //     details: {
                //         history: "Known for its fine gray sand and calm waters, Suso Beach has been a favorite among locals and tourists. In the past, it was used as a docking site for fishermen and traders.",
                //         bestTime: "Early morning or late afternoon",
                //         activities: ["Swimming", "Beach relaxation", "Sunset viewing"],
                //         tips: ["Bring beach essentials", "Limited facilities available", "Great for peaceful getaway"]
                //     }
                // },
                {
                    name: "•	Santo Domingo Church (St. Dominic of Guzman Parish) ",
                    description: "St. Dominic of Guzman Parish, built in the 18th century",
                    image: "img/Santo Domingo/santo-domingo-church.jpg",
                    coordinates: [17.637879, 120.410441],
                    details: {
                        history: "Built in the 18th century, this church is an important religious landmark in the town. It has survived natural calamities and continues to be a place of worship.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Prayer", "Historical exploration"],
                        tips: ["Check mass schedule", "Respectful attire required", "Appreciate the colonial architecture"]
                    }
                }
            ]
        },
        {
            name: "San Vicente",
            coordinates: [17.5940019, 120.3741155],
            description: "Town known for its pottery tradition and religious sites",
            image: "img/San Vicente/san-vicente-town.jpg",
            attractions: [
                {
                    name: "San Vicente Pottery Industry",
                    description: "Traditional pottery making center using local clay",
                    image: "img/San Vicente/san-vicente-pottery.jpg",
                    coordinates: [17.63478415061726, 120.37045308324952],
                    details: {
                        history: "This town is known for its rich tradition of pottery-making, which dates back to the Spanish period. Artisans use locally sourced clay to create pots, jars, and decorative items.",
                        bestTime: "Morning to afternoon",
                        activities: ["Pottery demonstrations", "Cultural experience", "Souvenir shopping"],
                        tips: ["Watch artisans at work", "Purchase authentic pottery", "Learn about traditional techniques"]
                    }
                },
                {
                    name: "San Vicente Church (St. Vincent Ferrer Parish",
                    description: "St. Vincent Ferrer Parish, an 18th-century Spanish colonial church",
                    image: "img/San Vicente/san-vicente-church.jpg",
                    coordinates: [17.594589675983492, 120.37470847966374],
                    details: {
                        history: "Built in the 18th century, this church is dedicated to St. Vincent Ferrer. It was a center of Catholic faith during the Spanish era and remains a significant religious site today.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Prayer", "Historical exploration"],
                        tips: ["Check mass schedule", "Respectful attire required", "Appreciate the colonial architecture"]
                    }
                },
                // {
                //     name: "San Vicente Dam",
                //     description: "Dam constructed to provide irrigation to farmlands",
                //     image: "img/san-vicente-dam.jpg",
                //     coordinates: [17.5520, 120.4320],
                //     details: {
                //         history: "This dam was constructed to provide irrigation to farmlands in the town. It has supported agriculture in the area for decades, helping farmers cultivate rice and other crops.",
                //         bestTime: "Early morning or late afternoon",
                //         activities: ["Sightseeing", "Nature walks", "Photography"],
                //         tips: ["Visit during dry season", "Bring water and snacks", "Good for peaceful relaxation"]
                //     }
                // }
            ]
        }, {
            name: "Caoayan",
            coordinates: [17.54624, 120.38252],
            description: "A small coastal town near Vigan known for its church, black sand beach, and hidden garden",
            image: "img/Caoayan/caoayan-town.jpg",
            attractions: [
                {
                    name: "Caoayan Church (Our Lady of Hope Parish)",
                    description: "St. Paul the Apostle Parish, a historic Spanish colonial church",
                    image: "img/Caoayan/caoayan-church.jpg",
                    coordinates: [17.546702109437444, 120.38318886246819],
                    details: {
                        history: "This church has stood since the Spanish period and continues to be a place of worship for the local community. It has undergone renovations but still retains its colonial architectural features.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Prayer", "Historical exploration"],
                        tips: ["Check mass schedule", "Respectful attire recommended", "Take time to appreciate the architectural details"]
                    }
                },
                {
                    name: "Caoayan Black Sand Beach",
                    description: "Beach known for its fine black volcanic sand with therapeutic benefits",
                    image: "img/Caoayan/caoayan-beach.jpg",
                    coordinates: [17.535168151453046, 120.36684927198957],
                    details: {
                        history: "This beach is known for its fine black volcanic sand, which is said to have therapeutic benefits. Historically, it was a landing area for fishermen and a route for early traders.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Beach walking", "Sunset viewing", "Photography"],
                        tips: ["Best during low tide", "Bring water and snacks", "Great for peaceful contemplation"]
                    }
                },
                // {
                //     name: "Hidden Garden",
                //     description: "Lush garden showcasing native plants and traditional Ilocano cuisine",
                //     image: "img/hidden-garden.jpg",
                //     coordinates: [17.5610, 120.3910],
                //     details: {
                //         history: "Originally a small private garden, this place has grown into a popular tourist spot showcasing native plants and traditional Ilocano cuisine. It started as a personal passion project before becoming a well-known attraction.",
                //         bestTime: "Morning to early afternoon",
                //         activities: ["Garden tour", "Plant appreciation", "Dining on local cuisine"],
                //         tips: ["Try their native dishes", "Purchase local plants", "Visit on weekdays to avoid crowds"]
                //     }
                // }
            ]
        },
        {
            name: "Santa Catalina",
            coordinates: [17.58852, 120.36278],
            description: "A coastal town known for its beach, historic church and mangrove forest",
            image: "img/Santa Catalina/santa-catalina-town.jpg",
            attractions: [
                {
                    name: "Santa Catalina Beach",
                    description: "Serene coastal area that has been a source of livelihood for local fishermen",
                    image: "img/Santa Catalina/santa-catalina-beach.jpg",
                    coordinates: [17.59348984232378, 120.34750793787143],
                    details: {
                        history: "This serene coastal area has long been a source of livelihood for local fishermen. During the Spanish period, it was used as a trading point for goods such as salt and dried fish.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Beach walking", "Fishing village exploration", "Sunset watching"],
                        tips: ["Visit during morning to see fishermen return with catch", "Bring camera for sunset photos", "Try local seafood"]
                    }
                },
                {
                    name: "Santa Catalina Church",
                    description: "St. Catherine of Alexandria Parish, a significant Spanish-era religious site",
                    image: "img/Santa Catalina/santa-catalina-church.jpg",
                    coordinates: [17.589220767005006, 120.36274174962455],
                    details: {
                        history: "This church was built during the Spanish era and has remained a significant religious site. It has been renovated over the years but still holds historical value.",
                        bestTime: "Morning to afternoon",
                        activities: ["Church visit", "Historical exploration", "Religious appreciation"],
                        tips: ["Check mass schedule", "Dress respectfully", "Take time to appreciate the architecture"]
                    }
                },
                // {
                //     name: "Mangrove Forest Park",
                //     description: "Eco-tourism site protecting coastal environment and supporting marine life",
                //     image: "img/mangrove-forest.jpg",
                //     coordinates: [17.5440, 120.3820],
                //     details: {
                //         history: "This eco-tourism site helps protect the coastal environment and supports local marine life. In the past, mangroves served as natural barriers against storms and provided shelter for fish and other sea creatures.",
                //         bestTime: "Morning to mid-afternoon",
                //         activities: ["Nature walks on wooden pathways", "Birdwatching", "Environmental education"],
                //         tips: ["Bring mosquito repellent", "Wear comfortable walking shoes", "Join guided tours to learn about mangrove conservation"]
                //     }
                // }
            ]
        },
        {
            name: "San Ildefonso",
            coordinates: [17.6249757, 120.3931252],
            description: "Rural town with religious heritage and natural attractions",
            image: "img/San Ildefonso/san-ildefonso-town.jpg",
            attractions: [
                {
                    name: "Ildefonso de Toledo Parish Church ",
                    description: "St. Ildephonsus Parish church with colonial-style architecture",
                    image: "img/San Ildefonso/san-ildefonso-church.jpg",
                    coordinates: [17.623859934961008, 120.3948873876043],
                    details: {
                        history: "Built during the Spanish era, this church has been a central place of worship for the town's residents. It features colonial-style architecture and has withstood several natural disasters.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Prayer", "Historical appreciation"],
                        tips: ["Check mass schedule", "Respectful attire required", "Take time to appreciate the interior details"]
                    }
                },
                {
                    name: "Sunflower Farm",
                    description: "Vibrant farm filled with blooming sunflowers and scenic views",
                    image: "img/San Ildefonso/sunflower-farm.jpg",
                    coordinates: [17.621100559601594, 120.40430567966456],
                    details: {
                        history: "The Sunflower Farm in Narvacan has grown in popularity for its seasonal blooms that attract both tourists and locals. Initially planted as an experimental agricultural site, it has become a local attraction known for its aesthetic appeal and Instagram-worthy landscape.",
                        bestTime: "Morning to early afternoon (during bloom season)",
                        activities: ["Flower viewing", "Photography", "Nature walks"],
                        tips: ["Visit during peak blooming months (typically March to May)", "Bring a camera or phone for photos", "Wear a hat and sunscreen"]
                    }
                },
                {
                    name: "San Ildefonso Parish Church",
                    description: "A historic church known for its Spanish-era architecture and significance in the religious life of the local community.",
                    image: "img/San Ildefonso/san-ildefonso-parish-church.jpg",
                    coordinates: [17.62379271365317, 120.39463604367303],
                    details: {
                        history: "Built during the Spanish colonial period, the San Ildefonso Parish Church has stood as a spiritual and cultural landmark of the town. It has witnessed generations of faithful and remains a centerpiece of local heritage.",
                        bestTime: "Early morning or late afternoon, when the lighting highlights its architectural beauty.",
                        activities: [
                            "Church visits",
                            "Historical sightseeing",
                            "Photography"
                        ],
                        tips: [
                            "Dress modestly when visiting.",
                            "Check for Mass schedules if you wish to attend a service.",
                            "Bring a camera to capture the church's historic facade and interior."
                        ]
                    }
                }                
            ]
        },
        {
            name: "San Esteban",
            coordinates: [17.33160, 120.44466],
            description: "Coastal town known for its historic church, waterfall, and Spanish watchtower",
            image: "img/San Esteban/san-esteban-town.jpg",
            attractions: [
                {
                    name: "San Esteban Church (St. Stephen Protomartyr Parish) ",
                    description: "St. Stephen Protomartyr Parish, built in the 17th century using coral stones and bricks",
                    image: "img/San Esteban/san-esteban-church.jpg",
                    coordinates: [17.330112, 120.444953],
                    details: {
                        history: "This historic church was built in the 17th century using coral stones and bricks. It has been a center of faith and community gatherings for centuries.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Historical exploration", "Architecture appreciation"],
                        tips: ["Check mass schedule", "Observe the unique coral stone construction", "Visit nearby plaza after"]
                    }
                },
                {
                    name: "Apatot Fishport",
                    description: "A key community landing center supporting local fishing livelihoods in San Esteban",
                    image: "img/San Esteban/apatot-fishport.jpg",
                    coordinates: [17.317534629063324, 120.42833134154793],
                    details: {
                        history: "The Apatot Fishport is part of the Community Fish Landing Center (CFLC) Program, designed to reduce poverty in coastal communities through improved fishery infrastructure, sustainable livelihood support, and inclusive economic growth. It has become an essential hub for local fishers in San Esteban.",
                        bestTime: "Early morning (when fishers return from sea)",
                        activities: ["Buying fresh seafood", "Observing fish landings", "Photography"],
                        tips: ["Arrive early for the freshest catch", "Support local vendors", "Bring a cooler if purchasing seafood"]
                    }
                },
                {
                    name: "Bateria Watchtower",
                    description: "Historic Spanish-era watchtower built to defend the coast from pirates",
                    image: "img/San Esteban/san-esteban-watchtower.jpg",
                    coordinates: [17.339586816199905, 120.43943688760613],
                    details: {
                        history: "The Bateria Watchtower was constructed during the Spanish colonial era as part of a coastal defense system. Positioned strategically to overlook the sea, it provided early warnings to the town of San Esteban against incoming pirate attacks.",
                        bestTime: "Morning to sunset",
                        activities: ["Historical sightseeing", "Coastal photography", "Cultural learning"],
                        tips: ["Visit during sunset for dramatic lighting", "Pair with a nearby beach walk", "Great spot for panoramic views of the coastline"]
                    }
                }                
            ]
        },
        {
            name: "Santiago",
            coordinates: [ 17.2940877, 120.4453175],
            description: "Coastal town known for its beautiful beaches and historical church",
            image: "img/Santiago/santiago-town.png",
            attractions: [
                {
                    name: "Sabangan Beach",
                    description: "Traditional fishing ground with scenic coastal views",
                    image: "img/Santiago/sabangan-beach.jpg",
                    coordinates: [17.287808298095012, 120.4351353673551],
                    details: {
                        history: "This beach has been a fishing ground for locals since ancient times. During the Spanish period, it also served as a landing area for boats carrying goods.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Swimming", "Beach walking", "Watching local fishing activities"],
                        tips: ["Visit early morning to see fishermen at work", "Bring own supplies", "Great spot for authentic coastal experience"]
                    }
                },
                {
                    name: "Santiago Cove",
                    description: "Fine white sand beach often called the 'Boracay of Ilocos Sur'",
                    image: "img/Santiago/santiago-cove.jpg",
                    coordinates: [17.2896170451313, 120.43287232194857],
                    details: {
                        history: "Often called the \"Boracay of Ilocos Sur\" due to its fine white sand, this cove has been a favorite among tourists. Historically, it was a rest stop for travelers and merchants along the coast.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Swimming", "Sunbathing", "Boating"],
                        tips: ["Weekdays are less crowded", "Bring beach essentials", "Great for family outings"]
                    }
                },
                {
                    name: "Santiago Church (St. James the Greater Parish) ",
                    description: "St. James the Greater Parish, a centuries-old Spanish colonial church",
                    image: "img/Santiago/santiago-church.jpg",
                    coordinates: [17.293539851974792, 120.44576801598961],
                    details: {
                        history: "This centuries-old church stands as a symbol of faith in the town. Built during Spanish rule, it features classic colonial architecture.",
                        bestTime: "Morning to late afternoon",
                        activities: ["Church visit", "Historical exploration", "Architecture appreciation"],
                        tips: ["Check mass schedule", "Respectful attire required", "Take time to observe the historic details"]
                    }
                }
            ]
        },
        {
            name: "Alilem",
            coordinates: [16.8859992, 120.5306897],
            description: "Mountain town rich in wartime history and scenic landscapes",
            image: "img/Alilem/alilem-town.jpg",
            attractions: [
                {
                    name: "Bessang Pass Natural Monument",
                    description: "Historical battleground turned national shrine from World War II",
                    image: "img/Alilem/bessang-pass.jpg",
                    coordinates: [16.960754, 120.657971],
                    details: {
                        history: "This site marks the battle between Filipino guerrillas and Japanese forces during World War II. It commemorates the bravery of Filipino soldiers in reclaiming freedom.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Historical reflection", "Hiking", "Photography"],
                        tips: ["Wear hiking shoes", "Bring water and snacks", "Read the monument plaques for context"]
                    }
                },
                {
                    name: "Alilem Viewpoint",
                    description: "Elevated spot offering panoramic views of the town and mountains",
                    image: "img/Alilem/alilem-viewport.jpg",
                    coordinates: [16.901818, 120.516125],
                    details: {
                        history: "This viewpoint was used historically to observe incoming travelers and as a lookout during conflicts. Now, it is a peaceful spot for sightseeing.",
                        bestTime: "Late afternoon for sunset",
                        activities: ["Sightseeing", "Photography", "Picnicking"],
                        tips: ["Best during clear weather", "Bring binoculars for distant views", "Quiet spot for reflection"]
                    }
                },
                {
                    name: "Alilem (Amburayan River)",
                    description: "Lifeline of Alilem, vital for transportation and agriculture",
                    image: "img/Alilem/amburayan-river.jpg",
                    coordinates: [16.903182, 120.516576],
                    details: {
                        history: "This river was used to transport goods during the Spanish era and continues to support fishing and farming in the community.",
                        bestTime: "Morning",
                        activities: ["Fishing", "Nature walks", "Boating"],
                        tips: ["Bring mosquito repellent", "Respect local fishing areas", "Join a boat tour if available"]
                    }
                }
            ]
        },
        {
            name: "Banayoyo",
            coordinates: [17.2362842, 120.4797383],
            description: "A town known for its legendary waterfall and agricultural heritage",
            image: "img/Banayoyo/banayoyo-town.jpg",
            attractions: [
                {
                    name: "Pitik Site",
                    description: "Cultural site associated with local legends and traditional gatherings",
                    image: "img/Banayoyo/pitik-site.png",
                    coordinates: [17.247034069165053, 120.50369630927952],
                    details: {
                        history: "The Pitik Site is rooted in local folklore and has been a place of traditional gatherings and community rituals. It is believed to hold spiritual significance among the early settlers of the area, particularly tied to stories of Angalo, the legendary Ilocano giant.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Cultural appreciation", "Storytelling sessions", "Photography"],
                        tip: ["Ask locals about the legends tied to the site", "Wear comfortable shoes for walking", "Bring water and sun protection"]
                    }
                },
                {
                    name: "Namnama Resort",
                    description: "Peaceful resort destination offering scenic views and a relaxing atmosphere",
                    image: "img/Banayoyo/namnama-resort.jpg",
                    coordinates: [17.24439921853903, 120.4996348928782],
                    details: {
                        history: "Namnama Resort has become a well-known local retreat for families and travelers seeking rest and relaxation. Built to highlight the natural beauty of the surrounding landscape, it reflects the area's hospitality and connection to nature.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Swimming", "Family picnics", "Relaxation"],
                        tips: ["Bring swimwear and towels", "Ideal for weekend getaways", "Check for reservations during peak season"]
                    }
                },
                {
                    name: "Banayoyo Church (Our Lady of Lourdes Parish)",
                    description: "Historical Spanish-era church",
                    image: "img/Banayoyo/banayoyo-church.jpg",
                    coordinates: [17.23507350699874, 120.47856133786279],
                    details: {
                        "history": "Built during the Spanish colonial period, this church stands as a testament to Banayoyo’s enduring faith and heritage. Its architecture reflects colonial design with touches of local craftsmanship, making it a cultural and religious landmark in the town.",
                        "bestTime": "Morning",
                        "activities": ["Religious visit", "Historical exploration"],
                        "tips": ["Check mass schedule", "Dress modestly", "Take time to explore interior and exterior features"]
                    }
                }
                
            ]
        },
        {
            name: "Burgos",
            coordinates: [17.3335331, 120.4947775],
            description: "Town with strong historical ties to Padre Jose Burgos and scenic river landscapes",
            image: "img/Burgos/burgos-town.jpg",
            attractions: [
                {
                    name: "Simminublan Falls",
                    description: "A serene waterfall nestled in the hills of Santa Maria, offering a tranquil escape into nature",
                    image: "img/Burgos/siminublan-falls.jpg",
                    coordinates: [17.30987087324074, 120.5279531855355],
                    details: {
                        history: "Siminublan Falls has long served as a freshwater source for nearby communities and was once used for bathing and washing by early settlers. It remains a hidden gem for nature lovers and those seeking quiet solitude.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Swimming", "Nature walks", "Picnicking", "Photography"],
                        tips: ["Wear trekking shoes", "Bring drinking water and snacks", "Be cautious during the rainy season due to slippery trails"]
                    }
                },
                {
                    name: "Arsadanan Falls",
                    description: "A hidden waterfall surrounded by lush forest in Santa Maria, ideal for nature lovers",
                    image: "img/Burgos/arsadanan-falls.jpg",
                    coordinates: [17.30800558262639, 120.52536391792319],
                    details: {
                        history: "Arsadanan Falls has been a refreshing retreat for locals for generations. Tucked away in a quiet part of Santa Maria, it once served as a source of clean water and a bathing area for the early settlers.",
                        bestTime: "Early morning to early afternoon",
                        activities: ["Swimming", "Trekking", "Photography", "Picnicking"],
                        tips: ["Wear sturdy shoes for the hike", "Bring your own food and water", "Best visited during dry months for safer paths"]
                    }
                },
                {
                    name: "Burgos (Most Holy Name of Jesus Parish Church)",
                    description: "Historic church in Burgos known for its enduring Spanish-era architecture and spiritual significance",
                    image: "img/Burgos/burgos-church.jpg",
                    coordinates: [17.314849191980933, 120.51009033208605],
                    details: {
                        history: "Also known as the Most Holy Name of Jesus Parish Church, this Spanish-era church has stood the test of time through natural disasters and remains a vital place of worship in Burgos. Its architecture and resilience reflect the strong Catholic roots of the community.",
                        bestTime: "Morning",
                        activities: ["Mass attendance", "Historical appreciation", "Architecture viewing"],
                        tips: ["Attend a mass if possible", "Dress modestly", "Take time to explore the church's facade and interior craftsmanship"]
                    }
                }                
            ]
        },
        {
            name: "Galimuyod",
            coordinates: [17.1831280, 120.4692241],
            description: "A quiet inland town featuring natural falls and panoramic views",
            image: "img/Galimuyod/galimuyod-town.jpg",
            attractions: [
                    {
                        name: "Assemblies of the First Born Church (CPCT Church)",
                        description: "A local place of worship known for its strong community spirit and peaceful atmosphere.",
                        image: "img/Galimuyod/galimuyod-cpct-church.jpg",
                        coordinates: [17.187373436149443, 120.4827821840853],
                        details: {
                            history: "The Assemblies of the First Born Church, also known as CPCT Church, has served the community of Galimuyod for many years, fostering faith and unity among locals.",
                            bestTime: "Sundays and during special church gatherings or events.",
                            activities: [
                                "Worship services",
                                "Fellowship gatherings",
                                "Community outreach",
                                "Prayer meetings"
                            ],
                            tips: [
                                "Dress modestly and respectfully when attending services.",
                                "Visitors are welcome—feel free to join Sunday services.",
                                "Engage with the local community to learn more about the church’s mission and activities."
                            ]
                        }
                    }
                    ,
                
                // {
                //     name: "Galimuyod View Deck",
                //     description: "A scenic viewpoint overlooking the town and mountains",
                //     image: "img/galimuyod-viewdeck.jpg",
                //     coordinates: [17.1680, 120.5350],
                //     details: {
                //         history: "Historically used for defense and surveillance, this view deck is now a peaceful lookout point.",
                //         bestTime: "Sunrise or sunset",
                //         activities: ["Photography", "Sightseeing"],
                //         tips: ["Go on a clear day", "Bring a camera", "Enjoy the quiet atmosphere"]
                //     }
                // },
                {
                    name: "The Sacred Heart of Jesus Parish Church ",
                    description: "Historical church with Spanish colonial influence",
                    image: "img/Galimuyod/galimuyod-church.jpg",
                    coordinates: [17.17805131205679, 120.49323744834092],
                    details: {
                        history: "Built in the Spanish period, this church has preserved its classic design through years of renovation.",
                        bestTime: "Morning",
                        activities: ["Religious visit", "Cultural learning"],
                        tips: ["Respect local customs", "Observe the altar and relics", "Check for community events"]
                    }
                }
            ]
        },
        {
            name: "Gregorio del Pilar",
            coordinates: [17.1460297, 120.6118325],
            description: "Mountainous town known for heroism and panoramic landscapes",
            image: "img/Gregorio del Pilar/gregorio-del-pilar-town.jpg",
            attractions: [
                {
                    name: "Tirad Pass Shrine",
                    description: "Historic site of the Battle of Tirad Pass",
                    image: "img/Gregorio del Pilar/tirad-pass-shrine.jpg",
                    coordinates: [17.149975335690172, 120.63332838479107],
                    details: {
                        history: "Site of the heroic stand of General Gregorio del Pilar during the Philippine-American War. Now a national shrine commemorating Filipino bravery.",
                        bestTime: "Morning",
                        activities: ["Historical exploration", "Hiking", "Patriotic reflection"],
                        tips: ["Wear proper hiking gear", "Bring water", "Respect the memorial grounds"]
                    }
                },
                {
                    name: "Kankantuban Eco Park",
                    description: "A scenic eco-tourism destination in Gregorio del Pilar, surrounded by lush greenery and mountain views",
                    image: "img/Gregorio del Pilar/kankantuban-eco-park.jpg",
                    coordinates: [17.169291003627595, 120.64568316882708],
                    details: {
                        history: "Kankantuban Eco Park was developed to promote environmental awareness and provide a peaceful nature retreat for locals and visitors alike. Located in Gregorio del Pilar, it highlights the natural beauty of the upland region with walking trails and rest areas.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Nature walks", "Picnicking", "Photography", "Environmental learning"],
                        tips: ["Wear comfortable shoes", "Bring your own food and water", "Ideal for family outings and group visits"]
                    }
                },                
                {
                    name: "Tapawan View Deck",
                    description: "Panoramic viewpoint in Gregorio del Pilar offering stunning mountain vistas.",
                    image: "img/Gregorio del Pilar/gdp-viewdeck.jpg",
                    coordinates: [17.19340098167573, 120.59435559234225],
                    details: {
                      history: "Tapawan View Deck was once a strategic observation point used by Filipino troops during battles in the area, especially near Tirad Pass. It now serves as a breathtaking viewpoint, cherished by both tourists and locals.",
                      bestTime: "Sunset",
                      activities: ["Sightseeing", "Photography", "Hiking"],
                      tips: [
                        "Best visited during golden hour.",
                        "Bring a camera or drone for sweeping shots.",
                        "Wear comfortable shoes for walking."
                      ]
                    }
                  }
                               
            ]
        },
        {
            name: "Lidlidda",
            coordinates: [ 17.2517706, 120.5210619],
            description: "Remote town with waterfalls and traditional rice terraces",
            image: "img/Lidlidda/lidlidda-town.jpg",
            attractions: [
                {
                    name: "Kinpiyat Falls",
                    description: "Secluded waterfall surrounded by forest in Lidlidda, perfect for nature lovers",
                    image: "img/Lidlidda/kinpiyat-falls.jpg",
                    coordinates: [17.243143772961357, 120.56758016486448],
                    details: {
                        history: "Kinpiyat Falls has long served as a freshwater source for the local community. Hidden within the forested areas of Lidlidda, it offers a peaceful retreat for those seeking a break from urban life.",
                        bestTime: "Morning",
                        activities: ["Swimming", "Nature appreciation", "Hiking"],
                        tips: ["Wear proper shoes", "Bring waterproof bags and extra clothes", "Ideal for a quiet retreat away from crowds"]
                    }
                },
                {
                    name: "Peyegpeg Falls",
                    description: "A peaceful waterfall tucked away in the forested areas of Lidlidda",
                    image: "img/Lidlidda/peyegpeg-falls.jpg",
                    coordinates: [17.26807272287239, 120.56775836175643],
                    details: {
                        history: "Peyegpeg Falls has long been a source of water and a place of quiet refuge for locals. Its cool, cascading waters and surrounding greenery make it a perfect destination for hikers and nature lovers.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Swimming", "Photography", "Hiking", "Picnicking"],
                        tips: ["Wear proper hiking footwear", "Bring water and snacks", "Best visited during the dry season for safer trails"]
                    }
                },
                {
                    name: "The Our Lady of Fatima Parish Church, ",
                    description: "Historic Spanish-era church with community importance",
                    image: "img/Lidlidda/lidlidda-church.jpg",
                    coordinates: [17.27171916002387, 120.52136768873395],
                    details: {
                        history: "A classic colonial church that has been a religious center for centuries. Known for its traditional architectural design.",
                        bestTime: "Morning",
                        activities: ["Religious visit", "Cultural appreciation"],
                        tips: ["Check for events", "Dress appropriately", "Explore nearby plaza"]
                    }
                }
            ]
        },
        {
            name: "Quirino",
            coordinates: [17.13627, 120.67649],
            description: "Mountain town surrounded by natural beauty and forest parks",
            image: "img/Quirino/quirino-town.jpg",
            attractions: [
                {
                    name: "Kayapa Falls",
                    description: "A hidden waterfall tucked in the forests of Quirino, offering a refreshing natural escape",
                    image: "img/Quirino/kayapa-falls.jpg",
                    coordinates: [17.122814528716006, 120.65462534179716],
                    details: {
                        history: "Kayapa Falls has served as a freshwater source for the nearby communities and is now known for its serene environment and untouched beauty. Locals have long regarded it as a sacred and vital part of their land.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Swimming", "Trekking", "Nature photography"],
                        tips: ["Wear proper footwear for slippery paths", "Bring food and water", "Best visited during dry season for safer access"]
                    }
                },
                {
                    name: "Tirad View Academy",
                    description: "Educational institution in Gregorio del Pilar with a scenic view of the mountains",
                    image: "img/Quirino/tirad-view-academy.jpg",
                    coordinates: [17.15250513730804, 120.66852694610816],
                    details: {
                        history: "Tirad View Academy serves the local youth of Gregorio del Pilar, providing basic education in a rural and mountainous setting. Its location offers stunning views of the surrounding Cordillera ranges, making it both an institution of learning and a spot of natural beauty.",
                        bestTime: "Morning to early afternoon",
                        activities: ["Educational visit", "Photography", "Community interaction"],
                        tips: ["Respect school hours and students", "Great spot for scenic views", "Bring snacks and water if visiting for sightseeing"]
                    }
                },
                {
                    name: "Namitpit View Deck",
                    description: "Scenic mountain viewpoint in Quirino offering breathtaking views of the highlands",
                    image: "img/Quirino/namitpit-viewdeck.jpg",
                    coordinates: [17.100123997635702, 120.69621604809724],
                    details: {
                        history: "Namitpit View Deck is one of Quirino’s most scenic spots, offering a panoramic view of the Cordillera mountain range. It has served as a quiet lookout for locals and a rest stop for travelers exploring the uplands.",
                        bestTime: "Morning",
                        activities: ["Sightseeing", "Photography", "Relaxation"],
                        tips: ["Wear light layers for changing mountain weather", "Bring a camera for wide scenic shots", "Ideal for early morning visits to catch the sunrise"]
                    }
                }
                
            ]
        },
        {
            name: "Sugpon",
            coordinates: [ 16.8444574, 120.5167180],
            description: "Highland town of legends, rivers, and rugged adventure",
            image: "img/Sugpon/sugpon-town.jpg",
            attractions: [
                {
                    name: "Sugpon Bridge",
                    description: "A vital bridge connecting remote parts of Sugpon and offering scenic mountain and river views",
                    image: "img/Sugpon/sugpon-bridge.jpg",
                    coordinates: [16.84450981127715, 120.51005329319594],
                    details: {
                        history: "Sugpon Bridge plays a crucial role in linking distant barangays in the mountainous town of Sugpon. It has enhanced transportation, supported trade, and offered safe passage across the rugged terrain for locals and travelers alike.",
                        bestTime: "Morning",
                        activities: ["Sightseeing", "Photography", "Local travel"],
                        tips: ["Bring a camera for panoramic views", "Be cautious if crossing on foot", "Combine with a visit to Balay Anito Falls nearby"]
                    }
                },                
                {
                    name: "Pacaoan Rice Terraces",
                    description: "Centuries-old rice terraces showcasing traditional farming methods in Sugpon",
                    image: "img/Sugpon/pacaoan-rice-terraces.jpg",
                    coordinates: [16.799362764489796, 120.57939866501916],
                    details: {
                        history: "The Pacaoan Rice Terraces reflect the ingenuity and resilience of the local farming community. These terraces have been cultivated for generations using indigenous methods suited to the mountainous terrain, providing sustenance and cultural identity to the people of Sugpon.",
                        bestTime: "Sunrise or during planting/harvest season",
                        activities: ["Photography", "Cultural appreciation", "Nature walks"],
                        tips: ["Respect crops and farmers' space", "Wear trekking shoes", "Visit with a local guide to learn about traditional farming"]
                    }
                },
                {
                    name: "GregGy",
                    description: "Vital river connecting mountain communities in Sugpon",
                    image: "img/Sugpon/amburayan-river-sugpon.jpg",
                    coordinates: [16.806230522996646, 120.54254419294499],
                    details: {
                        history: "This section of the Amburayan River has long served as a lifeline for Sugpon, enabling trade, transportation, and irrigation since the Spanish period. It remains essential to local agriculture and community life.",
                        bestTime: "Early morning or late afternoon",
                        activities: ["Fishing", "River walks", "Photography"],
                        tips: ["Avoid visiting during high tide or heavy rain", "Bring insect repellent", "Respect local practices along the riverbanks"]
                    }
                }
            ]
        }, {
              name: "Nagbukel",
              coordinates: [17.4449, 120.5262],
              description: "A scenic town dominated by the iconic Mount Nagbukel, where heritage, nature, and local culture blend into a haven for hikers and history lovers.",
              image: "img/Nagbukel/nagbukel.jpg",
                attractions: [
                    {
                        name: "BURAYOK FALLS",
                        description: "A refreshing natural cascade located near the town center, Burayok Falls is a local favorite for cooling off and relaxing amidst nature.",
                        image: "img/Nagbukel/burayok-falls.jpg",
                        coordinates: [17.458350489314416, 120.56786900112608],
                        details: {
                            history: "Burayok Falls has long served as a natural retreat for locals and visitors alike. Nestled amidst greenery, the falls provide a peaceful break from the heat and a chance to enjoy the clean mountain waters.",
                            bestTime: "Morning or late afternoon for cooler weather and fewer crowds.",
                            activities: ["Swimming", "Nature walks", "Picnicking"],
                            tips: [
                                "Bring extra clothes and towels for swimming.",
                                "Be cautious on slippery rocks.",
                                "Visit on weekdays for a quieter experience."
                            ]
                        }
                    },
                {
                  name: "St. Joseph Parish Church",
                  description: "Located in Poblacion West, Nagbukel, this historic Roman Catholic parish has been a cornerstone of the local community since its establishment on June 19, 1935.",
                  image: "img/Nagbukel/st-joseph-church.jpg",
                  coordinates: [17.446598863397895, 120.52509752870023],
                  details: {
                    history: "Established on June 19, 1935, St. Joseph Parish Church has been an important religious site under the Metropolitan Archdiocese of Nueva Segovia.",
                    bestTime: "Mass services on Sundays and religious holidays.",
                    activities: ["Religious services", "Cultural heritage tours"],
                    tips: [
                      "Check for special mass schedules.",
                      "Ideal for photography, especially during festivals."
                    ]
                  }
                },
                {
                  name: "Nagbukel View Deck",
                  description: "This viewpoint offers stunning panoramic views of the town's rolling hills and verdant fields, a must-visit for nature lovers and photographers.",
                  image: "img/Nagbukel/nagbukel-view-deck.jpg",
                  coordinates: [17.446723595616767, 120.53010349894329],
                  details: {
                    history: "The view deck provides panoramic views of Nagbukel's scenic landscape, making it an ideal spot for sightseeing.",
                    bestTime: "Sunrise or sunset for the best lighting.",
                activities: ["Sightseeing", "Photography"],
                    tips: [
                      "Visit during sunrise or sunset for the best lighting.",
                      "Bring a camera for landscape photography."
                    ]
                }
            }
        ]
    }, {
              name: "San Emilio",
              coordinates: [17.4449, 120.5262],
              description: "A peaceful municipality in Ilocos Sur known for its waterfalls, lush forests, and rich spiritual heritage.",
              image: "img/San Emilio/san-emilio-town.jpg",
              attractions: [
                {
                  name: "Payegpeg Falls",
                  description: "A serene and lesser-known waterfall located in the remote areas of San Emilio, surrounded by lush forests and natural beauty.",
                  image: "img/San Emilio/payegpeg-falls.jpg",
                  coordinates: [17.26854385716596, 120.56753895206114],
                  details: {
                    history: "Payegpeg Falls remains a tranquil and relatively untouched destination, cherished by locals and adventurous travelers seeking peace in nature.",
                    bestTime: "Morning for a quieter experience and better lighting for photos.",
                    activities: ["Swimming", "Relaxation", "Nature photography"],
                    tips: [
                      "Wear comfortable shoes for the hike.",
                      "Bring food and drinks for a picnic by the waterfall.",
                      "Travel with a local guide for easier access."
                    ]
                  }
                },
                {
                    name: "Ken Paryok Falls",
                    description: "A secluded waterfall nestled in the forests of San Emilio, Kamanggaan is known for its peaceful ambiance and natural beauty, perfect for a refreshing escape.",
                    image: "img/San Emilio/ken-paryok-falls.jpg",
                    coordinates: [17.216952102362203, 120.64465940741883],
                    details: {
                      history: "Kamanggaan has long provided water to nearby communities and is now appreciated for its scenic appeal and calm environment. It is a lesser-known but rewarding spot for adventurous travelers.",
                      bestTime: "During the dry season for easier access.",
                      activities: [
                        "Swimming",
                        "Photography",
                        "Relaxation"
                      ],
                      tips: [
                        "Wear non-slip shoes to navigate the rocks.",
                        "Bring snacks and water — there are no vendors nearby.",
                        "Best visited during the dry season."
                      ]
                    }                
                },
                {
                  name: "San Emilio Church (St. Emilius Parish)",
                  description: "A historic church that has been a place of worship since the Spanish era, it reflects the long history of Catholicism in the region.",
                  image: "img/San Emilio/san-emilio-church.jpg",
                  coordinates: [17.22407304150836, 120.6146237647892],
                  details: {
                    history: "San Emilio Church has survived various natural calamities and remains an important part of the community's spiritual life.",
                    bestTime: "During mass or local religious festivals.",
                    activities: ["Religious services", "Cultural heritage tours"],
                    tips: [
                      "Check the schedule for mass or religious festivals.",
                      "Great for historical and architectural photography."
                    ]
                }
            }
        ]
    }, {
              name: "Sigay",
              coordinates: [17.0425835, 120.5804799],
              description: "A peaceful mountain town known for its majestic waterfalls, scenic viewpoints, and strong community ties rooted in tradition and nature.",
              image: "img/Sigay/sigay-town.jpg",
              attractions: [
                {
                  name: "Aw-asen Falls",
                  description: "One of Sigay's hidden gems, Aw-asen Falls is a breathtaking waterfall that has been a vital water source for locals, now a favorite for nature lovers.",
                  image: "img/Sigay/aw-asen-falls.jpg",
                  coordinates: [17.015931205410375, 120.58155524114895],
                  details: {
                    history: "Aw-asen Falls is a vital water source for locals, and it now serves as a destination for adventure seekers and nature lovers.",
                    bestTime: "Morning to avoid crowds.",
                    activities: ["Swimming", "Hiking", "Photography"],
                    tips: [
                      "Wear comfortable hiking shoes.",
                      "Visit early for a quieter experience."
                    ]
                  }
                },
                {
                  name: "YOB-YOB FALLS",
                  description: "A hidden waterfall nestled in the mountains of Sigay, Yob-Yob Falls offers a serene escape surrounded by lush vegetation and cool waters.",
                  image: "img/Sigay/yob-yob-falls.jpg",
                  coordinates: [17.026327977544273, 120.58366187344419],
                  details: {
                    history: "Yob-Yob Falls has long been a secluded spot known only to locals. It has served as a peaceful retreat and a natural water source for nearby communities.",
                    bestTime: "Early morning or during the dry season for clearer trails.",
                    activities: ["Swimming", "Picnicking", "Nature walks"],
                    tips: [
                      "Wear sturdy footwear as the trail may be slippery.",
                      "Bring extra clothes if you plan to swim.",
                      "Consider visiting with a local guide for easier access."
                    ]
                  }
                },
                {
                  name: "Bessang Pass Natural Park",
                  description: "A historic mountain pass and protected area known for its World War II significance, scenic views, and rich biodiversity.",
                  image: "img/Sigay/bessang-pass.jpg",
                  coordinates: [16.996611554869936, 120.63126393605313],
                  details: {
                    history: "Bessang Pass was the site of a major battle between Filipino guerrillas and Japanese forces during World War II. It is now a natural park commemorating the bravery of Filipino soldiers, while also preserving its lush forests and wildlife.",
                    bestTime: "Early morning for misty mountain views or dry season for trekking.",
                    activities: ["Hiking", "Historical tours", "Photography", "Birdwatching"],
                    tips: [
                      "Bring water and snacks for the hike.",
                      "Wear sturdy shoes suitable for uneven terrain.",
                      "Visit the monument and learn about the site's wartime history."
                    ]
                }
            }
        ]
    }, 
    {
                name: "Tagudin",
                coordinates: [ 16.9345656, 120.4450170],
                description: "Coastal gateway town known for waterfalls and historic sundial",
                image: "img/Tagudin/tagudin-town.jpg",
                attractions: [
                    {
                        name: "One Ilocos Sur Cafe Tagudin ",
                        description: "A Elegant Cafe and one of the best cafe in Ilocos Sur",
                        image: "img/Tagudin/one-ilocosSur.jpg",
                        coordinates: [16.917717641760067, 120.4611198955269],
                        route: {
                            type: "LineString",
                            coordinates: [
                                [120.4450170, 16.9345656],  // City coordinates (longitude, latitude)
                                [120.4500000, 16.9300000],  // Note: GeoJSON uses [longitude, latitude]
                                [120.4550000, 16.9250000],
                                [120.4611198, 16.9177176]   // Cafe coordinates
                            ]
                        },
                        details: {
                            description:"a charming establishment located beside the Welcome Arc in Barangay Bio, Tagudin, Ilocos Sur. This café offers a cozy atmosphere where patrons can enjoy freshly brewed coffee and light refreshments. It's more than just a place to grab a cup of coffee; it's a community hub where conversations flow and connections are made.",
                            history: "Officially opened its branch beside the Welcome Arc in Barangay Bio on November 26, 2024. This expansion reflects the café's commitment to meeting the demands and expectations of its valued customers, offering convenient ways for coffee enthusiasts to enjoy their beverages.",
                            bestTime: "Morning and Night",
                            activities: ["Drints, Hangout with Loveones"],
                            tips: ["Try their house blend coffee", "Great spot for casual dates or catching up with friends"]
                        }
                    },
                    {
                        name: "Tagudin Sundial",
                        description: "One of the oldest sundials in the Philippines",
                        image: "img/Tagudin/tagudin-sundial.jpg",
                        coordinates: [16.9338368, 120.4449849],
                        route: {
                            type: "LineString",
                            coordinates: [
                                [120.4450170, 16.9345656],  // City coordinates
                                [120.4449849, 16.9338368]   // Sundial coordinates
                            ]
                        },
                        details: {
                            description: "One of the oldest sundials in the Philippines, built by Spanish missionaries in the 19th century. It was used to tell time before modern clocks were introduced. Today, it remains a historical landmark in the town.",
                            history: "Built in the 19th century by Spanish missionaries to tell time before modern clocks were introduced.",
                            bestTime: "Morning to midday (for best shadow casting)",
                            activities: ["Historical learning", "Photography"],
                            tips: ["Read about its mechanics", "Ideal for educational visits", "Combine with a town walk"]
                        }
                    },
                    {
                        name: "Bimmanga Boating and Picnic Park",
                        description: "Quiet Place that have a Simple and Beautiful park",
                        image: "img/Tagudin/paraoir-beach.jpg",
                        coordinates: [16.950593, 120.436233],
                        route: {
                            type: "LineString",
                            coordinates: [
                                [120.4450170, 16.9345656],  // City coordinates
                                [120.4420000, 16.9400000],
                                [120.4380000, 16.9450000],
                                [120.4362330, 16.9505930]   // Park coordinates
                            ]
                        },
                        details: {
                            description: "Located in Barangay Bimmanga, Tagudin, Ilocos Sur, is a serene destination ideal for nature lovers and families seeking a peaceful retreat. The park's main attraction is its tranquil creek, where visitors can enjoy leisurely boat rides under a natural canopy of trees. Picnic huts are available for rent, providing a comfortable spot to relax and enjoy the lush green surroundings. The park is open 24 hours and can be contacted at +63 955 098 5636.",
                            history: "A fishing hub for centuries, now a relaxing spot for tourists who love the sea breeze and local culture.",
                            bestTime: "Sunrise, Sunset",
                            activities: ["Beach walks", "Photography", "Swimming"],
                            tips: ["Bring your own food", "Avoid weekends for a quieter experience", "Good for family outings"]
                        }
                    }
                    
                ]
            }
        ]
    
    }
    
    
    // Function to sort data in ascending order
    function sortDataAscending() {
        // First sort cities alphabetically by name
        ilocosSurData.cities.sort((a, b) => a.name.localeCompare(b.name));
        
        // For each city, sort its attractions alphabetically by name
        ilocosSurData.cities.forEach(city => {
          if (city.attractions && city.attractions.length > 0) {
            city.attractions.sort((a, b) => a.name.localeCompare(b.name));
            
            // For each attraction, also sort activities and tips alphabetically
            city.attractions.forEach(attraction => {
              if (attraction.details) {
                if (attraction.details.activities && attraction.details.activities.length > 0) {
                  attraction.details.activities.sort();
                }
                
                if (attraction.details.tips && attraction.details.tips.length > 0) {
                  attraction.details.tips.sort();
                }
              }
            });
          }
        });
        
        return ilocosSurData;
      }
      
      // Initialize the application
      document.addEventListener('deviceready', onDeviceReady, false);
      
      let map;
      let markers = [];
      let routes = {};  // Store routes separately to toggle them
      let currentLocation = null;
      let searchModal = null;
      let locationModal = null;
      let mapTiles = null;
      
      function onDeviceReady() {
          // Sort data first
          sortDataAscending();
          
          // Initialize map
          initializeMap();
          
          // Initialize Bootstrap modals
          searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
          locationModal = new bootstrap.Modal(document.getElementById('locationModal'));
          
          // Populate city list
          populateCityList();
          
          // Load first city by default
          loadCity(ilocosSurData.cities[0]);
          
          // Initialize search
          initializeSearch();
          
          // Store data for offline use
          localStorage.setItem('ilocosSurData', JSON.stringify(ilocosSurData));
          
          // Add offline map save button
          addOfflineMapButton();
      }
      
      function initializeMap() {
          // Center the map on Ilocos Sur
          map = L.map('map').setView([17.5747, 120.3870], 10);
          
          // Check if we have cached tiles
          const cachedTiles = localStorage.getItem('cachedMapTiles');
          
          if (!navigator.onLine && cachedTiles) {
              // Use base64 encoded cached tiles as a fallback
              showOfflineNotification();
              useCachedTiles(cachedTiles);
          } else {
              // Use online tiles
              mapTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '© OpenStreetMap contributors',
                  maxZoom: 18
              }).addTo(map);
          }
      }
      
      function addOfflineMapButton() {
          // Create a custom control button
          const saveMapControl = L.Control.extend({
              options: {
                  position: 'topright'
              },
              
              onAdd: function() {
                  const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
                  container.innerHTML = '<a href="#" title="Save Map for Offline Use" style="font-weight: bold; display: flex; align-items: center; justify-content: center;">💾</a>';
                  
                  container.onclick = function() {
                      saveCurrentMapView();
                      return false;
                  };
                  
                  return container;
              }
          });
          
          map.addControl(new saveMapControl());
      }
      
      function saveCurrentMapView() {
          // Get current map bounds
          const bounds = map.getBounds();
          const zoom = map.getZoom();
          
          // Show loading notification
          showSavingNotification();
          
          // We'll use an off-screen canvas to capture the current map view
          const canvas = document.createElement('canvas');
          const width = map.getSize().x;
          const height = map.getSize().y;
          canvas.width = width;
          canvas.height = height;
          
          // Use leaflet-image library if available, otherwise notify the user
          if (typeof leafletImage !== 'undefined') {
              leafletImage(map, function(err, canvas) {
                  if (err) {
                      console.error("Error capturing map:", err);
                      alert("Failed to save map for offline use.");
                      hideSavingNotification();
                      return;
                  }
                  
                  // Save the image to localStorage
                  try {
                      const imageData = canvas.toDataURL('image/jpeg', 0.7);
                      localStorage.setItem('cachedMapTiles', imageData);
                      localStorage.setItem('cachedMapBounds', JSON.stringify({
                          north: bounds.getNorth(),
                          south: bounds.getSouth(),
                          east: bounds.getEast(),
                          west: bounds.getWest(),
                          zoom: zoom
                      }));
                      console.log("Map saved for offline use");
                      hideSavingNotification();
                      alert("Map saved for offline use!");
                  } catch (e) {
                      console.error("Error saving map:", e);
                      alert("Failed to save map due to storage limits. Try a smaller area.");
                      hideSavingNotification();
                  }
              });
          } else {
              // Fallback method - just save the current configuration
              localStorage.setItem('cachedMapBounds', JSON.stringify({
                  north: bounds.getNorth(),
                  south: bounds.getSouth(),
                  east: bounds.getEast(),
                  west: bounds.getWest(),
                  zoom: zoom
              }));
              hideSavingNotification();
              alert("Map area saved for offline use. Note: You'll need to be online once to load the map tiles.");
          }
      }
      
      function useCachedTiles(cachedTilesData) {
          // Create a custom overlay with the cached image
          try {
              const bounds = JSON.parse(localStorage.getItem('cachedMapBounds'));
              if (!bounds) {
                  // Fallback to online tiles if no bounds saved
                  mapTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                      attribution: '© OpenStreetMap contributors'
                  }).addTo(map);
                  return;
              }
              
              // Set map view to the saved area
              map.setView([
                  (bounds.north + bounds.south) / 2,
                  (bounds.east + bounds.west) / 2
              ], bounds.zoom || 10);
              
              // If we have actual tile data (base64)
              if (cachedTilesData && cachedTilesData.startsWith('data:image')) {
                  const imageOverlay = L.imageOverlay(
                      cachedTilesData,
                      [[bounds.south, bounds.west], [bounds.north, bounds.east]]
                  ).addTo(map);
              } else {
                  // Fallback to a placeholder message
                  L.popup()
                      .setLatLng(map.getCenter())
                      .setContent("<strong>Offline mode active</strong><br>Map tiles not available offline.<br>Your attractions data is still accessible.")
                      .openOn(map);
                  
                  // Add a semi-transparent overlay to indicate offline mode
                  L.rectangle(
                      [[bounds.south, bounds.west], [bounds.north, bounds.east]],
                      {color: "#ff7800", weight: 1, fillOpacity: 0.1, fillColor: "#ccc"}
                  ).addTo(map);
              }
          } catch (e) {
              console.error("Error loading cached map:", e);
              // Fallback to online tiles if error
              mapTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '© OpenStreetMap contributors'
              }).addTo(map);
          }
      }
      
      function populateCityList() {
          const cityList = document.querySelector('.city-list');
          cityList.innerHTML = '';
          
          ilocosSurData.cities.forEach(city => {
              const cityElement = document.createElement('div');
              cityElement.className = 'city-item';
              cityElement.innerHTML = `
                  <h5>${city.name}</h5>
                  <p class="mb-0">${city.description}</p>
              `;
              cityElement.addEventListener('click', () => {
                  loadCity(city);
                  document.querySelector('[data-bs-dismiss="offcanvas"]').click();
              });
              cityList.appendChild(cityElement);
          });
      }
      
      // Function to create a route between city and attraction
      function createRouteToAttraction(cityCoords, attractionCoords, routeId) {
          // Check if the attraction has predefined route waypoints
          const routePoints = [cityCoords, attractionCoords];
          
          // Create the polyline with styling
          const routeLine = L.polyline(routePoints, {
              color: '#3388ff',
              weight: 3,
              opacity: 0.7,
              dashArray: '10, 10',  // Creates a dashed line
              lineJoin: 'round'
          });
          
          // Store the route with its ID
          routes[routeId] = routeLine;
          
          return routeLine;
      }
      
      // Function to create a more detailed route with waypoints
      function createDetailedRoute(cityCoords, attractionCoords, waypoints = []) {
          // Combine all points to create a path
          const routePoints = [
              cityCoords,
              ...waypoints,
              attractionCoords
          ];
          
          // Create the polyline with styling
          const routeLine = L.polyline(routePoints, {
              color: '#3388ff',
              weight: 3,
              opacity: 0.7,
              dashArray: '5, 10',
              lineJoin: 'round'
          });
          
          return routeLine;
      }
      
      // Function to toggle route visibility
      function toggleRoute(cityName, attractionName) {
          const city = ilocosSurData.cities.find(c => c.name === cityName);
          const attraction = city.attractions.find(a => a.name === attractionName);
          
          const routeId = `${cityName}-${attractionName}`;
          
          if (routes[routeId] && map.hasLayer(routes[routeId])) {
              // Hide route if it's already shown
              map.removeLayer(routes[routeId]);
          } else {
              // Show route
              let routeLine;
              
              // Check if attraction has predefined waypoints
              if (attraction.routeFromCity && attraction.routeFromCity.path) {
                  // Use the predefined path
                  routeLine = createDetailedRoute(
                      city.coordinates, 
                      attraction.coordinates, 
                      attraction.routeFromCity.path.slice(1, -1) // Skip first and last points as they're the city and attraction
                  );
              } else {
                  // Create a direct route
                  routeLine = createRouteToAttraction(city.coordinates, attraction.coordinates, routeId);
              }
              
              // Add to map
              routeLine.addTo(map);
              routes[routeId] = routeLine;
              
              // Fit map to show the route
              const bounds = L.latLngBounds([city.coordinates, attraction.coordinates]);
              map.fitBounds(bounds, { padding: [50, 50] });
          }
      }
      
      function loadCity(city) {
          // Clear existing markers and routes
          markers.forEach(marker => marker.remove());
          markers = [];
          
          Object.values(routes).forEach(route => {
              if (map.hasLayer(route)) {
                  map.removeLayer(route);
              }
          });
          routes = {};
          
          // Center map on city
          map.setView(city.coordinates, 13);
          
          // Add city marker
          const cityMarker = L.marker(city.coordinates)
              .bindPopup(`
                  <div style="max-width: 200px;">
                      <b>${city.name}</b><br>
                      ${city.description}<br>
                      <img src="${city.image}" style="width: 100%; height: auto; margin-top: 5px; border-radius: 5px;">
                  </div>
              `)
              .addTo(map);
          markers.push(cityMarker);
          
          // Add markers for attractions
          city.attractions.forEach(attraction => {
              const marker = L.marker(attraction.coordinates)
                  .bindPopup(`
                      <div style="max-width: 200px;">
                          <b>${attraction.name}</b><br>
                          ${attraction.description}<br>
                          <img src="${attraction.image}" style="width: 100%; height: auto; margin-top: 5px; border-radius: 5px;"><br>
                          <button onclick="showLocationDetails('${city.name}', '${attraction.name}')" class="btn btn-sm btn-primary mt-2">View Details</button>
                          <button onclick="toggleRoute('${city.name}', '${attraction.name}')" class="btn btn-sm btn-secondary mt-2">Show/Hide Route</button>
                      </div>
                  `)
                  .addTo(map);
              markers.push(marker);
              
              // Create route but don't add to map yet
              const routeId = `${city.name}-${attraction.name}`;
              
              if (attraction.routeFromCity && attraction.routeFromCity.path) {
                  // If there are predefined waypoints
                  routes[routeId] = createDetailedRoute(
                      city.coordinates,
                      attraction.coordinates,
                      attraction.routeFromCity.path.slice(1, -1)
                  );
              } else {
                  // Simple direct route
                  routes[routeId] = createRouteToAttraction(
                      city.coordinates, 
                      attraction.coordinates,
                      routeId
                  );
              }
          });
          
          // Update attractions list
          updateAttractionsList(city);
      }
      
      function updateAttractionsList(city) {
          const attractionsList = document.querySelector('.attractions-list');
          attractionsList.innerHTML = '';
          
          city.attractions.forEach(attraction => {
              const card = document.createElement('div');
              card.className = 'attraction-card';
              card.innerHTML = `
                  <img src="${attraction.image}" alt="${attraction.name}">
                  <h4>${attraction.name}</h4>
                  <p>${attraction.description}</p>
                  <div class="button-group">
                      <button class="btn btn-primary btn-sm" onclick="showLocationDetails('${city.name}', '${attraction.name}')">
                          View Details
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" onclick="toggleRoute('${city.name}', '${attraction.name}')">
                          Show Route
                      </button>
                  </div>
              `;
              card.addEventListener('click', (e) => {
                  // Only trigger if not clicking on buttons
                  if (!e.target.closest('button')) {
                      map.setView(attraction.coordinates, 15);
                      markers.find(m => 
                          m.getLatLng().lat === attraction.coordinates[0] && 
                          m.getLatLng().lng === attraction.coordinates[1]
                      ).openPopup();
                  }
              });
              attractionsList.appendChild(card);
          });
      }
      
      function initializeSearch() {
          const searchInput = document.getElementById('searchInput');
          const searchResults = document.querySelector('.search-results');
          
          searchInput.addEventListener('input', (e) => {
              const query = e.target.value.toLowerCase();
              if (query.length < 2) {
                  searchResults.innerHTML = '';
                  return;
              }
              
              const results = searchLocations(query);
              displaySearchResults(results);
          });
      }
      
      function searchLocations(query) {
          const results = [];
          
          ilocosSurData.cities.forEach(city => {
              if (city.name.toLowerCase().includes(query) || 
                  city.description.toLowerCase().includes(query)) {
                  results.push({
                      type: 'city',
                      city: city,
                      item: city
                  });
              }
              
              city.attractions.forEach(attraction => {
                  if (attraction.name.toLowerCase().includes(query) || 
                      attraction.description.toLowerCase().includes(query)) {
                      results.push({
                          type: 'attraction',
                          city: city,
                          item: attraction
                      });
                  }
              });
          });
          
          return results;
      }
      
      function displaySearchResults(results) {
          const searchResults = document.querySelector('.search-results');
          searchResults.innerHTML = '';
          
          if (results.length === 0) {
              searchResults.innerHTML = '<p class="text-muted">No results found</p>';
              return;
          }
          
          results.forEach(result => {
              const resultElement = document.createElement('div');
              resultElement.className = 'search-result-item p-2 border-bottom';
              resultElement.innerHTML = `
                  <h6 class="mb-1">${result.item.name}</h6>
                  <p class="mb-1 small">${result.type === 'attraction' ? `In ${result.city.name}` : 'City'}</p>
                  <p class="mb-0 small text-muted">${result.item.description}</p>
              `;
              
              resultElement.addEventListener('click', () => {
                  if (result.type === 'city') {
                      loadCity(result.item);
                  } else {
                      showLocationDetails(result.city.name, result.item.name);
                  }
                  searchModal.hide();
              });
              
              searchResults.appendChild(resultElement);
          });
      }
      
      function showLocationDetails(cityName, attractionName) {
          const city = ilocosSurData.cities.find(c => c.name === cityName);
          const attraction = city.attractions.find(a => a.name === attractionName);
          
          // Update modal content
          document.getElementById('locationTitle').textContent = attraction.name;
          document.getElementById('locationImage').src = attraction.image;
          document.getElementById('locationName').textContent = attraction.name;
          document.getElementById('locationDescription').textContent = attraction.description;
          
          // Update details
          const detailsContainer = document.getElementById('locationDetails');
          detailsContainer.innerHTML = `
              <div class="mt-3">
                  <h5>History</h5>
                  <p>${attraction.details.history}</p>
                  
                  <h5>Best Time to Visit</h5>
                  <p>${attraction.details.bestTime}</p>
                  
                  <h5>Activities</h5>
                  <ul>
                      ${attraction.details.activities.map(activity => `<li>${activity}</li>`).join('')}
                  </ul>
                  
                  <h5>Tips</h5>
                  <ul>
                      ${attraction.details.tips.map(tip => `<li>${tip}</li>`).join('')}
                  </ul>
                  
                  <button id="showRouteBtn" class="btn btn-outline-primary mt-3">
                      Show Route from ${cityName} to Here
                  </button>
              </div>
          `;
          
          // Set up route button
          document.getElementById('showRouteBtn').onclick = () => {
              toggleRoute(cityName, attractionName);
              locationModal.hide(); // Hide modal to show the route
          };
          
          // Show nearby attractions
          const nearbyContainer = document.getElementById('nearbyAttractions');
          const nearbyAttractions = city.attractions.filter(a => a.name !== attraction.name);
          nearbyContainer.innerHTML = nearbyAttractions.map(nearby => `
              <div class="col-md-4">
                  <div class="card">
                      <img src="${nearby.image}" class="card-img-top" alt="${nearby.name}">
                      <div class="card-body">
                          <h6 class="card-title">${nearby.name}</h6>
                          <button class="btn btn-sm btn-primary" onclick="showLocationDetails('${city.name}', '${nearby.name}')">
                              View Details
                          </button>
                      </div>
                  </div>
              </div>
          `).join('');
          
          // Setup show on map button
          document.getElementById('showOnMap').onclick = () => {
              locationModal.hide();
              map.setView(attraction.coordinates, 15);
              markers.find(m => 
                  m.getLatLng().lat === attraction.coordinates[0] && 
                  m.getLatLng().lng === attraction.coordinates[1]
              ).openPopup();
          };
          
          // Show the modal
          locationModal.show();
      }
      
      // Handle offline functionality
      window.addEventListener('offline', () => {
          console.log('App is offline');
          
          // Show offline notification
          showOfflineNotification();
          
          // If map was already initialized and we have cached tiles
          if (map && localStorage.getItem('cachedMapTiles')) {
              // Remove the online tile layer if it exists
              if (mapTiles) {
                  map.removeLayer(mapTiles);
                  mapTiles = null;
              }
              // Use cached tiles
              useCachedTiles(localStorage.getItem('cachedMapTiles'));
          }
          
          // Load data from localStorage
          const offlineData = JSON.parse(localStorage.getItem('ilocosSurData'));
          if (offlineData) {
              // Continue using cached data
              console.log('Using cached data');
          }
      });
      
      window.addEventListener('online', () => {
          console.log('App is back online');
          
          // Hide offline notification
          hideOfflineNotification();
          
          // Restore online tiles if needed
          if (map && !mapTiles) {
              // Remove any existing overlays
              map.eachLayer(function(layer) {
                  if (!(layer instanceof L.TileLayer) && !(layer instanceof L.Marker)) {
                      map.removeLayer(layer);
                  }
              });
              
              // Add online tiles back
              mapTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '© OpenStreetMap contributors'
              }).addTo(map);
          }
          
          // Sync any necessary data here
      });
      
      // UI notification functions for offline mode
      function showOfflineNotification() {
          const notification = document.getElementById('offline-notification') || createOfflineNotification();
          notification.style.display = 'block';
      }
      
      function hideOfflineNotification() {
          const notification = document.getElementById('offline-notification');
          if (notification) {
              notification.style.display = 'none';
          }
      }
      
      function createOfflineNotification() {
          const notification = document.createElement('div');
          notification.id = 'offline-notification';
          notification.innerHTML = 'You are offline. Using saved map data.';
          notification.style.position = 'absolute';
          notification.style.top = '10px';
          notification.style.right = '10px';
          notification.style.backgroundColor = '#ff9800';
          notification.style.color = 'white';
          notification.style.padding = '10px';
          notification.style.borderRadius = '4px';
          notification.style.zIndex = '1000';
          document.body.appendChild(notification);
          return notification;
      }
      
      function showSavingNotification() {
          const notification = document.createElement('div');
          notification.id = 'saving-notification';
          notification.innerHTML = 'Saving map area for offline use...';
          notification.style.position = 'absolute';
          notification.style.bottom = '10px';
          notification.style.left = '10px';
          notification.style.backgroundColor = '#4CAF50';
          notification.style.color = 'white';
          notification.style.padding = '10px';
          notification.style.borderRadius = '4px';
          notification.style.zIndex = '1000';
          document.body.appendChild(notification);
      }
      
      function hideSavingNotification() {
          const notification = document.getElementById('saving-notification');
          if (notification) {
              notification.innerHTML = 'Map area saved!';
              setTimeout(() => {
                  notification.remove();
              }, 3000);
          }
      }