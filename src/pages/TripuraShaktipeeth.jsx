import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/WanderlustStory.css";

/* =====================================================
   SILVERGENIE WANDERLUST — ALL STORY DATA
   Images: public/image/blog/
===================================================== */

const stories = {
  "tripura-shaktipeeth": {
    title:
      "Shaktipeeth Stories: Exploring Faith, Dynasty, and Tradition in Tripura",
    category: "Spiritual Diaries",
    date: "April 10, 2026",
    location: "Tripura, India",
    author: "Embracing Autism",
    image: "tripura-shaktipeeth.png",
    contentImage:
      "https://www.yoursilvergenie.com/wp-content/uploads/2026/04/image003-800x800.png",
    imageCaption: "Tripura Sundari Temple — Photos by Author",
    intro:
      "Some journeys feel planned, and some feel like they are slowly revealing a story as you move through them. Tripura was the latter. What started as a visit during Basanti Puja soon unfolded into a deeper understanding of faith, history, and a royal legacy that continues to shape the region even today.",
    sections: [
      {
        heading: "Tripura Sundari Temple",
        paragraphs: [
          "In Udaipur, the Tripura Sundari Temple stands as one of the 51 Shaktipeeths, and also as a significant marker of the Manikya dynasty. It is believed that Maharaja Dhanya Manikya was guided by a divine dream, where the goddess instructed him to establish her temple at this very site. According to Hindu mythology, the right foot (or right leg) of Goddess Sati fell at the Tripureswari Temple in Tripura, making it one of the 51 sacred Shakti Peethas.",
          "What followed was not just the construction of a temple, but the beginning of a spiritual centre that continues to draw devotees from across the country. The idol of Tripureswari, considered one of the most revered forms of the goddess, holds deep significance, and the temple itself reflects a blend of devotion and royal patronage that has endured over centuries.",
          "On September 22, 2025, Prime Minister Narendra Modi inaugurated the redeveloped and refurbished Mata Tripura Sundari Temple (also known as Matabari) in Udaipur, Gomati district, Tripura. The redevelopment project, aimed at making the 524-year-old temple more accessible, inclusive, and modern, was completed under the Central Government’s PRASHAD scheme.",
        ],
      },
      {
        heading: "Kamalasagar Kali Bari",
        paragraphs: [
          "As we travelled back to Agartala at Kamalasagar, the Kasba Kali Bari sits beside a vast lake, continuing the same thread of history. This temple too is linked to the Manikya rulers, with Maharaja Dhanya Manikya credited for its origins, later maintained and supported by the royal lineage. Standing there, what truly stands out is its location. Just across the lake lies Bangladesh, with only a stretch of water separating the two.",
          "The Kamalasagar Kali Temple also stood securely during the 1971 Bangladesh Liberation War, despite its proximity to the border, and remains a symbol of the region’s cultural heritage and resilience during that time. It may not be a Shaktipeeth, but it holds its own place in the larger story of Tripura’s royal and spiritual history.",
        ],
      },
      {
        heading: "Basanti Puja and Durga Bari",
        paragraphs: [
          "The experience of Basanti Puja during Chaitra Navratri brought everything together. At Durga Bari, preparations and rituals carry a distinct sense of continuity. There is a sense of anticipation, almost like the space itself waits all year for these few days. The goddess here is worshipped in a two-handed form, which is unique and rooted in tradition.",
          "Historically, this temple has been closely associated with the royal family of Tripura, and even today, the puja is conducted at a state level regardless of the government in power. Yet, at its core, it remains a reflection of the traditions established during the Manikya dynasty, continuing practices that have been followed for generations.",
          "Alongside this, experiencing a ghar ka Durga Pujo added another dimension to the journey. At one of our patron’s homes, the celebrations felt deeply personal. The Dhunuchi Naach, performed with such energy and rhythm, brought everyone together in a way that felt effortless. It wasn’t just about observing a ritual, it was about being part of it. The music, the movement, the shared space, everything came together to create a sense of belonging that stayed with us long after.",
        ],
      },
      {
        heading: "A Living Royal Heritage",
        paragraphs: [
          "What stood out across these experiences was how closely everything is tied to the royal heritage of Tripura. The temples, the rituals, the way festivals are celebrated, all carry the imprint of the Manikya dynasty. Visiting these spaces during Basanti Puja offered a glimpse into how these traditions were once lived and continue to be carried forward, not as something preserved in the past, but as something actively practiced.",
          "As the journey came to a close, it wasn’t just about the places we had visited, but the collective feeling of community and acceptance that stayed with us. We prayed to the god to bless all of us and look forward to it happening next year, and with praise to the goddess, we ended our experience of the Shaktipeeth and faith series.",
        ],
      },
    ],
    closing: "Asche Bochor Abar Hobe.",
    tags: ["Northeast Diaries", "Spiritual Diaries"],
    curators: [
      {
        name: "Mishmi",
        image:
          "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Picture3.png",
        bio: "Mishmi is a young adult on the autism spectrum who enjoys design and music. She also works with neurodivergent children and shares her experiences of embracing autism.",
      },
      {
        name: "Gurpreet Kaur",
        image:
          "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Picture4.png",
        bio: "Gurpreet is a dedicated special educator with 16 years of experience supporting neurodivergent children and young adults with diverse abilities. She has been associated with Mishmi for several years. In addition, as a certified child psychologist, she conducts counselling sessions for young adults.",
      },
    ],
    disclaimer:
      "The views and opinions expressed in this blog are solely those of the author. The blog page is protected under SilverGenie’s copyright, while the written content remains the intellectual property of the author. Reproduction, distribution, or use of the content in any form requires the author’s prior consent. Unauthorized use or infringement will be subject to legal action.",
  },
  "kolkata-faith-history": {
    title: "A Journey Through Faith, History, and Kolkata's Essence",
    category: "Spiritual Diaries",
    date: "December 10, 2025",
    location: "Kolkata, West Bengal, India",
    author: "SilverGenie Wanderlust",
    image: "kolkata-faith.png",
    intro:
      "Explore Kolkata through its spiritual traditions, historic landmarks, cultural celebrations and distinctive everyday life.",
    sections: [
      {
        heading: "A City of Stories",
        paragraphs: [
          "Kolkata is a city where history, art, literature and spirituality come together. Its streets and neighbourhoods reflect different periods of the city's development.",
          "Historic buildings, places of worship and cultural landmarks offer visitors many opportunities to discover the city's identity.",
        ],
      },
      {
        heading: "Faith and Cultural Heritage",
        paragraphs: [
          "Religious traditions have played an important role in Kolkata's cultural life. Festivals and community celebrations continue to connect generations.",
          "Taking time to learn about these traditions helps visitors understand the stories that shape the city.",
        ],
      },
    ],
  },

  "jagadhatri-pujo": {
    title: "Jagadhatri Pujo: Celebrating Faith and Tradition",
    category: "Spiritual Diaries",
    date: "November 1, 2025",
    location: "West Bengal, India",
    author: "SilverGenie Wanderlust",
    image: "jagadhatri-puja.jpeg",
    intro:
      "Discover the devotion, artistic expression and community spirit that make Jagadhatri Pujo a memorable celebration in Bengal.",
    sections: [
      {
        heading: "The Spirit of Jagadhatri Pujo",
        paragraphs: [
          "Jagadhatri Pujo is celebrated with devotion, beautifully decorated pandals and a strong sense of community.",
          "The festival offers visitors an opportunity to experience Bengal's religious traditions and artistic heritage.",
        ],
      },
      {
        heading: "A Celebration of Art and Community",
        paragraphs: [
          "Decorations, lighting and community celebrations create a festive atmosphere that brings families and visitors together.",
          "Local traditions and the participation of residents help make the festival a distinctive cultural experience.",
        ],
      },
    ],
  },

  "durga-pujo-with-care": {
    title: "Durga Pujo: Celebrating Bengal With Care",
    category: "Spiritual Diaries",
    date: "October 8, 2025",
    location: "Kolkata, West Bengal, India",
    author: "SilverGenie Wanderlust",
    image: "durga-puja.png",
    intro:
      "Experience Durga Pujo through its artistic pandals, traditional rituals, cultural programmes and spirit of togetherness.",
    sections: [
      {
        heading: "The Grandeur of Durga Pujo",
        paragraphs: [
          "Durga Pujo transforms neighbourhoods across Bengal into vibrant spaces of celebration.",
          "Elaborate pandals, artistic installations, music and traditional rituals make the festival an important cultural experience.",
        ],
      },
      {
        heading: "Discovering Kolkata During Pujo",
        paragraphs: [
          "Visitors can explore neighbourhoods, appreciate pandal designs and discover the city's food and cultural traditions.",
          "Planning visits in advance can help make the experience more comfortable during busy celebrations.",
        ],
      },
    ],
  },

  mahakumbh: {
    title: "Mahakumbh: A Journey of Faith and Spiritual Discovery",
    category: "Spiritual Diaries",
    date: "February 26, 2025",
    location: "Prayagraj, Uttar Pradesh, India",
    author: "Dr. Tushar Kanti Majumdar & Dr. Dipika Majumdar",
    image: "mahakumbh.jpeg",
    intro:
      "Explore the spiritual significance of Mahakumbh and the gathering of pilgrims, traditions and faith.",
    sections: [
      {
        heading: "An Extraordinary Spiritual Gathering",
        paragraphs: [
          "Mahakumbh is a major religious gathering associated with centuries of spiritual traditions.",
          "Pilgrims and visitors come together to participate in rituals and experience the diverse religious practices of India.",
        ],
      },
      {
        heading: "Preparing for the Journey",
        paragraphs: [
          "Large gatherings require careful planning. Transport, accommodation and visitor guidance should be considered before departure.",
          "Visitors should follow local instructions and use designated routes and facilities.",
        ],
      },
    ],
  },

  mizoram: {
    title: "Mizoram Through My Eyes: A Journey I Will Remember",
    category: "Northeast Diaries",
    date: "September 23, 2026",
    location: "Mizoram, India",
    author: "Mr. D. B. Banerjee",
    image: "mizoram.jpg",
    intro:
      "Discover Mizoram's rolling hills, scenic landscapes and vibrant cultural traditions in Northeast India.",
    sections: [
      {
        heading: "A Landscape of Green Hills",
        paragraphs: [
          "Mizoram is known for its green hills, winding roads and peaceful surroundings.",
          "Its landscapes provide opportunities for travellers to slow down, enjoy nature and explore local communities.",
        ],
      },
      {
        heading: "Culture and Local Experiences",
        paragraphs: [
          "Local traditions, community life, food and celebrations contribute to Mizoram's distinctive cultural identity.",
          "Learning about local customs can make the journey more meaningful.",
        ],
      },
    ],
  },

  assam: {
    title: "A Doctor's Travel Diary: Discovering the Quiet Grace of Assam",
    category: "Northeast Diaries",
    date: "March 10, 2026",
    location: "Assam, India",
    author: "SilverGenie Wanderlust",
    image: "assam.png",
    intro:
      "Explore Assam's tea gardens, river landscapes, wildlife and cultural heritage on a journey through Northeast India.",
    sections: [
      {
        heading: "The Charm of Assam",
        paragraphs: [
          "Assam offers a combination of natural landscapes, tea-growing traditions and cultural heritage.",
          "Its rivers, green tea estates and historic destinations provide a range of experiences for visitors.",
        ],
      },
      {
        heading: "Nature, Culture and Heritage",
        paragraphs: [
          "Regional traditions, local cuisine and community life offer insight into Assam's cultural identity.",
          "Responsible travel can help visitors appreciate the region's natural and cultural heritage.",
        ],
      },
    ],
  },

  "hornbill-festival": {
    title: "Hornbill Festival Diaries: Colours of Nagaland",
    category: "Northeast Diaries",
    date: "January 7, 2026",
    location: "Nagaland, India",
    author: "Krishna Ghosh",
    image: "hornbill-nagaland.png",
    intro:
      "Discover Nagaland's cultural traditions through performances, crafts, music and the community spirit of the Hornbill Festival.",
    sections: [
      {
        heading: "A Celebration of Naga Culture",
        paragraphs: [
          "The Hornbill Festival showcases the cultural diversity of Nagaland through traditional performances, crafts, food and community celebrations.",
          "It offers visitors an opportunity to appreciate the region's heritage and learn about its communities.",
        ],
      },
      {
        heading: "Traditions and Craftsmanship",
        paragraphs: [
          "Festival spaces bring together music, dance, local products and food.",
          "Visitors can explore performances and learn about the stories behind cultural displays.",
        ],
      },
    ],
  },

  "neora-valley-silk-route": {
    title: "Trip to Neora Valley and East Sikkim via the Silk Route",
    category: "Northeast Diaries",
    date: "December 10, 2025",
    location: "Sikkim and the Eastern Himalayas, India",
    author: "BD Chatterjee",
    image: "neora-valley-sikkim.jpg",
    intro:
      "Explore mountain scenery, forested valleys and memorable Himalayan journeys.",
    sections: [
      {
        heading: "Into the Eastern Himalayas",
        paragraphs: [
          "The Eastern Himalayas offer forested slopes, winding roads and expansive mountain views.",
          "The journey itself can be memorable for travellers who enjoy nature and quieter destinations.",
        ],
      },
      {
        heading: "The Beauty of the Journey",
        paragraphs: [
          "Scenic routes, local villages and viewpoints provide opportunities to appreciate the region at a relaxed pace.",
          "Weather, road conditions and travel times should be checked before setting out.",
        ],
      },
    ],
  },

  meghalaya: {
    title: "Meghalaya: The Abode of Clouds",
    category: "Northeast Diaries",
    date: "June 24, 2025",
    location: "Meghalaya, India",
    author: "Paromita Sen",
    image: "meghalaya.png",
    intro:
      "Discover misty hills, waterfalls, green valleys and the natural beauty of Meghalaya.",
    sections: [
      {
        heading: "A Land of Clouds and Waterfalls",
        paragraphs: [
          "Meghalaya is known for lush landscapes, dramatic waterfalls and distinctive hill scenery.",
          "Different parts of the state offer different experiences, from lively towns to quieter countryside.",
        ],
      },
      {
        heading: "Nature and Local Culture",
        paragraphs: [
          "Local communities, food and cultural traditions add depth to Meghalaya's natural attractions.",
          "Visitors should respect local communities and follow guidance at natural sites.",
        ],
      },
    ],
  },

  "shared-adventure-india": {
    title: "A Shared Adventure: Slow Exploration and Friendship in India",
    category: "Heart of Bharat",
    date: "March 18, 2026",
    location: "India",
    author: "SilverGenie Wanderlust",
    image: "shared-adventure-india.jpg",
    intro:
      "Celebrate friendship, shared experiences and the joy of discovering India's diverse destinations together.",
    sections: [
      {
        heading: "The Joy of Travelling Together",
        paragraphs: [
          "Travel creates opportunities to share experiences, learn from one another and build lasting memories.",
          "A journey becomes more meaningful when everyone can explore at a pace that suits them.",
        ],
      },
      {
        heading: "Discovering the Heart of Bharat",
        paragraphs: [
          "From historic cities and spiritual destinations to villages and natural landscapes, India offers many ways to explore its heritage.",
          "Local food, conversations and cultural experiences often become memorable parts of a trip.",
        ],
      },
    ],
  },

  sundarbans: {
    title: "Sundarbans: A Journey Through Mangroves and Nature",
    category: "Heart of Bharat",
    date: "November 20, 2025",
    location: "West Bengal, India",
    author: "SilverGenie Wanderlust",
    image: "sundarbans.jpg",
    intro:
      "Discover the distinctive mangrove forests, waterways and natural heritage of the Sundarbans.",
    sections: [
      {
        heading: "Discovering the Mangroves",
        paragraphs: [
          "The Sundarbans are known for their mangrove forests and network of tidal waterways.",
          "The landscape offers a distinctive nature experience unlike India's mountain and desert destinations.",
        ],
      },
      {
        heading: "Wildlife and Conservation",
        paragraphs: [
          "The region supports diverse wildlife and has significant ecological importance.",
          "Responsible tourism and respect for conservation rules are important when exploring sensitive habitats.",
        ],
      },
    ],
  },

  "white-rann-moon": {
    title: "Under the White Rann Moon: A Journey Designed with Care",
    category: "Heart of Bharat",
    date: "December 19, 2025",
    location: "Rann of Kutch, Gujarat, India",
    author: "SilverGenie Wanderlust",
    image: "rann-of-kutch.jpg",
    intro:
      "Discover the striking white salt desert of Kutch and its distinctive landscapes and cultural traditions.",
    sections: [
      {
        heading: "The Magic of the White Desert",
        paragraphs: [
          "The White Rann is known for its expansive salt landscape, which changes in appearance with the light and season.",
          "Its open horizon creates a memorable setting for visitors interested in nature and photography.",
        ],
      },
      {
        heading: "The Culture of Kutch",
        paragraphs: [
          "Kutch is known for its crafts, textiles, music and regional traditions.",
          "Exploring nearby communities can add a cultural dimension to the journey.",
        ],
      },
    ],
  },

  "taj-mahal": {
    title: "No Wonder, It's a Wonder: My Solo Travel Story at the Taj Mahal",
    category: "Heart of Bharat",
    date: "October 30, 2025",
    location: "Agra, Uttar Pradesh, India",
    author: "Yvonne Krywyj",
    image: "taj-mahal.png",
    intro:
      "Discover the Taj Mahal's architectural beauty, rich history and enduring cultural significance.",
    sections: [
      {
        heading: "An Icon of Indian Heritage",
        paragraphs: [
          "The Taj Mahal is celebrated for its architecture, detailed craftsmanship and historical significance.",
          "Its design has inspired visitors from around the world for generations.",
        ],
      },
      {
        heading: "Exploring Agra",
        paragraphs: [
          "Agra offers several historic attractions and opportunities to discover local food and cultural traditions.",
          "Checking official visitor information before arrival helps with entry arrangements and timing.",
        ],
      },
    ],
  },

  kerala: {
    title: "My Kerala Diary",
    category: "Heart of Bharat",
    date: "September 14, 2025",
    location: "Kerala, India",
    author: "Namita Adhikary",
    image: "kerala.jpg",
    intro:
      "Experience Kerala's peaceful backwaters, lush landscapes and distinctive cultural traditions.",
    sections: [
      {
        heading: "A Landscape of Water and Greenery",
        paragraphs: [
          "Kerala is known for its backwaters, tropical scenery, hill destinations and coastal communities.",
          "Travellers can combine nature, culture and relaxation while exploring the region.",
        ],
      },
      {
        heading: "Local Culture and Experiences",
        paragraphs: [
          "Regional food, traditional arts and local communities are an important part of Kerala's identity.",
          "A balanced itinerary can include sightseeing alongside slower experiences that allow time to appreciate the surroundings.",
        ],
      },
    ],
  },

  "darjeeling-kalimpong-kurseong": {
    title: "Discovering Darjeeling, Kalimpong and Kurseong",
    category: "Northeast Diaries",
    date: "",
    location: "West Bengal, India",
    author: "SilverGenie Wanderlust",
    image: "darjeeling.png",
    intro:
      "Explore the hill towns, tea gardens and mountain scenery of Darjeeling, Kalimpong and Kurseong.",
    sections: [
      {
        heading: "A Journey Through the Hills",
        paragraphs: [
          "The hill towns of North Bengal are known for mountain views, tea gardens and distinctive local cultures.",
          "Each destination offers its own atmosphere, scenic routes and opportunities to slow down and explore.",
        ],
      },
    ],
  },

  "italy-switzerland": {
    title:
      "Across Generations, Across Europe: A Winter Journey Through Italy & Switzerland",
    category: "Asia, Africa & Europe",
    date: "September 7, 2026",
    location: "Italy and Switzerland, Europe",
    author: "Chaha Mukherjee",
    image: "italy-switzerland.png",
    intro:
      "Discover Italy's historic cities and Switzerland's Alpine landscapes on a memorable European journey.",
    sections: [
      {
        heading: "The Charm of Italy",
        paragraphs: [
          "Italy offers historic architecture, renowned art, regional food and lively public spaces.",
          "Exploring at a relaxed pace leaves time to enjoy city streets, museums and local neighbourhoods.",
        ],
      },
      {
        heading: "The Beauty of Switzerland",
        paragraphs: [
          "Switzerland is known for mountain scenery, lakes, charming towns and scenic transport connections.",
          "Rail journeys and visits to mountain destinations can be memorable parts of a European itinerary.",
        ],
      },
    ],
  },

  bhutan: {
    title: "Bhutan Through the Comfort of Care",
    category: "Asia, Africa & Europe",
    date: "July 6, 2026",
    location: "Bhutan",
    author: "Namita Adhikary and Bhagirath Saha",
    image: "bhutan.png",
    intro:
      "Discover Bhutan's peaceful monasteries, mountain landscapes and distinctive cultural traditions.",
    sections: [
      {
        heading: "A Himalayan Kingdom",
        paragraphs: [
          "Bhutan is known for its mountain scenery, monasteries and distinctive cultural heritage.",
          "Its landscapes and traditions offer a memorable perspective on Himalayan travel.",
        ],
      },
      {
        heading: "Culture and Spiritual Heritage",
        paragraphs: [
          "Monasteries, traditional architecture and local festivals play an important role in Bhutanese cultural life.",
          "Visitors should respect local customs and follow guidance at religious and cultural sites.",
        ],
      },
    ],
  },

  japan: {
    title: "Walking Backwards Through Blossoms: Our Story in Japan",
    category: "Asia, Africa & Europe",
    date: "April 13, 2026",
    location: "Japan",
    author: "SilverGenie Wanderlust",
    image: "japan.png",
    intro:
      "Explore Japan's seasonal beauty, historic temples, contemporary cities and enduring cultural traditions.",
    sections: [
      {
        heading: "A Country of Contrasts",
        paragraphs: [
          "Japan brings together historic shrines, traditional neighbourhoods and contemporary city life.",
          "Combining major cities with quieter cultural destinations can reveal different sides of the country.",
        ],
      },
      {
        heading: "Traditions and Seasonal Beauty",
        paragraphs: [
          "Japanese culture offers traditional arts, regional food and seasonal landscapes.",
          "Respecting local etiquette can make visits to cultural and religious sites more meaningful.",
        ],
      },
    ],
  },

  egypt: {
    title: "Egypt: Stories of and from People Who Have Walked with Time",
    category: "Asia, Africa & Europe",
    date: "March 3, 2026",
    location: "Egypt",
    author: "Paroma Ganguly",
    image: "egypt.png",
    intro:
      "Explore Egypt's extraordinary historical heritage, ancient monuments and landscapes shaped by the Nile.",
    sections: [
      {
        heading: "Discovering Ancient Egypt",
        paragraphs: [
          "Egypt is home to some of the world's best-known ancient monuments and archaeological sites.",
          "These places offer insight into the achievements, beliefs and lives of ancient civilisations.",
        ],
      },
      {
        heading: "The Nile and Egyptian Culture",
        paragraphs: [
          "The Nile has played a central role in Egypt's history and continues to shape life across the country.",
          "Local markets, regional food and cultural experiences can complement visits to historic landmarks.",
        ],
      },
    ],
  },

  "vietnam-cambodia": {
    title: "Under the Same Sky: Notes from Vietnam and Cambodia",
    category: "Asia, Africa & Europe",
    date: "October 27, 2025",
    location: "Vietnam and Cambodia, Southeast Asia",
    author: "Kuhu Adhikary",
    image: "vietnam-cambodia.png",
    intro:
      "Discover the history, landscapes, local traditions and memorable experiences of Vietnam and Cambodia.",
    sections: [
      {
        heading: "Exploring Vietnam",
        paragraphs: [
          "Vietnam offers experiences ranging from lively cities and historic streets to scenic countryside and coastal destinations.",
          "Local food, markets and cultural landmarks provide opportunities to discover the country's traditions.",
        ],
      },
      {
        heading: "Discovering Cambodia",
        paragraphs: [
          "Cambodia is known for its historic temple complexes, cultural heritage and distinctive local traditions.",
          "Visitors can explore heritage sites while learning about the country's history and contemporary culture.",
        ],
      },
    ],
  },
};

