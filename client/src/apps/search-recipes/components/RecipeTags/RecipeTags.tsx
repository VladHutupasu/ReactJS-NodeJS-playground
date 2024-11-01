import styles from "./recipeTags.module.css";

interface RecipeTagsProps {
  tags: string[];
  handleTagClick: (tag: string) => void;
  isLoading: boolean;
}

const RecipeTags: React.FC<RecipeTagsProps> = ({ tags, handleTagClick, isLoading }) => {
  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <button onClick={() => handleTagClick(tag)} disabled={isLoading} className={styles.tag} key={index}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default RecipeTags;
