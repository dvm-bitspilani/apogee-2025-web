import { Link } from "react-router";
export default function ArchiveBar() {
  return <aside className="archive-bar" aria-label="Portfolio archive">
    <span>APOGEE 2025 · Portfolio archive</span>
    <details><summary>Explore / Demo info</summary><nav aria-label="Archive navigation">
      <p>Original frontend by DVM. Registration and quizzes use sample data; nothing is sent or saved.</p>
      {[['/', 'City'], ['/about','About'], ['/events','Events'], ['/speakers','Speakers'], ['/registration','Registration demo'], ['/quantaculus','Quiz demo'], ['/contact','Contact'], ['/sponsors','Sponsors'], ['/media','Media partners'], ['/developers','Developers']].map(([url,label]) => <Link key={url} to={url} onClick={e => e.currentTarget.closest('details').removeAttribute('open')}>{label}</Link>)}
    </nav></details>
  </aside>;
}
