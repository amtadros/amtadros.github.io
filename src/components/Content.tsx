import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useContentful } from "../contentful";
import { useEffect, useState } from "react";
import { BlogPostFields } from "../contentful/types";
import RichText from "../contentful/RichText";

export function Content() {
  const { getBlogs } = useContentful();
  const [blogs, setBlogs] = useState<BlogPostFields[] | undefined>();

  useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  if (!blogs) return;

  return (
    <GridItem>
      <Heading size="md" pb={4}>
        🎧 You Heard It Here Second
      </Heading>
      <Text fontSize='small' pb={4} pl={2}>A "bullet point blog" of things that stood out to me from books, podcasts, etc.</Text>
      <SimpleGrid spacing={4}>
        {blogs.map((blog) => {
          return (
            <Card padding={4} key={blog.id}>
              <CardHeader>
                <Heading size="xs" textTransform="uppercase">
                  {blog.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <RichText document={blog.body} />
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </GridItem>
  );
}
