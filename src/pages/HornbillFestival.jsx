import { Link } from "react-router-dom";
import "../styles/HornbillFestival.css";

const story = {
  title: "Hornbill Festival Diaries: Colours of Nagaland",
  category: "Northeast Diaries",
  date: "January 7, 2026",
  author: "Krishna Ghosh",
  location: "Nagaland, India",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/nw.png",
  authorImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/krishna.jpg",
};

const gallery = [
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Colllague2.jpg",
    alt: "Kohima and the Hornbill Festival journey",
    caption: "Memories from the return journey to Nagaland.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Colllague11.jpg",
    alt: "Naga culture and festival traditions",
    caption: "Scenes from Nagaland’s living traditions.",
  },
];

const sections = [
  {
    heading: "Returning to Nagaland",
    paragraphs: [
      "Some journeys feel personal before they even begin. For Krishna Ghosh, travelling to Nagaland brought her back to the place where she was born and spent much of her childhood.",
      "Born in Pfutsero, she moved around the state as her father’s job changed. Phek, Wokha, Mokokchung, Kohima and Dimapur all became part of her childhood and schooling. Returning meant revisiting places that helped shape her sense of community and belonging.",
      "Nagaland is home to many indigenous communities, each with its own language, customs and festivals. The article reflects on this diversity and on traditions such as weaving, music, art, storytelling and agriculture that remain part of everyday life.",
    ],
  },
  {
    heading: "Day 1: Remembering History at Kohima War Cemetery",
    paragraphs: [
      "The first day began with a return to Kohima War Cemetery after 35 years. Set among the hills, the cemetery remembers the soldiers who died during the 1944 Battle of Kohima in the Second World War.",
      "Walking through the quiet grounds brought a renewed appreciation for the people who lost their lives and for the history held in this landscape.",
    ],
  },
  {
    heading: "Day 2: The Colours and Spirit of the Hornbill Festival",
    paragraphs: [
      "The Hornbill Festival brings communities together through music, dance and cultural celebration. Named after a bird important in Naga folklore, the festival presents traditions from across the state and celebrates a shared cultural identity.",
      "Performances felt like stories carried forward through generations. Traditional clothing and ornaments added colour, with each detail reflecting its own cultural meaning.",
      "The 2025 festival’s theme, “Cultural Connect,” focused on Naga identity, unity and the continuation of living traditions.",
    ],
  },
  {
    heading: "Day 3: People, Culture and Living Traditions",
    paragraphs: [
      "The journey included learning about the Chakhesang community, whose name brings together three linguistic groups. The community is associated with Phek district and is known for its agricultural practices, handicrafts and cultural heritage.",
      "Conversations with local people and time spent with elders made the visit feel grounded in everyday life. Culture was something experienced through people and place, rather than presented as a performance for visitors.",
    ],
  },
  {
    heading: "Tasting Tradition: Zutho and Shared Stories",
    paragraphs: [
      "The group also encountered zutho, a traditional fermented rice drink served in parts of Nagaland. Learning about it offered another way to understand how food and drink take part in local gatherings and celebrations.",
      "Sharing a taste became an occasion for conversation and stories among the travellers.",
    ],
  },
  {
    heading: "Nature’s Quiet Magic: Dzukou Valley",
    paragraphs: [
      "Dzukou Valley, on the Nagaland–Manipur border, is known for its high hills, streams and seasonal wildflowers. The valley’s distinctive Dzukou lily is one of the natural highlights, and the landscape rewards visitors willing to make the trek.",
    ],
  },
  {
    heading: "Villages That Hold the Soul of Nagaland",
    paragraphs: [
      "Khonoma is recognised for community-led conservation and sustainable living. Its history, weaving, organic farming and terrace cultivation show how community life and the surrounding landscape are connected.",
      "Jakhama, south of Kohima, also carries memories of the Second World War and continues to be shaped by strong community traditions.",
      "Other places along the journey—including Dzuleke Valley, Kisama, Pfutsero, Dimapur, Mokokchung, Wokha, Zunheboto and Phek—each added something different to the traveller’s return to Nagaland.",
    ],
  },
  {
    heading: "Coming Home",
    paragraphs: [
      "Nagaland was more than a destination for Krishna: it was the place she was born. Revisiting familiar locations after many years brought back childhood memories and a quiet feeling of gratitude.",
      "The journey became a reminder that some places already feel connected to you. Returning can bring that connection back into focus.",
    ],
  },
];

function Hero() {
  return (
    <section className="hornbill-hero">
      <img
        className="hornbill-hero-image"
        src={story.heroImage}
        alt="A view from Nagaland"
      />
      <div className="hornbill-hero-shade" />

      <div className="hornbill-hero-content">
        <span className="hornbill-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <div className="hornbill-gallery">
      {gallery.map((image) => (
        <figure className="hornbill-gallery-item" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Author() {
  return (
    <section className="hornbill-author">
      <h2>Author</h2>

      <article className="hornbill-author-card">
        <img src={story.authorImage} alt="Krishna Ghosh" loading="lazy" />
        <div>
          <h3>Ms. Krishna Ghosh</h3>
          <p>
            Krishna Ghosh has over 25 years of experience in the IT industry,
            including 13 years in telecommunications. Her work has included
            business applications, billing systems, consulting, project delivery
            and management. As a consultant and later as a project and delivery
            lead at IBM, she worked on technology solutions and multinational
            telecom projects.
          </p>
        </div>
      </article>
    </section>
  );
}

export default function HornbillFestival() {
  return (
    <main className="hornbill-page">
      <Hero />

      <div className="hornbill-container">
        <nav className="hornbill-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{story.title}</span>
        </nav>

        <article className="hornbill-article">
          <header className="hornbill-article-header">
            <div className="hornbill-meta">
              <span>{story.date}</span>
              <span>By {story.author}</span>
              <span>{story.location}</span>
            </div>

            <p className="hornbill-intro">
              A return to Nagaland becomes a journey through childhood memories,
              Naga heritage, the Hornbill Festival and the landscapes that still
              feel like home.
            </p>
          </header>

          <div className="hornbill-body">
            {sections.map((section, index) => (
              <div key={section.heading}>
                <section className="hornbill-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>

                {index === 1 && <Gallery />}
              </div>
            ))}
          </div>

          <Author />

          <section className="hornbill-tags" aria-label="Story tags">
            <h2>Tags</h2>
            <span className="hornbill-tag">{story.category}</span>
          </section>

          <p className="hornbill-disclaimer">
            The views and opinions expressed in this story belong to the author.
            Please obtain the author’s permission before reusing the writing or
            photographs.
          </p>

          <nav className="hornbill-related" aria-label="Related stories">
            <Link to="/finding-my-rhythm-in-the-sundarbans">
              Finding My Rhythm in the Sundarbans
            </Link>
            <Link to="/egypt-stories-of-and-from-people-who-have-walked-with-time">
              Egypt: Stories of and from People Who Have Walked with Time
            </Link>
          </nav>

          <div className="hornbill-back">
            <Link to="/wanderlust-diaries">← Back to Wanderlust Diaries</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
