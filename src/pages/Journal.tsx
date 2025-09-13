// src/pages/Journal.tsx
import { posts, type Post } from "../data/posts";

export default function Journal() {
  return (
    <section id="journal" className="container" aria-labelledby="journal-title">
      <h2 id="journal-title">Journal</h2>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div className="post-list">
          {posts.map((p: Post, i: number) => (
            <article className="post" key={p.slug ?? i}>
              <h3>{p.title}</h3>
              <time dateTime={p.dateISO}>{p.dateText}</time>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
