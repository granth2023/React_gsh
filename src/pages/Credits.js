import React from "react";
import BgServices from "../components/BgServices.js";
import HamburgerNav from "../components/HamburgerNav.js";

const Credits = (handleNavigation) => (
  <div className="credits-container" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <BgServices />
      <HamburgerNav handleNavigation={handleNavigation} />
    <h1>Grant Harris</h1>
    <p>New York, NY | turkeyroll.grant@gmail.com</p>
    <p><strong>Writer | Director | Editor | Producer</strong> — <em>$186.00/hr</em></p>

    <h2>Profile</h2>
    <p>
      Multidisciplinary filmmaker with strengths in narrative development, character-driven storytelling, and genre exploration. Experienced from concept to final delivery. Coachable, collaborative, and creatively resourceful.
    </p>

    <h2>Core Skills</h2>
    <ul>
      <li><strong>Screenwriting:</strong> Dialogue · Character Arcs · Genre Structure · Theme & Subtext · Rewrites</li>
      <li><strong>Directing:</strong> Blocking · Actor Motivation · Shot Planning · Improvisation</li>
      <li><strong>Editing:</strong> DaVinci Resolve · Clip Selection · Scene Pacing · Voiceover & SFX</li>
      <li><strong>Producing:</strong> Scheduling · Budgeting · Casting · Permitting · Deliverables · Festivals</li>
    </ul>

    <h2>Projects</h2>
    <h3>INSIDE BASEBALL</h3>
    <p><em>Feature Film | Romance/Comedy — Writer / Producer</em> (June 2025 – Present)</p>
    <ul>
      <li>Developed feature script from concept through revisions</li>
      <li>Created early development materials for pitching and storyboarding</li>
      <li>Synopsis: A reluctant heir inherits a baseball team and replaces the manager with an AI system</li>
    </ul>

    <h3>SIDES</h3>
    <p><em>Short Film (10 min) | Melodrama — Writer / Director / Producer / Editor</em> (April 2025 – Present)</p>
    <ul>
      <li>Wrote, shot, and edited short film on a $1,000 budget</li>
      <li>Directed 14-hour shoot with 6-person crew and two lead actors</li>
      <li>Synopsis: A first-time actor becomes possessed by the role they audition for</li>
    </ul>

    <h3>MACKENZIE'S 30TH BIRTHDAY</h3>
    <p><em>Short Film (3 min) | Documentary — Director / Editor / Producer</em> (May 2025 – Present)</p>
    <ul>
      <li>Filmed and edited iPhone-shot documentary with zero budget</li>
      <li>Captured candid moments over a 3-day birthday weekend</li>
    </ul>

    <h3>GHOSTWRITER</h3>
    <p><em>Short Film (5 min) | Drama — Writer / Director / Producer / Editor</em> (Nov 2024 – Mar 2025)</p>
    <ul>
      <li>Solo production completed on $250 budget</li>
      <li>Directed a silent film in one day with a single actor</li>
      <li>Synopsis: A creatively blocked writer receives help from a mysterious force</li>
    </ul>

    <h3>DIPIAZZA WEDDING TRAILER</h3>
    <p><em>Wedding Film (2 min) — Editor / Producer</em> (Feb 2023 – May 2023)</p>
    <ul>
      <li>Reviewed 24+ hours of footage to craft a 2-min trailer</li>
      <li>Edited with DaVinci Resolve to match Succession-style tone and music</li>
    </ul>

    <h2>Statement</h2>
    <p>
      I stay true to the core idea and let genre and structure elevate it. I bring full-spectrum creative and technical skill to each project—always collaborative, always committed. Whether leading a team or supporting one, I serve the story.
    </p>

    <h2>Education</h2>
    <ul>
      <li><strong>University of Miami</strong> — B.S. in Communication, Major: Motion Pictures</li>
      <li><strong>Upright Citizens Brigade Theatre (UCB)</strong> — Training in Long-form Improv, Character, and Sketch Writing</li>
    </ul>
  </div>
);

export default Credits;
