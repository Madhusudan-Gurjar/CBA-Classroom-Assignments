import styles from "./BlogCard.module.css";

function BlogCard({ title, description, featured }) {
  return (
    <div
      className={`${styles.card} ${
        featured ? styles.featured : ""
      }`}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      {featured && <span className={styles.badge}>Featured</span>}
    </div>
  );
}

export default BlogCard;
