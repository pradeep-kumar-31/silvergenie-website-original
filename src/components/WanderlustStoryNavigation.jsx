import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/WanderlustStoryNavigation.css";

const stories = [
  {
    path: "/wanderlust/tripura-shaktipeeth",
    title: "Tripura Shaktipeeth",
  },
  {
    path: "/wanderlust/kolkata-faith-history",
    title: "A Journey Through Faith, History, and Kolkata’s Essence",
  },
  {
    path: "/wanderlust/jagadhatri-pujo",
    title: "Jagadhatri Pujo",
  },
  {
    path: "/wanderlust/durga-pujo-with-care",
    title: "Durga Pujo With Care",
  },
  {
    path: "/wanderlust/mahakumbh",
    title: "Experiencing the Mahakumbh",
  },
  {
    path: "/wanderlust/mizoram",
    title: "Mizoram",
  },
  {
    path: "/wanderlust/assam",
    title: "Assam",
  },
  {
    path: "/wanderlust/hornbill-festival",
    title: "Hornbill Festival",
  },
  {
    path: "/wanderlust/neora-valley-silk-route",
    title: "Neora Valley & Silk Route",
  },
  {
    path: "/wanderlust/meghalaya",
    title: "Meghalaya",
  },
  {
    path: "/wanderlust/shared-adventure-india",
    title: "Shared Adventure in India",
  },
  {
    path: "/wanderlust/sundarbans",
    title: "Sundarbans",
  },
  {
    path: "/wanderlust/white-rann-moon",
    title: "Under the White Rann Moon",
  },
  {
    path: "/wanderlust/taj-mahal",
    title: "Taj Mahal",
  },
  {
    path: "/wanderlust/kerala",
    title: "Kerala",
  },
  {
    path: "/wanderlust/darjeeling-kalimpong-kurseong",
    title: "Darjeeling, Kalimpong & Kurseong",
  },
  {
    path: "/wanderlust/egypt",
    title: "Egypt",
  },
  {
    path: "/wanderlust/japan",
    title: "Japan",
  },
  {
    path: "/wanderlust/bhutan",
    title: "Bhutan",
  },
  {
    path: "/wanderlust/italy-switzerland",
    title: "Italy & Switzerland",
  },
  {
    path: "/wanderlust/vietnam-cambodia",
    title: "Vietnam & Cambodia",
  },
];

export default function WanderlustStoryNavigation() {
  const { pathname } = useLocation();

  const currentIndex = stories.findIndex(
    (story) => story.path === pathname
  );

  if (currentIndex === -1) {
    return null;
  }

  const previous =
    currentIndex > 0
      ? stories[currentIndex - 1]
      : null;

  const next =
    currentIndex < stories.length - 1
      ? stories[currentIndex + 1]
      : null;

  return (
    <nav
      className="wanderlust-story-navigation"
      aria-label="Wanderlust story navigation"
    >
      <div className="wanderlust-story-navigation-inner">

        {previous ? (
          <Link
            className="wanderlust-story-nav-button"
            to={previous.path}
          >
            <span className="wanderlust-story-nav-caption">
              PREVIOUS STORY
            </span>

            <span className="wanderlust-story-nav-title">
              ← {previous.title}
            </span>
          </Link>
        ) : (
          <span className="wanderlust-story-nav-spacer" />
        )}

        <Link
          className="wanderlust-story-nav-home"
          to="/wanderlust-diaries"
        >
          Back to Wanderlust Diaries
        </Link>

        {next ? (
          <Link
            className="wanderlust-story-nav-button wanderlust-story-nav-next"
            to={next.path}
          >
            <span className="wanderlust-story-nav-caption">
              NEXT STORY
            </span>

            <span className="wanderlust-story-nav-title">
              {next.title} →
            </span>
          </Link>
        ) : (
          <span className="wanderlust-story-nav-spacer" />
        )}

      </div>
    </nav>
  );
}