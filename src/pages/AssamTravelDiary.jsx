import { Link } from "react-router-dom";
import "../styles/AssamTravelDiary.css";

const story = {
  title: "A Doctor’s Travel Diary: Discovering the Quiet Grace of Assam",
  category: "Northeast Diaries",
  date: "March 10, 2026",
  author: "Wanderlust Diaries",
  location: "Assam, India",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/image001.png",
};

const gallery = [
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/road-side-tree-assam.png",
    alt: "A tree beside a road in Assam",
    caption: "A quiet roadside view in Assam.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/A-Building-Puroni-Bheti.jpg",
    alt: "The heritage building at Puroni Bheti",
    caption: "The old wooden setting at Puroni Bheti.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/Local-restaurant-food-Sibsagar.jpg",
    alt: "A meal of local Assamese food in Sibsagar",
    caption: "Local flavours shared over lunch in Sibsagar.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/assam-historic.jpeg",
    alt: "Historic places associated with Assam's past",
    caption: "Historic sites from the journey.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/assam-animal-pics.jpeg",
    alt: "Wildlife seen during an Assam safari",
    caption: "A wildlife encounter during the safari.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/Wedding-Anniversary-Cake-1.png",
    alt: "Cake at a wedding anniversary celebration",
    caption: "The group’s surprise anniversary celebration.",
  },
];

const sections = [
  {
    heading: "A Family Journey to Assam",
    paragraphs: [
      "After spending more than forty years working in laboratories and hospitals, the author found that retirement brought a different kind of observation. Travel offered a way to notice landscapes, people, cultures and small moments, much as a doctor studies signs to understand a wider picture.",
      "A journey to Assam became especially meaningful because four family members travelled together across generations. They were also celebrating the couple’s 51st wedding anniversary. The grandchildren brought curiosity and energy, while the older travellers brought years of memories; sharing the trip gave both generations a new view of the same place.",
      "Their welcome began in Jorhat, where the driver greeted them with an Assamese gamosa. That simple gesture made them feel like guests being received into a culture, rather than visitors simply arriving at a destination.",
    ],
  },
  {
    heading: "Tea Gardens and Thoughtful Care",
    paragraphs: [
      "The drive from the airport passed through quiet roads and long stretches of green. Tea gardens lined the route, their ordered rows creating a calm rhythm. After years in busy cities, the landscape felt restorative.",
      "A small step stool beside the vehicle helped travellers get in and out more easily. It was a modest detail, but it showed that the arrangements had considered the needs and comfort of older guests.",
      "At Puroni Bheti, wooden buildings, verandas and an old clock gave the place a sense of continuity with the past. The visit felt less like entering a hotel and more like stepping into a lived-in story.",
    ],
  },
  {
    heading: "Travelling Across Generations",
    paragraphs: [
      "The group found its own rhythm as seniors and younger family members experienced the journey differently. The grandchildren paid close attention to tea gardens, village life and wildlife, while the elders often paused to take in the meaning of a place. Those different ways of seeing complemented each other.",
      "Meals became a regular time to reconnect. The family discovered Assamese food through fresh, balanced local dishes, and conversations at the table often continued longer than expected. In Sibsagar, a restaurant meal introduced them to a succession of local flavours and lively discussion.",
    ],
  },
  {
    heading: "Culture and History at a Gentle Pace",
    paragraphs: [
      "In a village, the travellers watched women work at traditional handlooms. The careful, rhythmic work made an impression on both generations and offered a glimpse of everyday cultural practices.",
      "Their guide also shared stories about royal burial customs and the objects associated with them. The stillness of the historic sites stayed with the group. At Ranghar, the former royal pavilion, they could imagine how the space once held games and performances.",
    ],
  },
  {
    heading: "A Wildlife Encounter",
    paragraphs: [
      "The safari moved slowly through tall grasslands. The group became quiet as they watched the landscape, and when a rhinoceros appeared nearby, everyone shared the same sense of wonder. Even the usually talkative grandchildren watched in silence.",
      "Throughout the trip, the organisers remained attentive without crowding the travellers. Their careful planning let the group focus on Assam and enjoy the days at a comfortable pace.",
    ],
  },
  {
    heading: "A Celebration to Remember",
    paragraphs: [
      "One evening, the team surprised the couple with a cake to celebrate their wedding anniversary. Family members and fellow travellers gathered around them, turning the milestone into a shared celebration.",
      "For the author, travel later in life brought a reminder that curiosity and discovery do not belong to any one age. The memories that lasted were not only of hills, tea gardens and wildlife, but also of family companionship, thoughtful care and exploring a new place together.",
    ],
  },
];

function useHeroImageOnError(event) {
  const image = event.currentTarget;

  if (image.src !== story.heroImage) {
    image.onerror = null;
    image.src = story.heroImage;
  }
}

function StoryHero() {
  return (
    <section className="assam-hero">
      <img
        className="assam-hero-image"
        src={story.heroImage}
        alt="A view from Assam"
        onError={useHeroImageOnError}
      />
      <div className="assam-hero-shade" />

      <div className="assam-hero-content">
        <span className="assam-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

function StoryGallery() {
  return (
    <div className="assam-gallery">
      {gallery.map((image) => (
        <figure className="assam-gallery-item" key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onError={useHeroImageOnError}
          />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function AssamTravelDiary() {
  return (
    <main className="assam-page">
      <StoryHero />

      <div className="assam-container">
        <nav className="assam-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{story.title}</span>
        </nav>

        <article className="assam-article">
          <header className="assam-article-header">
            <div className="assam-meta">
              <span>{story.date}</span>
              <span>By {story.author}</span>
              <span>{story.location}</span>
            </div>

            <p className="assam-intro">
              A doctor reflects on a multi-generational family journey through
              Assam’s landscapes, food, history and wildlife.
            </p>
          </header>

          <div className="assam-body">
            {sections.map((section, index) => (
              <div key={section.heading}>
                <section className="assam-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>

                {index === 1 && <StoryGallery />}
              </div>
            ))}
          </div>

          <section className="assam-tags" aria-label="Story tags">
            <h2>Tags</h2>
            <span className="assam-tag">{story.category}</span>
          </section>

          <p className="assam-disclaimer">
            The views and opinions expressed in this story belong to the author.
            Please obtain the author’s permission before reusing the writing or
            photographs.
          </p>

          <nav className="assam-related" aria-label="Related stories">
            <Link to="/egypt-stories-of-and-from-people-who-have-walked-with-time">
              Egypt: Stories of and from People Who Have Walked with Time
            </Link>
            <Link to="/a-shared-adventure-slow-exploration-and-friendship-in-india">
              A Shared Adventure: Slow Exploration and Friendship in India
            </Link>
          </nav>

          <div className="assam-back">
            <Link to="/wanderlust-diaries">← Back to Wanderlust Diaries</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