/* =====================================================
   IMAGE PATH
   public/image/blog/<filename>
===================================================== */

function getStoryImageUrl(image) {
  if (!image) return "";

  const baseUrl = import.meta.env.BASE_URL || "/";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  return `${cleanBase}image/blog/${image}`;
}

/* =====================================================
   HERO IMAGE
===================================================== */

function StoryHero({ story }) {
  const [imageFailed, setImageFailed] = useState(false);

  const imageUrl = getStoryImageUrl(story.image);

  return (
    <section className="wanderlust-story-hero">
      {!imageFailed && imageUrl ? (
        <img
          src={imageUrl}
          alt={story.title}
          className="wanderlust-story-hero-image"
          loading="eager"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="wanderlust-story-hero-placeholder">
          <span>SILVERGENIE WANDERLUST</span>
          <p>{story.title}</p>
          <small>Image not found: public/image/blog/{story.image}</small>
        </div>
      )}

      <div className="wanderlust-story-hero-overlay">
        <span className="wanderlust-story-hero-category">{story.category}</span>

        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

/* =====================================================
   STORY NOT FOUND
===================================================== */

function StoryNotFound() {
  return (
    <main className="wanderlust-story-page">
      <div className="wanderlust-story-container">
        <h1>Story Not Found</h1>

        <p>
          This travel story could not be found. Please return to Wanderlust
          Diaries.
        </p>

        <Link to="/wanderlust-diaries" className="wanderlust-story-back">
          ← Back to Wanderlust Diaries
        </Link>
      </div>
    </main>
  );
}

/* =====================================================
   MAIN STORY PAGE
===================================================== */

export default function WanderlustStory() {
  const { slug } = useParams();
  const story = stories[slug];

  if (!story) {
    return <StoryNotFound />;
  }

  return (
    <main className="wanderlust-story-page">
      {/* HERO IMAGE AT THE TOP */}

      <StoryHero story={story} />

      {/* BREADCRUMB */}

      <div className="wanderlust-story-container">
        <nav className="wanderlust-story-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span>/</span>
          <span>{story.title}</span>
        </nav>

        {/* ARTICLE DETAILS */}

        <article className="wanderlust-story-article">
          <header className="wanderlust-story-header">
            <p className="wanderlust-story-intro">{story.intro}</p>

            <div className="wanderlust-story-meta">
              {story.date && <span>{story.date}</span>}

              {story.author && <span>By {story.author}</span>}

              {story.location && <span>{story.location}</span>}
            </div>
          </header>

          {/* ARTICLE BODY */}

          <div className="wanderlust-story-body">
            {story.sections.map((section, index) => (
              <section
                className="wanderlust-story-content-section"
                key={`${slug}-section-${index}`}
              >
                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={`${slug}-${index}-${pIndex}`}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          {/* ARTICLE IMAGE */}
          {story.contentImage && (
            <figure className="wanderlust-story-inline-image">
              <img src={story.contentImage} alt={story.title} loading="lazy" />
              {story.imageCaption && (
                <figcaption>{story.imageCaption}</figcaption>
              )}
            </figure>
          )}

          {/* CLOSING LINE */}
          {story.closing && (
            <p className="wanderlust-story-closing">{story.closing}</p>
          )}

          {/* CURATORS */}
          {story.curators?.length > 0 && (
            <section className="wanderlust-story-curators">
              <h3>About The Curators</h3>
              <div className="wanderlust-story-curators-grid">
                {story.curators.map((curator) => (
                  <article key={curator.name}>
                    {curator.image && (
                      <img
                        src={curator.image}
                        alt={curator.name}
                        loading="lazy"
                      />
                    )}
                    <h4>{curator.name}</h4>
                    <p>{curator.bio}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* TAGS */}
          <section className="wanderlust-story-tags">
            <h3>Tags</h3>
            <div className="wanderlust-story-tags-list">
              {(story.tags || [story.category, story.location]).map((tag) => (
                <span className="wanderlust-story-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* DISCLAIMER */}
          {story.disclaimer && (
            <p className="wanderlust-story-disclaimer">{story.disclaimer}</p>
          )}
          {/* NAVIGATION */}

          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust-diaries" className="wanderlust-story-back">
              ← Back to Wanderlust Diaries
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
