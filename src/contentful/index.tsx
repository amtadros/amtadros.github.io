import { createClient } from "contentful";
import { BlogPostSkeleton } from "./types";

export const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_REACT_APP_CONTENTFUL_API,
  });

  const getBlogs = async () => {
    try {
      const entries = await client.getEntries<BlogPostSkeleton>({
        content_type: "blog",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const id = item.sys.id;
        return { id, ...item.fields };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log({ error });
    }
  };
  return { getBlogs };
};
